const PI = 3.14;
let area = 0;

function circleArea(radius = 1) {
  return radius * radius * PI;
}

area = circleArea(3);
console.log("Area1:", area);
radius = 4;
area = circleArea(4);
console.log("Area2:", area);