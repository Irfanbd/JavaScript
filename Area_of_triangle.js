var side1 = parseFloat(prompt("Enter The Value of Side 1 :"));
var side2 = parseFloat( prompt("Enter The Value of Side 1 :"));
var side3 = parseFloat( prompt("Enter The Value of Side 1 :"));
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

document.write("area = "+area);
