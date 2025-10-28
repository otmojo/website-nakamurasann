# Nakamura-san Website

A static website consisting of HTML, CSS, JS, and images. Suitable for hosting on GitHub Pages.

## Project Structure

- `index.html` — Home page
- `news.html` — News page
- `events.html` — Events page
- `discography.html` — Discography page
- `series.html` — Series page
- `css/` — Stylesheets
- `js/` — JavaScript assets
- `images/` — Images

## Local Preview

Because this is a static site, you can open `index.html` directly in your browser.

If you prefer running a local dev server:

```bash
# Python 3
python -m http.server 5173
# then visit http://localhost:5173
```

## Deploying to GitHub Pages

1. Initialize Git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: static website"
   ```
2. Create a new GitHub repository (via GitHub UI) named `website-nakamurasann`.
3. Add remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/website-nakamurasann.git
   git push -u origin main
   ```
4. Enable GitHub Pages:
   - Go to Repository Settings ➜ Pages.
   - Source: `Deploy from a branch`.
   - Branch: `main` and folder `/ (root)`.
   - Save. Your site will be available at `https://<your-username>.github.io/website-nakamurasann/`.

## License

Add a license file (e.g., MIT) to clarify usage. See https://choosealicense.com/.
