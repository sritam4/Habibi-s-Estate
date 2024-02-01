const UseCurrencyFormatter = (number) => {
  function formatCurrency(number) {
    if (number) {
      // Convert number to string
      let strNumber = number.toString();

      // Split the integer and fractional parts (if any)
      let parts = strNumber.split(".");

      // Get the integer part
      let integerPart = parts[0];

      // Add commas every three digits from the right
      integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // Join integer and fractional parts (if any)
      if (parts.length === 2) {
        return integerPart + "." + parts[1];
      } else {
        return integerPart;
      }
    }
  }

  return formatCurrency(number);
};

export default UseCurrencyFormatter;
