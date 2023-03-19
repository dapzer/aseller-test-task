export const toCurrency = (value: number, currencyType: string) => {
  return value.toLocaleString("ru", {
    style: 'currency',
    currency: currencyType,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
