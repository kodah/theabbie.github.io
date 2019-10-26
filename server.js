fetch("https://theabbie.github.io/files/snake.html").then(x=>x.text()).then(function(p) {
document.querySelector("html").innerHTML=p;
});
