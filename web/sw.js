self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('fetch', async function(event) {
event.respondWith(
new Response(`<html>
<head>
<title>The Abbie</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
 @font-face {
	font-family: kirvy;
        font-display: swap;
	src: url('https://cdn.jsdelivr.net/gh/theabbie/example@gh-pages/files/kirvy.otf');
}
html {scroll-behavior: smooth;}
* {font-size: 15px; letter-spacing: 6px; word-spacing: 12px; line-height: 125%;}
body {margin: 0 0 0 0; background-color: rgb(248,248,248); color: black; font-family: kirvy;}
.header {display: block; width: 100%; text-align: center; padding: 20 0 20 0;font-weight: bolder;font-size: 30px; background-color: rgb(72,113,197); color: white;}
</style>
</head>
<body>
<div class="header">@TheAbbie</div>
<center>
<h1>${event.request.url()}</h1>
<br>
<h3>Try these:</h3>
<a href="files/snake.html" style="text-decoration: none; font-size: 20px;">Snake Game</a>
<br>
<a href="files/game.html" style="text-decoration: none; font-size: 20px;">Hitting Game</a>
</center>
</body>
</html>`,{headers: {"Content-Type": "text/html"}})
)
})
