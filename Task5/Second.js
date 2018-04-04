var div = document.getElementById('time');
var i = setInterval (function () {
	
var date = new Date();
var str = (23 - date.getHours())+":"+(59 - date.getMinutes())+":"+(59 - date.getSeconds());
div.innerHTML=str;
if (date.getSeconds()%2==0){
div.setAttribute('style', 'text-align: center; font-size: 250%; outline-style: dashed; outline-offset: -10px; outline-color: #be8b5e; padding: 2%; background: #90d4ed;');
}
else div.setAttribute('style', 'marginTop: 50%; text-align: center; font-size: 500%; outline-style: dotted; outline-offset: -20px;outline-color: #1b7c7c; padding: 2%; background: #81e29e;');
}, 1000);





