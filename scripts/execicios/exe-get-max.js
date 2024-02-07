function getMax(array) {
  return array.reduce((accumulator, current) => {
    return current > accumulator ? current : accumulator;
  });
}

const numbers = [1, 2, 3, 4];
console.log(getMax(numbers));
