import { CURRENCY_SETTINGS } from './constants';

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

export const priceDecimalFormatter = price =>
  price.toFixed(CURRENCY_SETTINGS.currencyPrecision);

export const calculateTotalPriceOfProducts = inputArray =>
  priceDecimalFormatter(
    inputArray.reduce(
      (result, product) =>
        product.specialPrice === 0
          ? result + product.price * product.qty
          : result + product.specialPrice * product.qty,
      0
    )
  );

export const unitQuantityFormatter = (unit, numberOfItems) =>
  numberOfItems === 1 ? unit : `${unit}s`;
