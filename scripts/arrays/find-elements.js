// Primitives Types
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));

// Reference Types
const courses = [
  { id: 1, name: "Python" },
  { id: 1, name: "Java" },
];

const course = courses.find(function (course) {
  return course.name === "Python";
});

console.log(course);
