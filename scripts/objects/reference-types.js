/* 
 o número 10 não é incrementado devido a função 'increase' ter um escopo e fechado e
 ser apenas ter referencia de memoria
*/

let number = 10;

function increase(number) {
    number++
}

increase(number);
console.log(number);

/* 
 o número 10 é incrementado devido a função 'increase' e objeto ser reference types,
 ou seja, a variavel é apenas um ponteiro que aponta para onde está o 'obj' é funciton
*/

let obj = {value: 10}

function increaseObj(obj) {
    obj.value++;
}

increaseObj(obj);
console.log(obj);