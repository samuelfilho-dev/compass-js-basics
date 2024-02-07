// Factory Function
function createCircle(radius, locaciton) {
  return {
    radius,
    locaciton,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1, 'Avenida');
console.log(circle1);

const circle2 = createCircle(2, 'Terra Firme');
console.log(circle2);
