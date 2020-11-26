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
