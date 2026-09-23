export type Category = 'ready-to-cook' | 'ready-to-eat';

export type Product = {
  /** URL-safe id; also the React key and the image basename. */
  slug: string;
  name: string;
  /** Tamil / regional name shown under the title where one applies. */
  localName?: string;
  description: string;
  category: Category;
};

/** Every product image lives at this path, named after the slug. */
export const productImage = (slug: string) => `/products/${slug}.webp`;

export const products: Product[] = [
  // ---- Ready To Cook -------------------------------------------------------
  {
    slug: 'sambar-mix',
    name: 'Sambar Mix',
    description:
      'Freshly ground sambar powder blended with roasted lentils and chillies. Add your vegetables and tamarind for sambar that tastes like it simmered all afternoon.',
    category: 'ready-to-cook',
  },
  {
    slug: 'rasam-mix',
    name: 'Rasam Mix',
    description:
      'Peppercorn, cumin and tamarind ground to the classic proportion. A comforting rasam in the time it takes to boil water.',
    category: 'ready-to-cook',
  },
  {
    slug: 'egg-curry-paste',
    name: 'Egg Curry Paste',
    description:
      'A slow-cooked onion and tomato masala base. Drop in boiled eggs, simmer for five minutes and serve with rice or chapati.',
    category: 'ready-to-cook',
  },
  {
    slug: 'chicken-curry-paste',
    name: 'Chicken Curry Paste',
    description:
      'Hand-pounded spices in a rich gravy base. Add chicken and water, and a weeknight curry is on the table in under twenty minutes.',
    category: 'ready-to-cook',
  },
  {
    slug: 'puli-kulambu-paste',
    name: 'Puli Kulambu Paste',
    localName: 'Tamarind Gravy',
    description:
      'The tangy tamarind kulambu of Tamil homes, with sesame oil and a deep roasted spice blend. Keeps beautifully and only gets better the next day.',
    category: 'ready-to-cook',
  },
  {
    slug: 'fish-curry-paste',
    name: 'Fish Curry Paste',
    description:
      'A coastal-style masala built for fish — tamarind forward, generously spiced, ready for your catch of the day.',
    category: 'ready-to-cook',
  },
  {
    slug: 'arisi-paruppu-kit',
    name: 'Arisi Paruppu Kit',
    localName: 'Rice & Lentil Kit',
    description:
      'Rice, lentils and spices portioned into one kit for the classic arisi paruppu sadam. One pot, one step, no measuring.',
    category: 'ready-to-cook',
  },
  {
    slug: 'cut-boiled-vegetables',
    name: 'Cut Boiled Vegetables',
    localName: 'Carrot, Beans & Green Peas',
    description:
      'Carrot, beans and green peas cut and boiled to the right bite. Skip the chopping and the waiting — use them straight in any dish.',
    category: 'ready-to-cook',
  },
  {
    slug: 'moringa-chunks-boiled',
    name: 'Moringa Chunks Boiled',
    localName: 'Drumstick',
    description:
      'Drumstick chunks cleaned and boiled, ready to drop into sambar or kulambu. All of the flavor, none of the prep.',
    category: 'ready-to-cook',
  },

  // ---- Ready To Eat --------------------------------------------------------
  {
    slug: 'dosa-masal',
    name: 'Dosa Masal',
    localName: 'Masala Dosa Stuffing',
    description:
      'The soft potato and onion stuffing for masala dosa, seasoned and ready. Warm it through and fold it into your dosa.',
    category: 'ready-to-eat',
  },
  {
    slug: 'mix-veg-curry',
    name: 'Mix Veg Curry',
    description:
      'A mixed vegetable curry cooked with everyday South Indian seasoning. Heat it through and serve with rice or chapati.',
    category: 'ready-to-eat',
  },
  {
    slug: 'poondu-kulambu',
    name: 'Poondu Kulambu',
    localName: 'Garlic Gravy',
    description:
      'Whole garlic cloves slow-simmered in a tamarind and spice gravy. Warming, pungent and traditionally eaten for its comfort.',
    category: 'ready-to-eat',
  },
  {
    slug: 'sundaikai-kulambu',
    name: 'Sundaikai Kulambu',
    localName: 'Turkey Berry Gravy',
    description:
      'Turkey berries in a robust tamarind kulambu — a distinctly regional dish that is hard to find and harder to make well.',
    category: 'ready-to-eat',
  },
  {
    slug: 'kambu-kool',
    name: 'Kambu Kool',
    localName: 'Pearl Millet Porridge',
    description:
      'A traditional pearl millet porridge — cooling, filling and naturally rich in fibre and iron. Ready to drink.',
    category: 'ready-to-eat',
  },
  {
    slug: 'ragi-kool',
    name: 'Ragi Kool',
    localName: 'Finger Millet Porridge',
    description:
      'Finger millet porridge made the old way. A wholesome breakfast or an afternoon cooler, calcium-rich and gentle on the stomach.',
    category: 'ready-to-eat',
  },
];

export const readyToCook = products.filter((p) => p.category === 'ready-to-cook');
export const readyToEat = products.filter((p) => p.category === 'ready-to-eat');
