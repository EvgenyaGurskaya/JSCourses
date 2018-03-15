#include <cstdlib>
#include <iostream>
#include <cmath>
using namespace std;
int main() {
int k;

int curr=1;
int prev=1;
int temp=0;
cout<<"Enter the number";
cin>>k;
for (int i=2;i<=k;i++) {
temp=curr;
curr+=prev;
prev=temp;
}

cout<<prev;
return 0;
}
