importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

/*
workbox.routing.registerRoute(
  /\.(?:html|js)$/,
  new workbox.strategies.StaleWhileRevalidate(),
);
*/

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('sync', function(event) {
  event.waitUntil(function() {
return new Promise(function(resolve, reject) {
  setTimeout(function() {self.registration.showNotification('Hello World');resolve()},4000);
});
}
)
});

self.addEventListener('fetch', async function(event) {
if (!navigator.onLine) {
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

self.addEventListener('notificationclick', function (e) {
e.notification.close();
e.waitUntil(clients.openWindow("https://theabbie.github.io"));
});
