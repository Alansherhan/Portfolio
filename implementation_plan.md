# Professional Portfolio Website Implementation Plan

Build a high-performance, single-page professional portfolio website using React, Vite, Tailwind CSS, and Framer Motion. The site will feature a "Deep Space Developer" theme and include interactive animations and modern styling.

## Proposed Changes

### Configuration
#### [NEW] Vite + React App Initialization
Using `npx create-vite@latest ./ --template react-ts` to scaffold the project structure.
#### [NEW] Dependencies
Install `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `lucide-react`, and `react-simple-typewriter`.
#### [MODIFY] tailwind.config.js
Configure the Deep Space Developer theme.
- Colors: #0B0E14 (Deep Charcoal), #00D2FF (Electric Blue), #9D50BB (Nebula Purple).
- Fonts: "Inter" for body, "Fira Code" for mono/headings.

### Global Styling
#### [MODIFY] index.css
Integrate Google Fonts (`Inter`, `Fira Code`) globally. Customize scrollbars and set the default body background to #0B0E14.

### Components
#### [NEW] src/components/Hero.tsx
A visually stunning hero section featuring the headline: "Building seamless mobile experiences & capturing the stars." and subtext: "Final-year CS Student | Flutter & Node.js Developer | Astrophotographer." Will include "Explore Projects" and "Download CV" buttons.

#### [NEW] src/components/TerminalSkills.tsx
A container styled like a macOS Terminal window. It simulates a typing effect for `npx skills list --installed`, displaying verified skills: `flutter-expert`, `nodejs-backend-patterns`, `database-schema-design`, `sleek-design-mobile-apps`, and `api-design-principles`.

#### [NEW] src/components/Projects.tsx
A grid layout showcasing projects (ReliefFlow, Azan Tracker, Lost & Found) as cards with hover effects, GitHub icons, and "Live Demo" links.

#### [NEW] src/components/Gallery.tsx
A masonry grid titled "Beyond the Code" for Astrophotography, including placeholders for Milky Way shots and a link to the "Richus World" YouTube channel.

#### [NEW] src/components/Footer.tsx
Clean, minimal footer featuring a contact form and social media links (GitHub, LinkedIn, Email).

#### [MODIFY] src/App.tsx
Assemble the website layout, incorporating a thumb-friendly hamburger mobile menu.

#### [MODIFY] index.html
Update title and meta tags for SEO.

## Verification Plan

### Automated Tests
1. Verify build completion (`npm run build`).

### Manual Verification
1. Run local dev server (`npm run dev`).
2. Visually verify the layout and ensure Framer Motion animations trigger seamlessly.
3. Resize browser window to test the mobile layout and confirm the hamburger menu works correctly.
4. Verify the terminal typing layout and button hover states.
