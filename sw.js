self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io/html")) {
event.respondWith(
fetch("https://codrcrew.firebaseio.com/main/html.json").then(x=>x.text()).then(function(code) {
return (new Response(atob(code.slice(1,-1)),{headers: {"Content-Type": "text/html"}}))
})
);
}
else if (!navigator.onLine) {
event.respondWith(
caches.match(event.request).then(function(response) {
return response || (new Response(`<html>
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
<h1>You Are Offline !</h1>
</center>
</body>
</html>`,{headers: {"Content-Type": "text/html"}}))
})
)
}
else {
event.respondWith(
    caches.open('backup').then(function(cache) {
      return fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
}
});
