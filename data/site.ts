export const site = {
  name: 'DeliCook',
  /** Registered entity behind the DeliCook brand, per the GST certificate. */
  legalName: 'Delisty Foods Private Limited',
  /** Ownership line shown in the footer and on the legal pages. */
  entityLine: 'DeliCook is a unit of Delisty Foods Pvt Ltd.',
  tagline: 'Flavors of happiness',
  description:
    'Making everyday cooking easier, more convenient, and packed with authentic traditional flavors. Hand-crafted South Indian pastes, mixes and ready meals.',
  url: 'https://delicook.in',
  email: 'support@delicook.in',
  /** Registered principal place of business (GST REG-06). */
  address: 'SF No. 1017/1, Door No. 90/49, R.S. Road, VCV Nagar, Perundurai, Erode, Tamil Nadu - 638052',
  /** Shorter form for cards and tight footer columns. */
  addressShort: 'R.S. Road, VCV Nagar, Perundurai, Erode, Tamil Nadu - 638052',
  footerBlurb:
    'Making everyday cooking easier, more convenient, and packed with authentic traditional flavors. Our ingredients are curated for perfect home-style meals.',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Ready To Cook', href: '/ready-to-cook' },
  { label: 'Ready To Eat', href: '/ready-to-eat' },
  { label: 'FAQs', href: '/faqs' },
] as const;

export const legalLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cancellation & Refunds', href: '/cancellation-refunds' },
] as const;

export const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Ready To Cook', href: '/ready-to-cook' },
  { label: 'Ready To Eat', href: '/ready-to-eat' },
  { label: 'FAQs', href: '/faqs' },
] as const;
