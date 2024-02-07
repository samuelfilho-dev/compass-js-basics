const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another = {};

// 1ª Forma - Forma Antiga
for (let key in circle) {
  another[key] = circle[key];
}

// 2ª Forma
const secondAnother = Object.assign({}, circle);

// 3ª Forma
const thirdAnother = { ...circle };

console.log(thirdAnother);
