function generateRandomArray(size, maxValue) {
  let randomArray = [];
  for (let i = 0; i < size; ++i) {
    randomArray.push(Math.floor(Math.random() * (maxValue + 1)));
  }

  return randomArray;
}

export default generateRandomArray;
