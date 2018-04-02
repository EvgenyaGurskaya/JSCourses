var str = prompt ("Enter the phone number");
var tel = /\+?(375|80)\-?\s?\(?(25|29|33|44)\)?\s?\-?[1-9]{3}\s?\-?\d{2}\s?\-?\d{2}$/;

var res = str.match(tel);
if(res!=null){
		alert("Your telephone number\n"+res[0]);
	}
	else{
		alert("Error. Try again.");
	}
	