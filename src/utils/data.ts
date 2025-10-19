export const navs = [
  { id: 1, name: "Home", href: "/", link: "/" },
  { id: 2, name: "Agents", href: "/agents", link: "/agents" },
  { id: 3, name: "About Us", href: "/about-us", link: "/about-us" },
];

export const PRICE_RANGES = [
  { label: "Under D1,000", value: "0-1000" },
  { label: "D1,000 - D2,000", value: "1000-2000" },
  { label: "D2,000 - D3,000", value: "2000-3000" },
  { label: "D3,000 - D4,000", value: "3000-4000" },
  { label: "D4,000 - D5,000", value: "4000-5000" },
  { label: "D5,000 - D6,000", value: "5000-6000" },
  { label: "D6,000 - D7,000", value: "6000-7000" },
  { label: "Above D7,000", value: "7000-Infinity" },
] as const;
