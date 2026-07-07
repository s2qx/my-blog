+++
title = "Smart Water Dispenser (Auto Water Dispenser)"
description = "A load-sensing water dispenser combining embedded systems and control techniques to deliver precise volumes of water on demand."
category = "Personal Project"
date = 2024-06-01
images = ["/images/weight_scale.png", "/images/weight_scale_2.png"]
video = "vTC4E2wSImg"
draft = false
+++

In my free time, I developed a personal project: a smart water dispenser that combines embedded systems, load sensing, and control techniques to deliver precise volumes of water.

### Key Features
- Low steady-state error (~1 ml deviation) for setpoints above 200 ml.
- Smooth transient response — pump control minimizes overshoot and abrupt stopping.
- Adjustable hose angle (Z-axis) to fit different container sizes and avoid water splitting.
- Ergonomic design — 30° angled interface board for easier LCD screen readability.
- Clean setup — pump and water source hidden under an IKEA table for a neat look.

### Test Result
A 250 ml setpoint produced 251 ml actual output, showing consistent accuracy at higher volumes. For smaller volumes (<200 ml), pump inertia and sensor noise introduce higher deviations — a good reminder of the limits of low-cost actuators and sensors.

### Why I Built It
This project reflects my interest in applying control theory and embedded systems to solve real-world problems, even outside of coursework. It also gave me valuable hands-on experience with hardware integration, interface design, and system tuning.

[Code](https://drive.google.com/drive/folders/1Qvr082YVoMVMKMf4FI2jhf4FhZP1509x?usp=sharing)
