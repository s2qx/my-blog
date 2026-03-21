---
title: "Smart IoT Electric Extension – Setup Guide"
draft: false
description: "Step-by-step guide to configure the Smart IoT Electric Extension using ESP32, RemoteXY Cloud, Telegram alerts, and Alexa integration."
---

⚠️ **Important Safety Warning**

Before starting the setup process:

- **Do NOT connect the extension board to mains electricity (220V).**
- Perform all configuration and programming **while the ESP32 is powered only through USB**.
- If possible, **remove the ESP32 module from the extension board during programming**.
- The extension should only be connected to electricity **after firmware upload and configuration are completed**.

This prevents electric shock, hardware damage, and unsafe operation.

---

## Contents

- [Install Arduino IDE and ESP32 Support](#install-arduino-ide-and-esp32-support)
- [Install Required Libraries](#install-required-libraries)
- [Create RemoteXY Cloud Token](#create-remotexy-cloud-token)
- [Setup Telegram Alerts](#setup-telegram-alerts)
- [Setup Alexa Control (SinricPro)](#setup-alexa-control-sinricpro)
- [Upload Firmware to ESP32](#upload-firmware-to-esp32)
- [Connect the Device to WiFi](#connect-the-device-to-wifi)
- [Connect Using RemoteXY Mobile App](#connect-using-remotexy-mobile-app)
- [System Operation and Safety](#system-operation-and-safety)

---

# Install Arduino IDE and ESP32 Support

1. Install **Arduino IDE 2.x** from:

https://www.arduino.cc/en/software

2. Open Arduino IDE and go to:


File → Preferences


3. In **Additional Boards Manager URLs**, add:


https://espressif.github.io/arduino-esp32/package_esp32_index.json


4. Press **OK**

5. Install ESP32 boards:


Tools → Board → Boards Manager


Search for **ESP32** and install:


ESP32 by Espressif Systems


6. Select the board:


Tools → Board → ESP32 Arduino → ESP32 Dev Module


---

# Install Required Libraries

Open:


Sketch → Include Library → Manage Libraries


Install the following libraries:

- **RemoteXY**
- **SinricPro**

These libraries allow the system to connect to the RemoteXY cloud and Alexa.

---

# Create RemoteXY Cloud Token

1. Open:

https://remotexy.com

2. Login to your account.

3. Click:


My tokens


4. Press:


Create new token


5. Fill the form:

Board Name


Smart IoT Electric Extension


Cloud Server


cloud.remotexy.com


6. Press **Create**

RemoteXY will generate a token similar to:


0123456789abcdef0123456789abcdef


7. Open your Arduino code and find:


#define REMOTEXY_CLOUD_TOKEN "REMOTEXY_CLOUD_TOKEN"

Replace it with your token:

#define REMOTEXY_CLOUD_TOKEN "YOUR_TOKEN_HERE"
Setup Telegram Alerts

Telegram is used to notify the user when overcurrent protection trips a socket.

1. Create a Telegram Bot

Open Telegram and search for:

@BotFather

Start the bot:

/start

Create a new bot:

/newbot

Choose a bot name and username.

BotFather will return a token like:

123456789:AAExampleBotToken
2. Get Your Chat ID

Send a message to your bot.

Open the following link:

https://api.telegram.org/botBOT_TOKEN/getUpdates

Replace BOT_TOKEN with your token.

Find your chat ID:

"chat":{"id":123456789}
3. Add Credentials to Code

Insert the values in your firmware:

const char* TG_BOT_TOKEN = "YOUR_BOT_TOKEN";
const char* TG_CHAT_ID   = "YOUR_CHAT_ID";
Setup Alexa Control (SinricPro)

Create an account at:

https://sinric.pro

Create four devices of type:

Switch

Example names:

Socket 1
Socket 2
Socket 3
Socket 4

Copy the following credentials:

APP KEY

APP SECRET

DEVICE IDs

Insert them into the code:

#define SINRIC_APP_KEY    "YOUR_APP_KEY"
#define SINRIC_APP_SECRET "YOUR_APP_SECRET"

#define DEVICE_ID_1 "DEVICE_ID_1"
#define DEVICE_ID_2 "DEVICE_ID_2"
#define DEVICE_ID_3 "DEVICE_ID_3"
#define DEVICE_ID_4 "DEVICE_ID_4"

Now Alexa can control the sockets.

Example command:

Alexa, turn on Socket 1
Upload Firmware to ESP32

Connect the ESP32 using USB.

Select the COM port:

Tools → Port

Example:

COM5

Compile the code:

Verify ✔

Upload firmware:

Upload →

If upload fails, hold the BOOT button during upload.

Open the Serial Monitor:

Tools → Serial Monitor

Set baud rate:

115200

Example output:

[ACS712] Calibrating offsets
[STA] Connecting
[SYS] Ready
Connect the Device to WiFi

If WiFi credentials are not stored, the ESP32 creates an access point.

Connect your phone to:

Smart IoT Electric ExtensionXXXX

Open browser:

http://setup.local

Press:

Scan

Select your WiFi network.

Enter password.

Press:

Save & Connect

The device will reboot and connect to your router.

Connect Using RemoteXY Mobile App

Install the RemoteXY app.

Open the app and press:

Connect

Select:

Cloud Server

Enter your Cloud Token.

Press:

Connect

You can now control the extension remotely.

System Operation and Safety

Using the RemoteXY app you can:

Turn each outlet ON / OFF

Set current limits (1A / 2A / 3A)

Monitor current consumption

Monitor temperature

Monitor energy usage (kWh)

Safety Features
Over-Temperature Protection

If temperature exceeds 60°C, all sockets automatically turn OFF.

Over-Current Protection

If current exceeds the selected limit for 5 seconds, that socket turns OFF and a Telegram alert is sent.

Final Step

After completing configuration:

Disconnect ESP32 from USB.

Reinstall the ESP32 module.

Plug the extension into the 220V outlet.

The Smart IoT Electric Extension is now ready for operation.


---

# 3️⃣ One thing that will make this **10× better**

For your blog tutorial section, add **three things**:

### 1️⃣ System architecture diagram  
ESP32 → RemoteXY → Sinric → Telegram → Alexa

### 2️⃣ PCB image

### 3️⃣ RemoteXY interface screenshot

This will make the tutorial look like a **real engineering documentation page**, which fits your blog theme and project pages well :contentReference[oaicite:1]{index=1}.

---

✅ If you want, I can also generate:

- **A professional system architecture diagram**
- **A Quick Start (5 steps) section**
- **A wiring diagram for ESP32 + sensors + relays**

which will make this **look like a real open-source hardware project documentation** similar to ESPHome / Arduino docs.