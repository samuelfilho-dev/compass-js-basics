const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(numbers);

// Begin
const first = numbers.shift();
console.log(first);

// Middle
numbers.splice(2, 2);
console.log(numbers);