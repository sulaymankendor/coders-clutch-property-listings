export type propertyType = {
  id: number;
  name: string;
  pricePerMonth: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sizeSqFt: number;
  slug: string;
  description: string;
  imageUrl: string;
  rating: number;
};

export type agentType = {
  id: number;
  name: string;
  phoneNumber: string;
  rating: number;
  email: string;
  websiteUrl: string;
  profileImageUrl: string;
  bio: string;
};

export type propertiesRequest = {
  errorMsg: string;
  isLoading: boolean;
  properties: never[] | propertyType[];
};

export type propertyRequest = {
  errorMsg: string;
  isLoading: boolean;
  property: propertyType;
};

export type agentsRequest = {
  errorMsg: string;
  isLoading: boolean;
  agents: never[] | agentType[];
};

export type agentRequest = {
  errorMsg: string;
  isLoading: boolean;
  agent: agentType;
};
export type requestState = propertiesRequest | agentsRequest;
