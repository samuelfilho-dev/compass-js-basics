// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Draw");
    }
    return this;
}

const circle = Circle(1);
console.log(circle);