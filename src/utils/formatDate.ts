const formatDate = (value: Date): string => {
  const formattedDate = new Date(value).toLocaleDateString('pt-br');

  return formattedDate;
};

export default formatDate;
