const circle = {
  radius: 20,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);