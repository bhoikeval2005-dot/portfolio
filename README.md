# Portfolio Website

A clean, editorial-brutalist personal portfolio built with pure HTML, CSS, and Vanilla JavaScript — no frameworks, no dependencies, no build step.

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← Main entry point
├── css/
│   ├── style.css           ← Variables, layout, components
│   ├── animations.css      ← Keyframes & reveal classes
│   └── responsive.css      ← Media queries (mobile-first)
├── js/
│   ├── main.js             ← Nav, scroll, IntersectionObserver
│   ├── projects.js         ← Project data & card rendering
│   └── contact.js          ← Form validation & submission
├── assets/
│   ├── icons/              ← Custom SVG icons (optional)
│   └── images/             ← profile.jpg, project screenshots
└── README.md
```

---

## 🚀 Quick Start

1. Open `index.html` in any browser — that's it.
2. For live reload during development, use VS Code + **Live Server** extension.

---

## ✏️ Customization

### Personal Info
Edit `index.html` and update:
- Name, location, email in the **About** section
- Social links in **Contact** and **Footer**
- The `DEV.` logo in the navbar

### Projects
Open `js/projects.js` and edit the `PROJECTS` array:
```js
{
  title: "Your Project Name",
  description: "What it does and how you built it.",
  tags: ["React", "Node.js", "MongoDB"],
  live: "https://your-demo.com",
  code: "https://github.com/you/repo"
}
```

### Profile Photo
Replace `assets/images/profile.jpg` with your photo.
Then in `index.html`, replace the `.photo-placeholder` div with:
```html
<img src="assets/images/profile.jpg" alt="Your Name" />
```

### Skills
Edit the `.skill-bar` elements in `index.html`:
```html
<div class="skill-bar" data-skill="Your Skill" data-level="85"></div>
```

### Colors
All colors are CSS variables in `css/style.css`:
```css
--accent: #e8ff00;   /* Change to your brand color */
--bg:     #0a0a0a;   /* Background */
--text:   #f0f0f0;   /* Main text */
```

---

## 📬 Contact Form

The form currently simulates a send with a 1.5s delay.
To make it real, replace the simulation in `js/contact.js` with one of:

- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData })`
- **EmailJS**: use their SDK
- **Your own backend**: POST to your API endpoint

---

## 🌐 Deployment

Works on any static host:
- **GitHub Pages** — push to `gh-pages` branch
- **Netlify** — drag & drop the folder
- **Vercel** — `vercel` CLI or GitHub integration

---

## 📄 License

Free to use for personal portfolios.
