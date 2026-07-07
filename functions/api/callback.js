// GET /api/callback
// GitHub redirects here after the user approves the OAuth app. This
// exchanges the temporary "code" for an access token (server-side, so the
// client secret never reaches the browser) and hands the token back to the
// Decap CMS popup using the message format Decap expects.

function popupResponse(status, payload) {
  const html = `<!DOCTYPE html><html><body>
<script>
(function () {
  function receiveMessage() {
    window.opener.postMessage(
      'authorization:github:${status}:${JSON.stringify(payload)}',
      '*'
    );
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body></html>`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieHeader = request.headers.get("Cookie") || "";
  const savedState = (cookieHeader.match(/decap_oauth_state=([^;]+)/) || [])[1];

  if (!code || !state || state !== savedState) {
    return popupResponse("error", { message: "OAuth state mismatch — please try logging in again." });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenRes.json();

  if (data.error || !data.access_token) {
    return popupResponse("error", { message: data.error_description || "GitHub did not return a token." });
  }

  return popupResponse("success", { token: data.access_token, provider: "github" });
}
