# AI Worker

## Overview

**AI Worker** is a personal tooling project: small scripts and conventions that turn recurring robotics software chores—bag checks, launch hygiene, parameter diffs—into repeatable commands with predictable outputs.

## Motivation

Field debugging eats calendar time when every engineer reinvents one-off utilities. This project standardizes the boring layer so attention stays on physics and interfaces.

## Technical Scope

- CLI wrappers around `ros2` introspection with stable JSON output for notebooks  
- Template repositories for **ROS 2** packages with CI, formatting, and changelog habits pre-wired  
- Lightweight dashboards from structured logs (no heavy front-end stack)

## What I Learned

- **Friction drops** when defaults are excellent: naming, folder layout, and a single `justfile` or `Makefile` beat a long onboarding document.  
- The best tools are boring: deterministic, fast, and easy to delete when upstream fixes land.

## Related Notes

- [ROS 2 articles](/articles/ros2/)  
- [System Engineering articles](/articles/system-engineering/)  
- Sample cadence in [2026-W18 Tech Log](/tech-log/2026/2026-w18)
