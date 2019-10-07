var map = {" ": 1,"a": 1,"b": 2,"c": 3,"d": 4,"e": 5,"f": 6,"g": 7,"h": 8,"i": 9,"j": 10,"k": 11,"l": 12,"m": 13,"n": 14,"o": 15,"p": 16,"q": 17,"r": 18,"s": 19,"t": 20,"u": 21,"v": 22,"w": 23,"x": 24,"y": 25,"z": 26,0:1,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9};
function matrix(m,n,arr) {
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
var flag = false;
function det(mat) {
if (mat.m==mat.n) {
if (mat.m!=1) {
flag=true;
var k = mat.m;
var result = 0;
var temp = [];
for (i=1;i<=k;i++) {
function okay() {
for (t=1;t<=k;t++) {
for (p=1;p<=k;p++) {
if (t!=1 && p!=i) {temp.push(mat.result[t][p])};
return det(matrix(k-1,k-1,temp));
}
}
}
var l = okay();
result+=((-1)**(1+i))*mat.result[1][i]*l;
}
}
else {return mat.result[1][1];}
return result;
}
else {return;}
}
function jumble(text,n) {
var result="";
go(text,n);
function go(text,n) {
if (text.length!=1) {
var p = text.split("")[((n-1)%(text.length))];
result+=p;
go(text.slice(((n-1)%(text.length))+1,text.length)+text.slice(0,((n-1)%(text.length))),n);
}
else {result+=text;}
}
return result;
}   
function unjumble(text,n) {
var result=[];
var nums=[];
var finalresult=[];
for (i=0;i<text.length;i++) {nums[i]=i}
go(nums,n);
function go(nums,n) {
if (nums.length!=1) {
var p = nums[((n-1)%(nums.length))];
result.push(p);
go(nums.slice(((n-1)%(nums.length))+1,nums.length).concat(nums.slice(0,((n-1)%(nums.length)))),n);
}
else {result.push(nums[0])}
}
for (x in result) {finalresult[result[x]]=text[x]}
return finalresult.join("");
}
function x(x) {return document.getElementsByClassName(x)[0] || document.getElementsByTagName(x)[0]};
function copyit(text){
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
function encrypt(text,key) {var result=text;for (x in key) {result=jumble(result,parseInt(map[key[x]]))};return result;}
function decrypt(text,key) {var result=text;for (x in key.reverse()) {result=unjumble(result,parseInt(map[key[x]]))};return result;}
String.prototype.jumble = function(key) {return encrypt(this,key)}
String.prototype.unjumble = function(key) {return decrypt(this,key)}

///////////////////////////////////

function ai(data) {
var x = 0;
var y = 0;
var xy = 0;
var xx = 0;
var yy = 0;
var n = 0;
for (p in data) {x+=parseFloat(p);y+=parseFloat(data[p]);xy+=parseFloat(p)*parseFloat(data[p]);xx+=parseFloat(p)**2;yy+=parseFloat(data[p])**2;n++;}
var a = (y*xx-x*xy)/(n*xx-x**2); 
var b = (-x*y+n*xy)/(n*xx-x**2); 
return [a,b];
}
