import { nanoid } from "nanoid";
export const generateDice = () => {
  return { id: nanoid(), value: Math.round(Math.random() * 9), isHeld: false };
};

export const diceNumber = () => {
  let arr = [];
  let count = 1;
  while (count < 11) {
    arr.length < 11 && arr.isHeld != true ? arr.push(generateDice()) : arr;
    count++;
  }
  return arr;
};
