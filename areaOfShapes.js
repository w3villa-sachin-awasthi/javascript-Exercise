let shape = prompt(
  "Enter the shape (s for square, r for rectangle, t for triangle, c fr circle and  sh for sphere:"
);

if (
  shape === "r" ||
  shape === "t" ||
  shape === "s" ||
  shape === "c" ||
  shape === "sh"
) {
  let area;
  if (shape === "s") {
    let side = parseFloat(prompt("Enter the length of the square:"));
    area = side * side;
    console.log(`The area of the square is ${area} `);
  } else if (shape === "r") {
    let length = parseFloat(prompt("Enter the length of the rectangle:"));
    let width = parseFloat(prompt("Enter the width of the rectangle:"));
    area = length * width;
    console.log(`The area of the rectangle is ${area} `);
  } else if (shape === "t") {
    let base = parseFloat(prompt("Enter the base of the triangle:"));
    let height = parseFloat(prompt("Enter the height of the triangle:"));
    area = 0.5 * base * height;
    console.log(`The area of the triangle is ${area}`);
  } else if (shape === "c") {
    let radius = parseFloat(prompt("enter the radius of circle"));
    let area = Math.PI * Math.pow(radius, 2);
    console.log("area of circle is ", area);
  } else if (shape === "sh") {
    let radius = parseFloat(prompt("enter the radius of sphere"));
    let area = 4 * Math.PI * Math.pow(radius, 2);
    console.log("area of sphere is ", area);
  } else {
    console.log("Invalid shape! ");
  }
} else {
  console.log("Invalid type of shape.");
}
