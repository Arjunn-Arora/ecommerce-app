# Meridian — Ecommerce Web App

A complete, modern ecommerce web app built with **React**, **TypeScript**, **Vite**, and **React Router**. Dark theme with a minimal, editorial aesthetic.

## Features

- **Home** — Hero section and featured products
- **Shop** — Product grid with category filter (All, Electronics, Apparel, Home, Accessories)
- **Product** — Detail page with image, description, quantity selector, add to cart
- **Cart** — List of items, update quantity, remove, order summary, link to checkout
- **Checkout** — Contact, shipping, and demo payment form; success state clears cart

Cart state is held in React context (no backend). Checkout is demo-only (no real payments).

## Run locally

```bash
cd ecommerce-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 18 + TypeScript
- Vite 5
- React Router 6
- CSS with custom properties (no UI library)
