// GET /api/auth
// Kicks off the GitHub OAuth flow for Decap CMS. Decap opens this URL in a
// popup when you click "Login with GitHub" on /admin/.
//
// Requires two Cloudflare Pages environment variables (set as *secrets*,
// never committed to the repo): GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET.

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const redirectUri = `${url.origin}/api/callback`;
  const state = crypto.randomUUID();

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const headers = new Headers({ Location: authorizeUrl.toString() });
  // Short-lived cookie so /api/callback can confirm this request started here
  // (basic CSRF protection for the OAuth handshake).
  headers.append(
    "Set-Cookie",
    `decap_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );

  return new Response(null, { status: 302, headers });
}
