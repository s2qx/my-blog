+++
title = "Pet Feeder System (PIC16F877A)"
description = "A microcontroller-based automatic pet feeder with a real-time clock, stepper-driven hopper, food-level sensing, and EEPROM-backed settings."
category = "Course Project"
date = 2024-05-01
images = ["/images/Pet_Feeder_System.jpg"]
report_link = "https://drive.google.com/file/d/1RgXLjpY019aqWoaDEiUxUqpMKlKCdmwf/view?usp=drive_link"
video = "JIq59XCSC5s"
draft = false
+++

This project presents the design of a smart pet feeder that automatically feeds pets based on preset feeding times.

The system uses a PIC16F877A microcontroller and a DS3231 real-time clock (RTC) to manage the feeding schedule. It controls a stepper motor via an A4988 driver to move a hopper that dispenses food at the set times. An infrared (IR) sensor checks the food level in the container — if it's empty, the system shows a warning on the LCD and activates a buzzer.

The system has a user-friendly interface with buttons to set feeding times and control the motor manually. It also uses EEPROM to store settings, so the schedule survives a power outage. This project combines automation, sensing, and user control in a practical, easy-to-use pet care solution.

[Code & circuit diagram](https://drive.google.com/drive/folders/1SRXPyVhu5yw6GIjPmOi_PoV-PVAS35I7?usp=drive_link)
