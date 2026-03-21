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

# Setup Guide

## Contents

1. [Install Arduino IDE and ESP32 Support](#install-arduino-ide-and-esp32-support)
2. [Install Required Libraries](#install-required-libraries)
3. [Create RemoteXY Cloud Token](#create-remotexy-cloud-token)
4. [Setup Telegram Alerts](#setup-telegram-alerts)
5. [Setup Alexa Control (SinricPro)](#setup-alexa-control-sinricpro)
6. [Upload Firmware to ESP32](#upload-firmware-to-esp32)
7. [Connect the Device to WiFi](#connect-the-device-to-wifi)
8. [Connect Using RemoteXY Mobile App](#connect-using-remotexy-mobile-app)
9. [System Operation and Safety](#system-operation-and-safety)

---

## Install Arduino IDE and ESP32 Support

Download Arduino IDE:

```
https://www.arduino.cc/en/software
```

Open Arduino IDE and go to:

```
File → Preferences
```

Add this to **Additional Boards Manager URLs**:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

Press **OK**.

Open Boards Manager:

```
Tools → Board → Boards Manager
```

Search and install:

```
ESP32 by Espressif Systems
```

Select the board:

```
Tools → Board → ESP32 Arduino → ESP32 Dev Module
```

---

## Install Required Libraries

Open Library Manager:

```
Sketch → Include Library → Manage Libraries
```

Install the following libraries:

```
RemoteXY
SinricPro
```

These libraries allow the system to communicate with **RemoteXY Cloud** and **Alexa**.

---

## Create RemoteXY Cloud Token

Open:

```
https://remotexy.com
```

Login and navigate to:

```
My tokens
```

Click:

```
Create new token
```

Fill in:

Board Name

```
Smart IoT Electric Extension
```

Cloud Server

```
cloud.remotexy.com
```

RemoteXY will generate a token similar to:

```
0123456789abcdef0123456789abcdef
```

Open your Arduino firmware and replace:

```cpp
#define REMOTEXY_CLOUD_TOKEN "REMOTEXY_CLOUD_TOKEN"
```

with

```cpp
#define REMOTEXY_CLOUD_TOKEN "YOUR_TOKEN_HERE"
```

---

## Setup Telegram Alerts

Telegram will notify the user when **overcurrent protection trips a socket**.

## Create a Telegram Bot

Search for:

```
@BotFather
```

Start the bot:

```
/start
```

Create a new bot:

```
/newbot
```

You will receive a **Bot Token** similar to:

```
123456789:AAExampleBotToken
```

---

## Get Your Chat ID

Send any message to your bot.

Open this URL:

```
https://api.telegram.org/botBOT_TOKEN/getUpdates
```

Replace **BOT_TOKEN** with your real bot token.

Find this field:

```
"chat":{"id":123456789}
```

That number is your **Telegram Chat ID**.

---

## Add Credentials to the Firmware

Insert the credentials into your code:

```cpp
const char* TG_BOT_TOKEN = "YOUR_BOT_TOKEN";
const char* TG_CHAT_ID   = "YOUR_CHAT_ID";
```

---

## Setup Alexa Control (SinricPro)

Create an account:

```
https://sinric.pro
```

Create **four devices** of type:

```
Switch
```

Example names:

```
Socket 1
Socket 2
Socket 3
Socket 4
```

Copy the following credentials:

```
APP KEY
APP SECRET
DEVICE IDs
```

Insert them into the firmware:

```cpp
#define SINRIC_APP_KEY    "YOUR_APP_KEY"
#define SINRIC_APP_SECRET "YOUR_APP_SECRET"

#define DEVICE_ID_1 "DEVICE_ID_1"
#define DEVICE_ID_2 "DEVICE_ID_2"
#define DEVICE_ID_3 "DEVICE_ID_3"
#define DEVICE_ID_4 "DEVICE_ID_4"
```

Example Alexa command:

```
Alexa, turn on Socket 1
```

---

## Upload Firmware to ESP32

Connect ESP32 using USB.

Select the COM port:

```
Tools → Port
```

Example:

```
COM5
```

Compile the code:

```
Verify ✔
```

Upload firmware:

```
Upload →
```

If upload fails, **hold the BOOT button during upload**.

Open Serial Monitor:

```
Tools → Serial Monitor
```

Set baud rate:

```
115200
```

Example output:

```
[ACS712] Calibrating offsets
[STA] Connecting
[SYS] Ready
```

---

## Connect the Device to WiFi

If WiFi credentials are not stored, the ESP32 creates an access point.

Connect your phone to:

```
Smart IoT Electric ExtensionXXXX
```

Open browser:

```
http://setup.local
```

Press:

```
Scan
```

Select your WiFi network.

Enter password.

Press:

```
Save & Connect
```

The device will reboot and connect to your router.

---

## Connect Using RemoteXY Mobile App

Install the **RemoteXY** mobile application.

Open the app and press:

```
Connect
```

Select:

```
Cloud Server
```

Enter your **Cloud Token**.

Press:

```
Connect
```

You can now control the extension remotely.

---

## System Operation and Safety

Using the RemoteXY app you can:

- Turn each outlet **ON / OFF**
- Set current limits **(1A / 2A / 3A)**
- Monitor **current consumption**
- Monitor **temperature**
- Monitor **energy usage (kWh)**

---

## Safety Features

### Over-Temperature Protection

If temperature exceeds **60°C**, all sockets automatically turn **OFF**.

### Over-Current Protection

If current exceeds the selected limit for **5 seconds**, that socket turns **OFF** and a **Telegram alert** is sent.

---

# Final Step

After completing configuration:

1. Disconnect ESP32 from USB  
2. Reinstall ESP32 on the extension board  
3. Plug the extension into the **220V outlet**

The **Smart IoT Electric Extension** is now ready for operation.