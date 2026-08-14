export const capitalizeWords = (value = "") => {
  if (typeof value !== "string") return "";

  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
