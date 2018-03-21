var x1 = prompt ("Enter the first number:");
var z = prompt ("Enter the symbol:");
var x2 = prompt ("Enter the second number:");

if (z=="+") a=1;
else if (z=="-") a= 2;
else if (z=="*") a= 3;
else if (z=="/") a= 4;
else if (z=="%") a= 5;
else a=0;

switch(a) {
	case 1: alert("Result="+(+x1+ +x2));break;
	case 2: alert("Result="+(x1-x2));break;
	case 3: alert("Result="+(x1*x2));break;
	case 4: alert("Result="+(x1/x2));break;
	case 5: alert("Result="+(x1%x2));break;
	default: alert("Error. Try again.");break;
}