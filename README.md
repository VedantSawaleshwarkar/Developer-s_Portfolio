# Vedant Sawaleshwarkar — Portfolio

Beautiful, fast, and modern personal portfolio built with React, Tailwind CSS, Vite and shadcn/ui. Clean code, delightful micro-interactions, and easy customization.


---

## ✨ Features

- **Blazing fast**: Vite-powered dev/build, optimized assets
- **Responsive**: Fluid layout across mobile, tablet, and desktop
- **Accessible**: Keyboard-friendly and semantic components
- **Themed UI**: Tailwind + shadcn/ui primitives with tasteful animations
- **Sectioned content**: Hero, About, Skills, Projects, Experience, Education, Contact
- **Smooth UX**: Scroll-to-section, animated backgrounds, glassmorphism accents
- **Easy to extend**: Component-driven structure with clear separation of concerns

---

## 🚀 Quick Start

Prerequisites: Node.js 18+ and npm

```sh
npm install
npm run dev
```

Build and preview production:

```sh
npm run build
npm run preview
```

Common scripts:

```sh
# Start dev server
npm run dev

# Lint (if configured in your editor)
npm run lint

# Type-check (if TypeScript is added later)
npm run typecheck
```

---

## 🧰 Tech Stack

- React 18
- Vite
- Tailwind CSS
- shadcn/ui

---

## 📁 Project Structure

- `src/` — application source
- `src/components/` — UI and section components
- `src/pages/` — routed pages
- `src/hooks/` — custom hooks
- `src/lib/` — utilities and helpers
- `public/` — static assets (images, PDFs, icons)

Key files worth exploring:

- `src/components/Hero.jsx` — headline, action buttons, social links
- `src/components/Projects.jsx` — project cards and filtering
- `src/pages/Index.jsx` — home page composition

---

## 🛠️ Customization Guide

- Content: Update components like `src/components/Hero.jsx`, `src/components/Projects.jsx`, `src/components/About.jsx`
- Theme: Adjust `tailwind.config.js` tokens and CSS variables in `src/index.css`
- SEO: Edit meta tags and Open Graph data in `index.html`
- Assets: Replace images in `public/` (e.g., `Pass.jpg`, `favicon.png`, `Vedant_Resume.pdf`)

Tip: Keep image sizes optimized for the web and use modern formats when possible.

---

## 🖼️ Screenshots

You can replace the placeholder with real screenshots:

```md
![Hero](public/placeholder.svg)
![Projects](public/placeholder.svg)
```

---

## 🌐 Deployment

The site is a static build and can be hosted anywhere:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

General steps:

```sh
npm run build
# Deploy the contents of the dist/ folder to your hosting provider
```

---

## 🤝 Contributing

Contributions and suggestions are welcome. Please open an issue or PR. See `CONTRIBUTING.md`.

---

## 📄 License

MIT License — see `LICENSE` for details.
