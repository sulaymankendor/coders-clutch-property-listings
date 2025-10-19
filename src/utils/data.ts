export const navs = [
  { id: 1, name: "Home", href: "/", link: "/" },
  { id: 2, name: "Agents", href: "/agents", link: "/agents" },
  { id: 3, name: "About Us", href: "/about-us", link: "/about-us" },
];

export const agents = [
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "+1 555-123-4567",
    email: "john.doe@premierhomes.com",
    websiteUrl: "https://premierhomes.com/johndoe",
  },
  {
    id: 2,
    name: "Sarah Williams",
    phoneNumber: "+1 555-987-6543",
    email: "sarah.williams@eliteestates.com",
    websiteUrl: "https://eliteestates.com/sarahwilliams",
  },
  {
    id: 3,
    name: "Michael Brown",
    phoneNumber: "+1 555-222-3344",
    email: "michael.brown@cityrealty.com",
    websiteUrl: "https://cityrealty.com/michaelbrown",
  },
  {
    id: 4,
    name: "Emily Johnson",
    phoneNumber: "+1 555-777-8899",
    email: "emily.johnson@modernspaces.com",
    websiteUrl: "https://modernspaces.com/emilyjohnson",
  },
  {
    id: 5,
    name: "David Smith",
    phoneNumber: "+1 555-444-1212",
    email: "david.smith@homefinders.com",
    websiteUrl: "https://homefinders.com/davidsmith",
  },
  {
    id: 6,
    name: "Jessica Lee",
    phoneNumber: "+1 555-888-2233",
    email: "jessica.lee@dreamproperties.com",
    websiteUrl: "https://dreamproperties.com/jessicalee",
  },
  {
    id: 7,
    name: "Robert Taylor",
    phoneNumber: "+1 555-999-5566",
    email: "robert.taylor@urbanliving.com",
    websiteUrl: "https://urbanliving.com/roberttaylor",
  },
  {
    id: 8,
    name: "Olivia Harris",
    phoneNumber: "+1 555-333-7788",
    email: "olivia.harris@nextlevelrealty.com",
    websiteUrl: "https://nextlevelrealty.com/oliviaharris",
  },
  {
    id: 9,
    name: "Daniel Martinez",
    phoneNumber: "+1 555-666-9911",
    email: "daniel.martinez@brightkeyhomes.com",
    websiteUrl: "https://brightkeyhomes.com/danielmartinez",
  },
  {
    id: 10,
    name: "Sophia Anderson",
    phoneNumber: "+1 555-555-6677",
    email: "sophia.anderson@bluehorizonrealty.com",
    websiteUrl: "https://bluehorizonrealty.com/sophiaanderson",
  },
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
