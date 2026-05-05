# Robot Control

## Overview

**Robot Control** summarizes a multi-phase effort to bring a manipulation arm from first motion to repeatable pick-and-place under conservative safety envelopes. Work spanned low-level torque commanding, outer-loop Cartesian behavior, and contact-aware recovery.

## Motivation

Demonstrations are easy; **repeatable** behavior under latency and modeling error is the bar for useful autonomy. This project chased determinism first, cleverness second.

## Technical Scope

- Inner-loop torque with saturation and thermal guardrails  
- Outer-loop impedance with wrench limits and guarded moves near humans  
- Logging sufficient to align video with **500 Hz** control timelines for post hoc review

## What I Learned

- Treat **message age** as a first-class state; without it, you optimize the wrong subsystem.  
- Friction identification is unglamorous and disproportionately valuable for contact transitions.

## Related Notes

- [Robotics Control articles](/articles/robotics-control/)  
- [2026-W18 Tech Log](/tech-log/2026/2026-w18)
