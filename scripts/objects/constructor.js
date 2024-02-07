// let x = new Object();
let x = {};

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
  return this;
}

Circle.call({}, 1); // Parecido com o 'new'
Circle.apply({}, [1,2,3]); // Parecido com o call, mas passa um array com parametro

