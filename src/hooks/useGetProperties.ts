import { axiosRequest } from "@/utils/axiosRequest";
import type { propertiesRequest } from "@/utils/type";
import { useEffect, useState } from "react";

export const useGetProperties = () => {
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
    };
    fetchProperties();
  }, []);

  return { propertiesRequest };
};
