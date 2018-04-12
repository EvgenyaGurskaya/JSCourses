
//var corMail = /[a-zA-Z0-9][a-zA-Z0-9\-\_\.]*@[a-z][z-z0-9\-\_]*\.[a-z]{2,10}$/;
var regE = /[^a-zA-Z0-9]/;

function Init () {
	var inf = document.getElementById("email");
	inf.addEventListener('keypress', check, false );
}

function check(evt) {
    var target = evt.target;
    if (target != 0) {
        if (target==regE) {
            evt.preventDefault();
            alert(
                "Error!");
        }
    }
}