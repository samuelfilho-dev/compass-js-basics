function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid Array");

  return array.reduce((aac, current) => {
    const occurrence = current == searchElement ? 1 : 0;
    return aac + occurrence;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 1];
  console.log(countOccurrences(null, 1));
} catch (e) {
  console.log(e.message);
}
