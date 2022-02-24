var num1 = prompt("Enter Your First Number");
var num2 = prompt("Enter Your Second Number");
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var add, sub, mul, divi;

add = num1 + num2;
document.write("Addition = " + add + "</br>");
sub = num1 - num2;
document.write("Subtraction = " + sub + "</br>");
mul = num1 * num2;
document.write("Multiplication = " + mul + "</br>");
divi = num1 / num2;
document.write("Division = " + divi + "</br>");
