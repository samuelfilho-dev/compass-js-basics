const courses = [
  { id: 1, name: "Python" },
  { id: 1, name: "Java" },
];

const course = courses.find(course => course.name === 'Java');
console.log(course);