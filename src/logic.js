export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}
Triangle.prototype.addSides = function(side1, side2, side3) {
  this.side1 = side1
  this.side2 = side2
  this.side3 = side3
}
Triangle.prototype.checkSides = function() {
if (side1 && side2 && side3) {
  if (side1 === side2 && side1 === side3) {
    alert("Equilateral");
  } else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
    alert ("That's not a triangle!");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    alert("Isosceles");
  } else {
    alert("Scalene");
  } 
} else {
  alert("Go back to school.");
}
};