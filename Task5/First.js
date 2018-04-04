var uTable = function() {

	var N = +prompt("Enter number for N");	

        // create elements <table> and a <tbody>
        var tbl     = document.createElement("table");
        var tblBody = document.createElement("tbody");

        // cells creation
        for (var j = 0; j <N; j++) {
            // table row creation
            var row = document.createElement("tr");

            for (var i = 0; i <N; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
             var cell = document.createElement("td");    
                  var cellText = document.createTextNode((i+1)*(j+1)); 
				  if (i == j) {
						cell.style.backgroundColor = "green";
						cell.style.border = 2;
                    }

                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            //row added to end of table body
            tblBody.appendChild(row);
        }

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        document.body.appendChild(tbl);
        tbl.setAttribute("border", "2");
    }
uTable();
