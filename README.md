# Dhiraj Poudel — portfolio

Personal research portfolio, live at [dhirajpoudel.com.np](https://dhirajpoudel.com.np).

Built with React (Create React App), Tailwind CSS v3 and Framer Motion.

## Run it

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build into ./build
npm run deploy   # build + publish ./build to the gh-pages branch
```

## Where things live

| Path | What |
| --- | --- |
| `src/components/hero.jsx` | Hero: name, bio, photo, section index |
| `src/components/section.jsx` | Shared section shell, reveal animation and the per-section accent colors (`accents`) |
| `src/components/entry.jsx` | The two-column entry used by Publications, Projects, Education and Experience |
| `src/components/{publications,projects,education,experience,skills}.jsx` | Page content |
| `tailwind.config.js` | Theme tokens and the desktop-first `max*` breakpoints |
| `public/index.html` | Title, meta description, Open Graph / Twitter tags and JSON-LD |
| `public/og-image.png` | 1200×630 link-preview card |

Content lives in the section components, so updating the CV means editing those files.
