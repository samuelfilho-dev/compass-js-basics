const address1 = createAddress("a", "b", "c");
const address2 = createAddress("a", "b", "c");

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

