var N = prompt ("Enter the size of array");
var arr = new Array(N);
var num = new Array(N);
var res="";
var res2=0;
for(var i=0; i<N; i++){
	num[i]= prompt("Enter the coefficients with x"); //массив коэффициентов
	arr[i]=Math.pow(num[i],i);
	
if(num[i]>=0){
			res+=num[i]+"*x^"+i+"+";
		}
		else {
			res+=num[i]+"x^"+i+"+";
		}
}
alert ("F(x)=" + res);
var x = prompt ("Enter x");
for(var i=0; i<N; i++){
res2+=num[i]*Math.pow(x,i);
}
alert ("The result is F(x)=" + res2);