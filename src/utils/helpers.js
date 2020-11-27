export const validateEmailFormat = email => {
  const regexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regexp.test(String(email).toLowerCase());
};

export const convertObjectToArray = inputObject => {
  const resultArray = [];
  for (let key in inputObject) {
    resultArray.push({ ...inputObject[key], backendId: key });
  }
  return resultArray;
};

export const calculateTotalPriceOfProducts = inputArray =>
  inputArray
    .reduce(
      (result, product) =>
        product.specialPrice === 0
          ? result + product.price
          : result + product.specialPrice,
      0
    )
    .toFixed(2);

export const unitQuantityFormatter = (unit, numberOfItems) =>
  numberOfItems === 1 ? unit : `${unit}s`;
