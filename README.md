# DeliCook — Marketing Website

Static marketing site for DeliCook, built with Next.js (static export) and Tailwind CSS.
No cart, no checkout — the product range is showcase content.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static HTML written to ./out
```

## Deploying to Cloudflare

In the Cloudflare dashboard: **Workers & Pages → Create → Connect GitHub**, pick this
repository, then set:

| Setting           | Value           |
| ----------------- | --------------- |
| Build command     | `npm run build` |
| Output directory  | `out`           |

Every push to `main` redeploys.

## Pages

| Route                    | Notes                                  |
| ------------------------ | -------------------------------------- |
| `/`                      | Home                                   |
| `/about`                 | Company story, formats, why-choose-us  |
| `/contact`               | Contact details and enquiry form       |
| `/ready-to-cook`         | 11 pastes, mixes and kits              |
| `/ready-to-eat`          | 6 prepared dishes                      |
| `/faqs`                  | Common questions                       |
| `/terms`                 | Placeholder copy — needs legal review  |
| `/privacy`               | Placeholder copy — needs legal review  |
| `/cancellation-refunds`  | Placeholder copy — needs legal review  |

## Editing content

- **Products** — `data/products.ts`. One array; `category` decides which page an item
  appears on. Re-splitting the range is a one-word edit per product.
- **Contact details, nav, footer** — `data/site.ts`.
- **Colours and type** — `tailwind.config.ts`; shared component classes live in
  `app/globals.css`.

## Outstanding before launch

1. **Photography.** Every image is a grey placeholder, marked `TODO` in the source.
   Search for `placeholder-box` to find them.
2. **Contact form submission.** The form validates and renders but does not send
   anywhere — a static export cannot process a POST. Add a Cloudflare Worker or an
   endpoint such as Web3Forms, then wire it up in `components/ContactForm.tsx`
   (marked `TODO`). Until then the form points people at the support email.
3. **Legal copy.** The three policy pages are placeholders and say so on the page.
4. **Social links.** The four footer icons point at `#` — real URLs go in
   `components/Footer.tsx`.
5. **Domain.** `site.url` in `data/site.ts` is set to `https://delicook.in`; change it
   if the live domain differs, as it feeds the SEO metadata.
