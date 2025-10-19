import type { propertyType } from "./type";

export const searchProperties = (
  searchText: string,
  properties: propertyType[],
  setSearchedProperties: React.Dispatch<React.SetStateAction<propertyType[]>>
) => {
  if (searchText) {
    const filteredProperties = properties.filter((property) => {
      return (
        property.name.toLowerCase().includes(searchText.toLowerCase()) ||
        property.id
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        property.description.toLowerCase().includes(searchText.toLowerCase()) ||
        property.location.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setSearchedProperties(filteredProperties);
  } else {
    setSearchedProperties(properties);
  }
};
