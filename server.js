document.querySelector("html").innerHTML=`
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">    
<title>Snake game</title>
</head>
<svg style="height: 100%; width: 100%; background-color: rgb(111,213,0)">
<image xlink:href="snake.jpg" height="0px" width="0px"/>
<polyline style="stroke: black; stroke-width: 10; fill: none;"/>
<circle r="10" style="fill: black;" />
<image xlink:href="apple.png" height="30px" width="30px"/>
</svg>
<script>
var wid = window.innerWidth;
var hit = window.innerHeight;
var svg = document.getElementsByTagName("svg")[0];
var snake = document.getElementsByTagName("polyline")[0];
var hurdle = document.getElementsByTagName("circle")[0];
var food = document.getElementsByTagName("image")[1];
document.body.style.margin="0 0 0 0";
var p = {x:10,y:10};
var direction,game;
var l = 50;
var obs = {x:0,y:0};
var points="";
var start;
window.onclick = function(e)  {
start = true;
if ((hit/wid)*e.x-e.y>0 && (e.x/wid)+(e.y/hit)<1) {if (direction!="south") {direction="north"}}
if ((hit/wid)*e.x-e.y>0 && (e.x/wid)+(e.y/hit)>1) {if (direction!="west") {direction="east"}}
if ((hit/wid)*e.x-e.y<0 && (e.x/wid)+(e.y/hit)<1) {if (direction!="east") {direction="west"}}
if ((hit/wid)*e.x-e.y<0 && (e.x/wid)+(e.y/hit)>1) {if (direction!="north") {direction="south"}}
}
window.onkeyup = function(e)  {
start = true;
if (e.key=="ArrowUp") {if (direction!="south") {direction="north"}}
if (e.key=="ArrowRight") {if (direction!="west") {direction="east"}}
if (e.key=="ArrowLeft") {if (direction!="east") {direction="west"}}
if (e.key=="ArrowDown") {if (direction!="north") {direction="south"}}
if (e.key=="Enter") {location.reload();}
}
function obstacle() {obs.x=wid*Math.random();obs.y=hit*Math.random();obs.x=obs.x-obs.x%10;obs.y=obs.y-obs.y%10;hurdle.setAttribute("cx",obs.x);hurdle.setAttribute("cy",obs.y); food.setAttribute("x",obs.x-15);food.setAttribute("y",obs.y-15);}
game = setInterval(function() {
if (p.x<=0 || p.x>=wid || p.y<=0 || p.y>=hit) {clearInterval(game);svg.style.backgroundColor="red";start=false;console.log('o-o-boundary');}
if (Math.abs(p.x-obs.x)<=15 && Math.abs(p.y-obs.y)<=15) {l+=10;obstacle();}
if (direction=="north") {p.y-=10;}    
if (direction=="east") {p.x+=10;}    
if (direction=="south") {p.y+=10;}    
if (direction=="west") {p.x-=10;}  
if (points.split(" ").indexOf(p.x+","+p.y)!=-1 && start) {clearInterval(game);svg.style.backgroundColor="red"; start=false;console.log('self-die');}
points+=p.x+","+p.y+" ";
points = points.split(" ").slice(points.split(" ").length-l).join(" ");
snake.setAttribute("points",points);
},50);
obstacle();
</script>
</html>`
