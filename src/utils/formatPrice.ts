export const formatPrice = (value?: number | null): string => {
  if (value == null || isNaN(value)) {
    return "";
  }

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
