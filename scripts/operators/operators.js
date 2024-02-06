// Operadores Aritméticos
let x = 10;
let y = 3;

console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// Increment (++)
console.log(x++);
console.log(x);

// Decrement(--);
console.log(--x);

// Operadores de Atribuição
x = x + 5;
x += 5;

// Operadores de Comparação
console.log(x > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);

// Operador de Igualdade Estrito
console.log(x === 10);

// Operador de Igualdade Não-Estrito
console.log(x == 10);

// Operador Ternário
const points = 90;
const typeOfConstumer = points > 100 ? 'gold' : 'silver';

console.log(typeOfConstumer);

// Operador Logico AND (&&)
// Retorna Verdadeiro se todos operadores for verdadeiro

console.log(true && true);

// Operador Logico OU (||)
console.log(true || false);

// Operador Logico NOT (!)
console.log(!true);

// Short-Circuiting
let userColor = undefined;
const defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// Operadores Bitwise

console.log(1 | 2) // Bitwise OR
console.log(1 & 2) // Bitwise AND

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission | executePermission

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

/*
    Falsy (false)

    underfined
    null
    0
    false
    ''
    NaN

*/
// Tudo que não for Falsy -> Verdadeiro (Thuthy)
