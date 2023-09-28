export const diceNumber = () => {
  let arr = [];
  let count = 1;
  while (count < 11) {
    arr.length < 11 ? arr.push(Math.round(Math.random() * 9)) : arr;
    count++;
  }
  return arr;
};
