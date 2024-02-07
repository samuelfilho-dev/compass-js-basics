const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((value) => {
    return value >= 0;
});

console.log(filtered);