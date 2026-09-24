# Meethi Yaadein — Home Bakery Website

A multi-page website for Meethi Yaadein, a homemade cakes and desserts bakery in Karachi. Built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero section with main call-to-action buttons |
| About | `about.html` | The bakery's story |
| Services | `services.html` | Custom cakes, cupcakes & cookies, dessert tables |
| Why Us | `why-us.html` | Fresh to order, real butter, custom designs, on-time delivery |
| Reviews | `reviews.html` | Customer testimonials |
| Contact | `contact.html` | Contact details and order enquiry form |

Every page shares the same header (navigation bar) and footer.

## Project Structure

```
project-folder/
├── index.html
├── about.html
├── services.html
├── why-us.html
├── reviews.html
├── contact.html
├── style.css        # main stylesheet
├── pages.css        # extra styles for page banners and active nav link
├── script.js        # mobile menu, form validation, etc.
└── images/
    ├── about-bakery.svg
    └── favicon.svg
```

## How to Run

1. Download or copy all files into one folder, keeping the structure above.
2. Open `index.html` in any web browser (double-click it).
3. Use the navigation bar to move between pages.

No installation or server is needed. An internet connection is only needed to load the Google Fonts (Fraunces and Karla).

## Stylesheets

- **`style.css`** — the main styles: colours, fonts, layout, buttons, cards, form and footer.
- **`pages.css`** — loaded after `style.css`. Styles the heading banner at the top of the inner pages and highlights the current page in the nav bar.

## Customising

- **Contact details:** edit the phone, email and delivery area in `contact.html`.
- **Text and reviews:** edit the matching page (e.g. `reviews.html` for testimonials).
- **Colours:** the main colours are `#5E1B26` (maroon), `#FBF3E7` (cream) and `#3A2620` (dark brown). Change them in `style.css` and `pages.css`.
- **Social links:** the Instagram, Facebook and WhatsApp links in the footer currently point to `#`. Replace them with your real profile URLs on every page.
- **Adding a page:** copy an existing page, change its content, then add a link to it in the nav list on every page.

## Notes

- The nav link for the page you are on is highlighted automatically through `class="active"` and `aria-current="page"`. Move these to the correct link if you add or rename pages.
- The contact form validates input in the browser through `script.js`. It does not send data to a server yet, so to receive real orders you will need to connect it to a form service, email service or backend.
- Each page has its own `<title>` and meta description for SEO.

## Credits

Content and design: Meethi Yaadein. © 2026 Meethi Yaadein. All rights reserved.
