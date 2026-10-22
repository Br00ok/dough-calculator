# 🍕 Dough Calculator

Plan your next pizza night with a little more precision. Dough Calculator is a browser-based tool that turns your dough-ball count, weight, and hydration into a clear ingredient list in grams. Want to use a preferment? Switch it on to see the ingredients split between the preferment and the final dough. 🥖

## ✨ Features

- 🧮 Calculate flour, water, salt, and yeast for your pizza dough.
- ⚖️ Set the number and weight of dough balls, and choose hydration from 0% to 100%.
- 🥣 Add an optional preferment and choose the percentage of flour used in it.
- 📋 See ingredient amounts for the preferment, final dough, and full recipe.
- 🌍 Use the app in English, Spanish, or Catalan.
- 🌗 Switch between light and dark themes; your language and theme are saved in your browser.
- 📲 Install it as a Progressive Web App (PWA) in supported browsers.
- 📱 Use it on desktop or mobile.

### 📝 Recipe assumptions

The calculator uses a fixed salt ratio of 2.8% and yeast ratio of 0.1% of the total flour. When preferment is enabled, it uses 50% hydration and assigns 90% of the recipe's yeast to the preferment. These are built-in assumptions, not configurable inputs.

## 🛠️ Tech stack

- 🅰️ Angular 21 with TypeScript
- 🎨 Tailwind CSS 4 and daisyUI
- 🌐 ngx-translate for translations
- 🔄 RxJS
- 🖼️ lucide-angular icons
- 📦 Angular Service Worker for production PWA support
- 🧪 Vitest via the Angular CLI for unit tests

## 🚀 Getting started

### 📋 Prerequisites

- Node.js compatible with Angular 21
- npm (the project specifies npm 11.6.4)

### 📥 Install dependencies

```bash
npm install
```

### ▶️ Start the development server

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200). The app reloads automatically as you edit source files.

### 🏗️ Build for production

```bash
npm run build
```

The production build is written to `dist/`, with the service worker enabled.

### 🧪 Run unit tests

```bash
npm test
```

## 📂 Project structure

- `src/app/services/dough-calculator.service.ts` — recipe calculation logic.
- `src/app/components/calculator-form/` — recipe inputs.
- `src/app/components/results-display/` — ingredient breakdown.
- `public/assets/i18n/` — English, Spanish, and Catalan translations.
- `public/` — static assets and the web app manifest.

## 📄 License

This project's original code and materials are available under the [Dough Calculator Non-Commercial License](./LICENSE). You may use and share them for non-commercial purposes, but commercial use is not permitted without prior written permission from the copyright holders. This is a source-available, non-commercial license, not an OSI-approved open-source license.

Third-party components and assets have their own licenses. See [THIRD_PARTY_LICENSES.TXT](./THIRD_PARTY_LICENSES.TXT) and each component's license for details. 🍕
