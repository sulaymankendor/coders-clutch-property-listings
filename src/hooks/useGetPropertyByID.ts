import { axiosRequest } from "@/utils/axiosRequest";
import type { propertyRequest } from "@/utils/type";
import { useEffect, useState } from "react";

export const useGetPropertyByID = (id: number) => {
  const [notFound, setNotFound] = useState(false);
  const [propertyRequest, setPropertyRequest] = useState<propertyRequest>({
    errorMsg: "",
    isLoading: true,
    property: {
      id: 0,
      name: "",
      pricePerMonth: 0,
      location: "",
      bedrooms: 0,
      bathrooms: 0,
      sizeSqFt: 0,
      slug: "",
      description: "",
      imageUrl: "",
      listedAt: "",
      rating: 0,
    },
  });
  useEffect(() => {
    const fetchPropertyByID = async () => {
      const property = await axiosRequest.getPropertyByID(
        id,
        setPropertyRequest,
        setNotFound
      );
      setPropertyRequest((currentRequestState) => {
        return { ...currentRequestState, property: property };
      });
    };
    fetchPropertyByID();
  }, []);

  return { propertyRequest, notFound };
};
