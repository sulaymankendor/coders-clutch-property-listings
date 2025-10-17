export type propertyType = {
  id: number;
  name: string;
  pricePerMonth: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqFt: number;
  slug: string;
};

export type agentType = {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  websiteUrl: string;
};
