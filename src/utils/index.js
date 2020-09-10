export const getLocaleDate = val => {
  return new Date(val).toLocaleDateString();
};

export const getLocaleTime = val => {
  return new Date(val).toLocaleTimeString();
};
