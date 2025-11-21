# **App Name**: Woodify

## Core Features:

- User Authentication: Register and login using email/password via Firebase Authentication, storing user data in a 'users' Firestore collection.
- Landing Page: Display a responsive landing page with links to Products, Projects, and Events pages.
- Products Page: Fetch product images from Firebase Storage and product data from a 'products' Firestore collection and display them in a grid.
- Projects Page: Fetch project images from Firebase Storage and project data from a 'projects' Firestore collection, showcasing custom wood designs.
- Events Page: Fetch event data from an 'events' Firestore collection, listing upcoming woodworking workshops and showcases.
- Shopping Cart: Enable users to add products to a cart, storing the selected items. The Cart details do not persist to Firestore in this MVP.
- Stripe Payment Page: Integrate a Stripe payment form (using provided API keys) for a test payment process, without completing the payment.

## Style Guidelines:

- Primary color: A warm, earthy brown (#A07855) reminiscent of natural wood tones.
- Background color: A light, desaturated beige (#F5F5DC) to provide a clean backdrop.
- Accent color: A muted, moss green (#8FBC8F) to evoke a sense of nature and craftsmanship.
- Body and headline font: 'Alegreya', a serif font, for a classic and elegant touch.
- Note: currently only Google Fonts are supported.
- Use clean, line-based icons representing wood, tools, and design elements.
- Implement a modern, responsive layout that adapts to different screen sizes. Grid layouts for products and projects.
- Incorporate subtle animations such as fading effects and smooth transitions on page load and when interacting with elements.