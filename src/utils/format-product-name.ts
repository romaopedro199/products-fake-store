export const formatProductName = (name: string) => {
  let formattedName = name.substring(0, 30);

  if (name.length > 30) {
    formattedName = `${formattedName}...`;
  }

  return formattedName;
};
