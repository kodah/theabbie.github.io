function matrix(m,n,...arr) {
var result = {};
for (t=1;t<=m;t++) {result[t]={};};
for (i=1;i<=m;i++) for (j=1;j<=n;j++) result[i][j]=arr[n*(i-1)+j-1];
return {"result":result,"m":m,"n":n};
}
function mtp(a,b) {
if (parseInt(a.n)!=parseInt(b.m)) {return;}
else {
var result=[];
var m = a.m;
var n = b.n;
for (i=0;i<m*n;i++) result[i]=0;
var k = a.n;
for (i=1;i<=m;i++) {
for (j=1;j<=n;j++) {
for (p=1;p<=k;p++) {
result[n*(i-1)+j-1]+=a.result[i][p]*b.result[p][j];
}
}
}
}
return matrix(m,n,result);
}
function det(mat) {
var result=0;
if (mat.m==mat.n) {
//var k = mat.m;
for (i=1;i<=3;i++) {result+=(mat.result[1][i]*mat.result[2][i%3+1]*mat.result[3][(i+1)%3+1]);result-=(mat.result[1][4-i]*mat.result[2][3-i%3]*mat.result[3][3-(i+1)%3]);}
}
else {result=null;}
return result;
}