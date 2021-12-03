'use strict';

export const generateRandomNumber = (maxNumber) => {
  const randomNumber = Math.floor(Math.random() * maxNumber);
  return randomNumber;
}
