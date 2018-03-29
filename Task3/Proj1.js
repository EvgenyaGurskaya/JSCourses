var i=0, j=0;
var N = +prompt("Enter N");
var M = +prompt("Enter M");
var names = ["Alex", "Alice", "Bob", "Martin", "Julya", "Stas", "Jane", "Chistina", "Mary", "Holden"];
if (N>names.length) {
	for (i=names.length; i<N; i++) {
	names[i]=prompt("Enter the name:");
	}
}
else if (N<names.length) {
	do{
	names.pop();
	} while (N<names.length);
}

var city = ["Minsk", "London", "Berlin", "Ottawa", "Sidney", "Paris", "Moscow", "Warsaw", "Amsterdam", "Vienna"];
if (M>city.length) {
	for (j=city.length; j<M; j++) {
	city[j]=prompt("Enter the city:");
	}
}
else if (M<city.length) {
	for (j=N; j<names.length; j++) {
	delete names[j];
	}
}
var people = new Array (N);
for (var k=0; k<N; k++) {
	people[k]= { name: names[Math.round(Math.random()*(N-1))],
				 age: Math.round(1+99*Math.random()),
				 place: city[Math.round(Math.random()*(M-1))],
				 printMe: function() {
					 alert(this.name+","+this.age+","+this.place);
				 }
	};
	people=people.sort(function(a,b){
	return a.age< b.age ? 1:-1;
})
	people[k].printMe();
}	
