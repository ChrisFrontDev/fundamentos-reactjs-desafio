const formatValue = (value: number): string => {
  const FormatedNumber = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return FormatedNumber;
};

export default formatValue;
