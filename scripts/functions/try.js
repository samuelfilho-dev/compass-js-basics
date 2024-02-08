const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not String");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error('Enter first and last name');

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = '';
} catch (e) {
  console.log(e.message);
}

console.log(person);
