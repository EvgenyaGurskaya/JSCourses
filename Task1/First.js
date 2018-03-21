var i, n, temp, count = 0;
var s = prompt ("Enter the string:");
n = s.length;

for (i=0; i<n; i++) {
	if (s[i]=="(" ) count++; 
	else if (s[i]==")" ) count--;
		if (count<0) break;
	}
	if (count == 0) alert("true");
	else alert("false");



