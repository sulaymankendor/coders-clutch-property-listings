import { axiosRequest } from "@/utils/axiosRequest";
import { type propertiesRequest, type propertyType } from "@/utils/type";
import { useEffect, useState } from "react";

export const useGetProperties = (
  setSearchedProperties: React.Dispatch<React.SetStateAction<propertyType[]>>
) => {
  const [propertiesRequest, setPropertiesRequest] = useState<propertiesRequest>(
    {
      errorMsg: "",
      isLoading: true,
      properties: [],
    }
  );

  useEffect(() => {
    const fetchProperties = async () => {
      const fetchedProperties = await axiosRequest.getProperties(
        "properties",
        setPropertiesRequest
      );
      setPropertiesRequest((currentRequestState) => {
        return { ...currentRequestState, properties: fetchedProperties };
      });
      setSearchedProperties(fetchedProperties);
    };
    fetchProperties();
  }, []);

  return { propertiesRequest };
};
