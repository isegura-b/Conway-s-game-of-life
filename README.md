# Conway's Game of Life (TypeScript + Canvas)

A simple implementation of Conway's Game of Life using HTML Canvas and TypeScript. It includes start/stop controls, speed slider, quick size presets, and a live population counter.

## Features
- Basic rules of Life with clear rendering on Canvas
- Start, Stop, and Restart controls
- Speed control (faster ↔ slower)
- Size presets: x1, x2, x4 (canvas grows and reseeds)
- Random colors for living cells (green, red, blue)
- Live population count


## How to Run
1. Build TypeScript (optional, already compiled if `gol.js` exists):
   ```bash
   tsc gol.ts
   ```
2. Open `index.html` in your browser.
   - Double-click the file, or
   - Serve the folder with a simple static server:
     ```bash
     npx serve .
     ```

## Controls
- Start: begin the simulation
- Stop: pause the simulation
- Restart: reseed a fresh random population
- Speed: move the slider to change update delay
- Size: choose x1, x2, or x4 to change canvas size and reseed

## Why
Made to practice and learn TypeScript in a hands-on way. It helped me understand typing, DOM interactions, and simple simulation loops.

## Project Structure
- `index.html`: UI controls and the Canvas element
- `gol.ts`: game logic and rendering

