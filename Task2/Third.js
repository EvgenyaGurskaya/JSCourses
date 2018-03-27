var sum=0;
var res=0;
var N=+prompt("Enter the size of array");
var s=+prompt("Enter s");
var p=(prompt("Enter p(%)"))/100;
var topBor=s*(1+p);
var lowBor=s*(1-p);
var arr = new Array(N);
for(var i=0; i<N; i++ ){
		arr [i] = Math.round(Math.random()*(topBor-lowBor)+lowBor);
	}
	for (var i=0; i<N-1; i++) {
		for (var j=0; j<N-1-i; j++) {
			if (arr[j+1] < arr[j]) {
			var temp = arr[j+1];
				arr[j+1] = arr[j]; 
				arr[j] = temp;
			}
        }
     }
alert ("Sorted array:" + arr);
for(var i=0; i<N; i++ ){
if(arr[i]!=0){
	sum+=1/arr[i];
}
else alert("Error!"); }
res=N/sum;
alert("Harmonic average="+res);