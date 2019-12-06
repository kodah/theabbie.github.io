importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyBECQksrlWkWOTP4jriMmA9thfcKgbHyuE",
    authDomain: "codrcrew.firebaseapp.com",
    databaseURL: "https://codrcrew.firebaseio.com",
    projectId: "codrcrew",
    storageBucket: "codrcrew.appspot.com",
    messagingSenderId: "517463115484",
    appId: "1:517463115484:web:93ce55f61c78b015371619",
    measurementId: "G-Z9TTWE5FSJ"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const notificationOptions = {
    body: payload.data.body,
    icon: 'files/logo.png',
    badge: 'files/logo.png'
  };
  return self.registration.showNotification(payload.data.title,notificationOptions);
});

/*
workbox.routing.registerRoute(
  /\.(?:html|js)$/,
  new workbox.strategies.StaleWhileRevalidate(),
);
*/

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open("backup").then(function(cache) {
      return cache.addAll(
        [
          '/files/snake.html',
          '/files/game.html',
          '/ai.html'
        ]
      );
    })
  );
});

self.addEventListener('sync', function(event) {
event.waitUntil(function() {
 return new Promise(function(resolve,reject) {
   fetch("https://adminz.now.sh/?a="+Math.random()).then(function() {reject()});
  }) 
 }
)
});

self.addEventListener('fetch', async function(event) {
if (event.request.method == 'POST') {
event.respondWith(Response.redirect('/test.html?data='+(await event.request.formData()).get('file')));
}
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
<br>
<h3>Try these:</h3>
<a href="files/snake.html" style="text-decoration: none; font-size: 20px;">Snake Game</a>
<br>
<a href="files/game.html" style="text-decoration: none; font-size: 20px;">Hitting Game</a>
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
console.log(e);
e.waitUntil(clients.openWindow("https://theabbie.github.io/"));
});

self.addEventListener('notificationclose', function(e) {
console.log("Closed")
}); 
