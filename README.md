# Calculator

A lightweight static calculator app built with plain HTML, CSS, and JavaScript.

## Project overview

- Responsive calculator UI with modern styling
- Keyboard support for digits, operators, Enter, Backspace, Escape, and `%`
- Clean button handling using event delegation
- Expression validation and result formatting
- Vite-compatible app structure for local development

## Files

- `index.html` — main application markup
- `style.css` — layout and visual styling
- `script.js` — calculator behavior and input handling
- `package.json` — Node.js dev dependency and `npm run dev` script

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

> If you prefer a quick preview, you can also open `index.html` directly in a browser, but the Vite server is recommended for local development.

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
- Lightweight and easy to extend

## Notes

- Update `script.js` if you want to change calculator behavior.
- Update `style.css` to tweak the look and feel.

---

Built for local development with Vite.
