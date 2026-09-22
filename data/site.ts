export const site = {
  name: 'DeliCook',
  tagline: 'Flavors of happiness',
  description:
    'Making everyday cooking easier, more convenient, and packed with authentic traditional flavors. Hand-crafted South Indian pastes, mixes and ready meals.',
  url: 'https://delicook.in',
  email: 'support@delicook.com',
  phone: '+91 1800 208 4444',
  address: '402, Trade Ventures Tower, Bandra, Mumbai - 400051',
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
