var now = new Date ();
alert ("Date and time now:" + now);
var tom = new Date (now.getFullYear(), now.getMonth(), now.getDate()+1);
var time = ((tom - now)/60000);
alert ("Minutes till tomorrow:" + Math.round(time));
