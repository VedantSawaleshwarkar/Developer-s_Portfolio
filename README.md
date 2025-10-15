# Vedant Sawaleshwarkar — AI/Full‑Stack Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A dynamic and responsive personal portfolio built with React, Vite, Tailwind CSS, and shadcn/ui to showcase projects, skills, and my journey in AI‑powered web development.

**➡️ https://vedant-ai.in**



### ✨ Features

- **Interactive UI**: Smooth animations, hover effects, and micro‑interactions
- **Fully responsive**: Mobile‑first design that looks great on any device
- **Polished components**: shadcn/ui primitives with accessible patterns
- **Fast by default**: Vite dev server and optimized production build
- **Sectioned content**: Hero, About, Skills, Projects, Experience, Education, Contact
- **Contact CTA**: Smooth scroll to contact section; downloadable resume

---

### 💻 Tech Stack

- **Frontend**: React, JavaScript, Tailwind CSS, shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages)

---

### 🎯 Project Goals

Create a professional, fast, and visually appealing platform to showcase skills and projects.

- **Master modern tooling**: React 18 + Vite + Tailwind CSS
- **Thoughtful UX**: Clean, intuitive, and fully responsive UI
- **AI/ML friendly**: Highlight interests and projects in AI/ML alongside full‑stack work

---

### 🛤️ Learning Journey

Key challenges and takeaways while building this portfolio:

- **State & effects in React**: Clean handling of UI state and side‑effects
- **Component architecture**: Reusable primitives and section‑based composition
- **Performance**: Asset optimization, motion‑reduced animations, and lazy loading

---

### 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

#### Prerequisites

- Node.js 18+ and npm

#### Installation & Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/vedantsawaleshwarkar/vedant-portfolio.git
    cd vedant-portfolio
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the dev server:
    ```sh
    npm run dev
    ```

Open `http://localhost:5173` (default Vite port) to view it in your browser.

#### Build & Preview

```sh
npm run build
npm run preview
```

---

### 🧩 Project Structure

- `src/` — application source
- `src/components/` — UI and section components
- `src/pages/` — routed pages
- `src/hooks/` — custom hooks
- `src/lib/` — utilities and helpers
- `public/` — static assets (images, PDFs, icons)

Key files:

- `src/components/Hero.jsx` — headline, action buttons, social links
- `src/components/Projects.jsx` — project cards
- `src/pages/Index.jsx` — home page composition

---

### 🛠️ Customization

- Content: Update `src/components/Hero.jsx`, `src/components/Projects.jsx`, `src/components/About.jsx`
- Theme: Adjust tokens in `tailwind.config.js` and styles in `src/index.css`
- SEO: Edit meta and Open Graph tags in `index.html`
- Assets: Replace files in `public/` (e.g., `Pass.jpg`, `favicon.png`, `Vedant_Resume.pdf`)

---

### 🌐 Deployment

The site builds to static files in `dist/` and can be hosted anywhere.

```sh
npm run build
# Deploy the contents of the dist/ folder to your hosting provider
```

Popular options: GitHub Pages, Vercel, Netlify, Cloudflare Pages.

---

### 📜 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.
