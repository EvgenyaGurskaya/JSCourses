var x1 = prompt ("Enter the first number:");
var z = prompt ("Enter the symbol:");
var x2 = prompt ("Enter the second number:");

switch(z) {
	case "+": alert("Result="+(+x1+ +x2));break;
	case "-": alert("Result="+(x1-x2));break;
	case "*": alert("Result="+(x1*x2));break;
	case "/": alert("Result="+(x1/x2));break;
	case "%": alert("Result="+(x1%x2));break;
	default: alert("Error. Try again.");break;
}