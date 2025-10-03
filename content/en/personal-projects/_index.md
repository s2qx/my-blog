---
title: "Personal projects"
draft: false
description: "A collection of personal projects in electronics and DIY tinkering - experiments that succeed, fail, and always teach me something"
---
---
### Contents
- [Weight Scale (Auto Water Dispenser)](#weight-scale-auto-water-dispenser)
- [FM Transmitter](#fm-transmitter)
- [MOSFET Switch](#mosfet-switch)
- [Arduino Nano Servo/Robot Arm Driver](#arduino-nano-servorobot-arm-driver)
- [ESP32 12V Control Board](#esp32-12v-control-board)
- [Another Random Project](#another-random-project)
---

### Smart Water Dispenser (Auto Water Dispenser)

In my free time, I developed a personal project: a smart water dispenser that combines embedded systems, load sensing, and control techniques to deliver precise volumes of water.

---

## Key Features
- Low steady-state error (~1 ml deviation) for setpoints above 200 ml.  
- Smooth transient response — pump control minimizes overshoot and abrupt stopping.  
- Adjustable hose angle (Z-axis) to fit different container sizes and avoid water splitting.  
- Ergonomic design — 30° angled interface board for easier LCD screen readability.  
- Clean setup — pump and water source hidden under an IKEA table for a neat look.  

---

## Test Result
A 250 ml setpoint produced 251 ml actual output, showing consistent accuracy at higher volumes.  
For smaller volumes (<200 ml), pump inertia and sensor noise introduce higher deviations — a good reminder of the limits of low-cost actuators and sensors.  

---

## Why I Built It
This project reflects my interest in applying control theory and embedded systems to solve real-world problems, even outside of coursework.  
It also gave me valuable hands-on experience with hardware integration, interface design, and system tuning.  

---

## Video and PCB Schematic
{{< youtube vTC4E2wSImg >}}

![Weight Scale](/images/weight_scale.png)  
![Weight Scale 2](/images/weight_scale_2.png)


---

### FM Transmitter
I built this for my [communication project](/en/projects/#5-communication-system-fundamentals-project). It captures audio with a microphone and transmits it wirelessly over FM. I’ll upload the full project details soon.

![FM Transmitter](/images/FM_Transmitter.png)
![FM Transmitter 2](/images/FM_Transmitter_2.png)

---

### MOSFET Switch
I used this circuit to control a high-power pump that works with a weight scale system. It allowed me to safely switch heavy loads with just a small signal.

![MOSFET Switch](/images/MOSFET_Switch.png)
![MOSFET Switch 2](/images/MOSFET_Switch_2.png)

---

### Arduino Nano Servo/Robot Arm Driver
I used this driver to control a robotic arm using a variable resistor. It made it easy to test manual positioning and servo response.

![Arduino Nano Servo/Robot Arm Driver](/images/ARM_ROBOT.png)
![Arduino Nano Servo/Robot Arm Driver 2](/images/ARM_ROBOT_2.png)


---

### ESP32 12V Control Board
I used this board to control my old RGB LED strip after I lost its original controller. With Wi-Fi control, I could set colors and effects directly.

![ESP32 12V Control Board](/images/ESP32_12V_Control.png)
![ESP32 12V Control Board 2](/images/ESP32_12V_Control_2.png)


---

### Another Random Project
Here’s a quick look at a side project that I tried out.  
It’s not part of my main work, but I wanted to share it since it shows some extra experiments I’ve been playing with.

{{< youtube ZICQXwdOWDs >}}
