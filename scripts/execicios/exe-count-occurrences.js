function countOccurrences(array, searchElement) {
  return array.reduce((aac, current) => {
    const occurrence = current == searchElement ? 1 : 0;
    return aac + occurrence;
  }, 0);
}

const numbers = [1, 2, 3, 4, 1];
console.log(countOccurrences(numbers, 1));
