# Yamini Chittygori — Personal Portfolio

A responsive, accessible personal portfolio built with semantic HTML5, CSS3, Bootstrap 5, and vanilla JavaScript (ES6+).

## Features
- Semantic Home, About, Education, Skills, Projects, Achievements, and Contact sections
- Mobile-first responsive layout with CSS Grid/Flexbox and media queries
- Bootstrap navbar, grid, buttons, form controls, and responsive layout utilities
- Light/dark theme toggle with saved preference (`localStorage`)
- Project filtering by category with accessible pressed states
- Client-side form validation with inline errors and live success/error feedback
- Keyboard skip link, labels, visible focus states, accessible names, and reduced-motion support
- Custom project illustrations created with CSS; no image assets required

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser. For a local server, run `python -m http.server 8000` from the project folder and visit `http://localhost:8000`.
3. An internet connection is needed to load Bootstrap and Google Fonts from their CDNs.

## Before submission
- Replace the placeholder email `yamini.chittygori@example.com` with your real portfolio email.
- Check each project description and add the exact repository/demo URL where available. Some project links are intentionally placeholders until verified.
- Add a profile photo or resume link if your instructor expects one.
- Capture screenshots at desktop and mobile widths for the report.
- The contact form is front-end only; it validates fields but does not send or store messages.

## Deploy with GitHub Pages
1. Create a new GitHub repository, for example `personal-portfolio`.
2. Put `index.html`, `styles.css`, `script.js`, and `README.md` in the repository root.
3. Push the files to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for the published URL shown in the Pages settings and test the site on a phone.

## Technology mapping to assignment
- **HTML5:** semantic sections, headings, lists, links, navigation, labels, form, and footer
- **CSS3:** variables, selectors, box model, typography, positioning, Grid, Flexbox, transitions, media queries
- **Bootstrap:** navbar, grid, responsive columns, buttons, form controls, validation feedback
- **JavaScript ES6+:** `const`, arrow functions, arrays/NodeLists, conditionals, loops, DOM manipulation, event listeners, theme persistence, filtering, validation
- **Validation/accessibility:** required fields, custom checks, dynamic messages, ARIA labels/live region, keyboard skip link, focus management, reduced-motion support
