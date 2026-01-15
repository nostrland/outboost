# Outboost - Computer Repair Services Website

A modern, secure single-page website for Outboost computer repair services, built with React, TypeScript, Vite, and Tailwind CSS.

## Security Features

This project includes comprehensive security measures for production deployment:

- **Security Headers**: Configured via `public/_headers` for Cloudflare Pages
  - X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
  - Content Security Policy (CSP)
  - Strict Transport Security (HSTS)
  - Cross-Origin policies

- **Meta Security Tags**: Added to `index.html` for additional browser-level protection

- **Environment Variables**: Protected via `.gitignore` to prevent accidental commits

- **Production Build**: Optimized and secured via `vite.config.ts`

## Deployment to Cloudflare Pages

### Prerequisites
- Cloudflare account with Pages enabled
- Domain `outboost.com` configured in Cloudflare

### Steps

1. **Build the project locally** (optional, for testing):
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**:
   - Connect your Git repository to Cloudflare Pages
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Set Node version: `18` or higher

3. **Custom Domain Setup**:
   - In Cloudflare Pages, add custom domain `outboost.com`
   - Ensure DNS is properly configured in Cloudflare
   - SSL/TLS should be set to "Full" or "Full (strict)"

4. **Verify Security Headers**:
   - After deployment, test headers using: https://securityheaders.com
   - Or use: `curl -I https://outboost.com`

### Files Included for Security

- `public/_headers` - Cloudflare Pages security headers
- `public/robots.txt` - Search engine directives
- `public/.well-known/security.txt` - Security contact information

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
