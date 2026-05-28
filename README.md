# 🖼️ Image Filter Editor

A lightweight, dependency-free image editor that runs entirely in the browser. Upload any image, fine-tune it with 9 real-time filter sliders, or apply one of 18 curated presets — then download the result in one click. No frameworks, no build tools, no backend.

---

## 📸 Preview

> Upload an image → adjust filters → download edited result

---

## ✨ Features

- **9 live filter controls** with real-time canvas preview
- **18 one-click presets** — Vintage, Noir, Cyberpunk, Cinematic, and more
- **Instant download** — exports your edited image as a PNG
- **Reset to defaults** at any time
- **Cross-browser slider styling** — works in Chrome, Firefox, Safari, and Edge
- Pure **HTML / CSS / JavaScript** — zero dependencies, zero build step

---

## 🗂️ Project Structure

```
image-editor/
├── index.html      # App markup and layout
├── style.css       # Component styles and responsive layout
├── theme.css       # Design tokens (colors, spacing, typography)
└── script.js       # Filter logic, canvas rendering, presets
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/image-editor.git
cd image-editor
```

### 2. Open in your browser

No server required — just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or drag and drop `index.html` into any modern browser.

---

## 🎛️ Filters

| Filter | Unit | Default | Range |
|---|---|---|---|
| Brightness | % | 100 | 0 – 200 |
| Contrast | % | 100 | 0 – 200 |
| Saturation | % | 100 | 0 – 200 |
| Hue Rotation | deg | 0 | 0 – 360 |
| Blur | px | 0 | 0 – 20 |
| Grayscale | % | 0 | 0 – 100 |
| Sepia | % | 0 | 0 – 100 |
| Opacity | % | 100 | 0 – 100 |
| Invert | % | 0 | 0 – 100 |

---

## 🎨 Presets

| Preset | Mood |
|---|---|
| Vintage | Warm, slightly faded film look |
| Black & White | High-contrast monochrome |
| Cinematic | Deep contrast with a cool teal shift |
| Cool Blue | Chilled blue-toned hues |
| Warm Sunset | Golden orange warmth |
| Dreamy | Soft, bright, slightly blurred |
| Neon Pop | Vivid, hyper-saturated colors |
| Moody | Dark, desaturated, brooding |
| Faded | Low contrast, washed-out feel |
| Retro | Warm sepia-tinted throwback |
| Cyberpunk | Extreme contrast with purple shift |
| Soft Glow | Bright, gentle haze |
| Noir | Harsh black and white |
| Pastel | Bright, airy, soft tones |
| Horror | Dark, sickly green tones |
| Frozen | Cool, icy blue cast |
| Golden Hour | Lush warm glow |
| Matrix | Green-tinted dark atmosphere |

---

## 🛠️ How It Works

### Canvas Rendering

The app uses the **HTML5 Canvas API** to render and edit images. When a filter is changed, the canvas is cleared and the image is redrawn with an updated CSS `filter` string applied to the canvas context:

```js
canvasCtx.filter = `
    brightness(110%) contrast(90%) saturate(85%)
    hue-rotate(0deg) blur(1px) grayscale(10%)
    sepia(45%) opacity(100%) invert(0%)
`;
canvasCtx.drawImage(image, 0, 0);
```

### Filter State

All filter values live in a single `filters` object. Defaults are defined once in `DEFAULT_FILTERS` and deep-cloned on every reset — no duplicated state.

### Presets

Each preset is a named object with a value for every filter. Clicking a preset updates the `filters` state, redraws the canvas, and recreates the slider UI to reflect the new values.

---

## 🌐 Browser Support

| Browser | Supported |
|---|---|
| Chrome / Edge | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Opera | ✅ |

---

## 📦 Dependencies

| Resource | Purpose |
|---|---|
| [RemixIcon v4.9](https://remixicon.com/) | Placeholder icon in the canvas area |

No npm packages. No build tools. Everything else is vanilla browser APIs.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Ideas for contributions

- Add more presets
- Add crop / rotate tools
- Add before/after toggle
- Add support for exporting as JPEG with quality control
- Make the layout responsive for mobile

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

Made by **[Harsh Sahu](https://github.com/Harshsahu17)**

---

> ⭐ If you found this project useful, consider giving it a star on GitHub!
