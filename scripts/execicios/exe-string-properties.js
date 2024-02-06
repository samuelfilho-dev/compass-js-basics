const movie = {
  title: "a",
  relaseYeat: 2018,
  rating: 4.5,
  director: "b",
};

function showProperties(obj) {
  for (key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

showProperties(movie);
