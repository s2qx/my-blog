---
title: "Smart IoT Electric Extension – Setup Guide"
draft: false
description: "Step-by-step guide to configure the Smart IoT Electric Extension using ESP32, RemoteXY Cloud, Telegram alerts, and Alexa integration."
---

<style>
html {
  scroll-behavior: smooth;
}
</style>

## Project Team

<div style="text-align:center;margin-bottom:30px;">

<img src="/images/smart-extension/team.JPEG"
     style="width:100%;max-width:700px;border-radius:16px;border:3px solid var(--primary);" />

<p style="margin-top:10px;color:var(--secondary);font-size:14px;line-height:1.6;">
Saad AL Mubaireek<br>
Mohammed Al Abdullah<br>
Mshari Al Jari<br>
Alwaleed Al Qahtani<br>
Musaad Alharbi<br>
Rayan Alhizam<br><br>
<strong>Advisor:</strong> Dr. Mohammed Alshakhs
</p>

</div>

## Acknowledgment

I would like to express my sincere thanks to **Dr. Mohammed Alshakhs** for his guidance and continuous support throughout the project.  

I also appreciate my teammates **Mohammed Al Abdullah, Mshari Al Jari, Alwaleed Al Qahtani, Musaad Alharbi, and Rayan Alhizam** who worked with me on this project.  

Finally, I would like to thank **King Faisal University** and the **Electrical Engineering Department** for providing the environment and resources that made this work possible.

---

# Smart IoT Electric Extension

This system is designed to provide a **smart, safe, and remotely controlled power extension** with features such as:

- Remote control via **mobile app (RemoteXY)**
- Voice control using **Amazon Alexa**
- Real-time **current and energy monitoring**
- **Over-current protection** with Telegram alerts
- **Over-temperature safety shutdown**

---

## 📄 Project Resources

- 📘 [Download Full Report](https://drive.google.com/file/d/142BBXYnQJlg6T29cSHDW1GGPBv1nqIF9/view?usp=sharing)
- 🎥 Watch Setup Guide Video :

{{< youtube SNEaLa4JW10 >}}

- 🎥 Watch assembly Video :

{{< youtube 93klfbm3Hts >}}

---

## 📊 System Overview

![Design Workflow](/images/smart-extension/Design_workflow.jpg)

*Overall workflow of the system from power input to monitoring and control.*

---

# System Overview and Design

## 🧠 System Architecture

### Software Block Diagram

![Software Block Diagram](/images/smart-extension/Software_Block_Diagram.jpg)

---

### Circuit Diagram

![System Circuit Diagram](/images/smart-extension/System_circuit_diagram.jpg)

---

## ⚙️ System Operation

Using the RemoteXY app you can:

- Turn sockets ON/OFF  
- Set current limits  
- Monitor current and temperature  
- Track energy usage  

---

## 🧩 Hardware Implementation

### Full PCB Assembly

![Full PCB](/images/smart-extension/FULL_PCB.jpg)

---

### Main PCB + Current Board

![Main PCB](/images/smart-extension/Both_main_PCB_and_current.png)

---

## 📦 Enclosure Design

![3D Design](/images/smart-extension/3D_Project_Design.png)

---

## 🛡️ Safety Features

### Over-Temperature Protection

Shuts down at **60°C**

### Over-Current Protection

Trips after **5 seconds overload**

---

## ⚠️ Important Safety Warning

Before starting the setup process:

- Do NOT connect the extension board to mains electricity (220V).
- Perform all configuration and programming while the ESP32 is powered only through USB.
- If possible, remove the ESP32 module from the extension board during programming.
- The extension should only be connected to electricity after firmware upload and configuration are completed.

This prevents electric shock, hardware damage, and unsafe operation.

---

# Setup Guide

## Contents

1. [Install Arduino IDE and ESP32 Support](#install-arduino-ide-and-esp32-support)  
2. [Install Required Libraries](#install-required-libraries)  
3. [Create RemoteXY Cloud Token](#create-remotexy-cloud-token)  
4. [Setup Telegram Alerts](#setup-telegram-alerts)  
5. [Setup Alexa Control SinricPro](#setup-alexa-control-sinricpro)  
6. [Upload Firmware to ESP32](#upload-firmware-to-esp32)  
7. [Remote Interface](#remote-interface)  
8. [Connect the Device to WiFi](#connect-the-device-to-wifi)  
9. [Connect Using RemoteXY Mobile App](#connect-using-remotexy-mobile-app)  
10. [Final Step](#final-step)  
11. [License](#license)  

---

## Install Arduino IDE and ESP32 Support

Download Arduino IDE:

[https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)

Open Arduino IDE and go to:

```text
File → Preferences
````

Add this to **Additional Boards Manager URLs**:

```text
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

Press **OK**.

Open Boards Manager:

```text
Tools → Board → Boards Manager
```

Search and install:

```text
ESP32 by Espressif Systems
```

Select the board:

```text
Tools → Board → ESP32 Arduino → ESP32 Dev Module
```

---

## Install Required Libraries

Open Library Manager:

```text
Sketch → Include Library → Manage Libraries
```

Install:

```text
RemoteXY
SinricPro
```

---

## Create RemoteXY Cloud Token

Go to:

[https://remotexy.com](https://remotexy.com)

Create a token and replace it in the code:

```cpp
#define REMOTEXY_CLOUD_TOKEN "YOUR_TOKEN_HERE"
```

---

## Setup Telegram Alerts

Create a bot using:

```text
@BotFather
```

Then get your Chat ID:

```text
https://api.telegram.org/botBOT_TOKEN/getUpdates
```

Insert your credentials into the firmware:

```cpp
const char* TG_BOT_TOKEN = "YOUR_BOT_TOKEN";
const char* TG_CHAT_ID   = "YOUR_CHAT_ID";
```

---

## Setup Alexa Control SinricPro

Go to:

[https://sinric.pro](https://sinric.pro)

Create four switch devices and insert the credentials:

```cpp
#define SINRIC_APP_KEY    "YOUR_APP_KEY"
#define SINRIC_APP_SECRET "YOUR_APP_SECRET"
```

---

## Upload Firmware to ESP32

Connect ESP32 via USB.

Select the port:

```text
Tools → Port
```

Upload the code.

---

## 📱 Remote Interface

![RemoteXY Interface](/images/smart-extension/REMOTEXY.jpg)

*RemoteXY interface used to control sockets and monitor current, temperature, and energy.*

---

## Connect the Device to WiFi

Connect to the access point:

```text
Smart IoT Electric ExtensionXXXX
```

Open:

```text
http://setup.local
```

Configure WiFi.

---

## Connect Using RemoteXY Mobile App

Use the Cloud Token to connect the device to the RemoteXY mobile application.

---

# Final Step

1. Disconnect USB.
2. Reinstall the ESP32.
3. Plug the extension into 220V.

The system is now operational.

---

# License

## Saad AL Mubaireek Custom Non-Commercial License v1.0

Copyright (c) 2026 Saad AL Mubaireek

Permission is granted to any person obtaining a copy of this project and associated files to use, study, modify, and build the project for personal, educational, and non-commercial purposes only.

### You may:

* use the code
* study the code
* modify the code
* build your own personal version

### You may NOT:

* sell this project
* sell modified versions of this project
* use this project for commercial purposes
* manufacture this project for sale
* rebrand and sell this project as your own product

Commercial rights are reserved exclusively by the original creator, Saad AL Mubaireek.

This project is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the author be liable for any claim, damages, or other liability arising from, out of, or in connection with the project or the use of this project.

---