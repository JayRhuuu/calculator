# Calculator

A lightweight static calculator app built with plain HTML, CSS, and JavaScript.

## Live demo

- https://jayrhuuu.github.io/calculator/

## Project overview

- Responsive calculator UI with modern styling
- Keyboard support for digits, operators, Enter, Backspace, Escape, and `%`
- Clean button handling using event delegation
- Expression validation and result formatting
- Vite-compatible app structure for local development
- Relative asset paths for GitHub Pages deployment

## Files

- `index.html` — main application markup
- `style.css` — layout and visual styling
- `script.js` — calculator behavior and input handling
- `package.json` — Node.js dev dependency and `npm run dev` script
- `favicon.ico` — browser tab icon

## Run locally

1. Install dependencies:

```powershell
npm install
```

2. Start the development server:

```powershell
npm run dev
```

3. Open the local URL shown by Vite (usually `http://localhost:5173`).

> If you want a quick preview only, you can open `index.html` directly in a browser. For development, use the Vite server.

## How to use

- Click calculator buttons or type on the keyboard.
- Valid operators: `+`, `-`, `*`, `/`.
- Press `Enter` to calculate.
- Press `Backspace` to delete the last character.
- Press `Esc` to clear the input.

## Features

- Prevents duplicate operators
- Prevents multiple decimals in the same operand
- Smart handling for leading zeros and `00`
- Supports percentage `%`
- Lightweight and easy to extend

## Development notes

- `index.html` uses relative paths so the app works on GitHub Pages at `/calculator/`.
- `package.json` is configured for local development with `npm run dev`.
- `node_modules` is ignored by `.gitignore` and should not be committed.

---

Built for local development with Vite and deployed on GitHub Pages.
