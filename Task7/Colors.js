var N = +prompt("Enter number for N");	
    var tbl     = document.createElement("table");
    var tblBody = document.createElement("tbody");

        for (var j = 0; j <N; j++) {
            var row = document.createElement("tr");

            for (var i = 0; i <N; i++) {
             var cell = document.createElement("td");    
                  var cellText = document.createTextNode((i+1)*(j+1)); 

                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute("border", "2");


var selectedTd;
tbl.addEventListener("mouseover", function(event) {
var target = event.target;
	while (target != this) {                           //while (target != tbl) {
        if (target.tagName == 'TD') {
          highlight(target);
          return;
        }
        target = target.parentNode;
      }
    })

tbl.addEventListener("mouseout", function(event) {
var target = event.target;
        if (target.tagName == 'TD') {
		  selectedTd.style.backgroundColor = "white";
		}
		  })	
	
function highlight(node) {
col = Math.round(256*Math.random());
r = col.toString(16);
col = Math.round(256*Math.random());
g=col.toString(16);
col = Math.round(256*Math.random());
d=col.toString(16);
col='#'+r+g+d;
   	selectedTd = node;
    	if (selectedTd) {
    		selectedTd.style.backgroundColor = col;
     	 }
}
