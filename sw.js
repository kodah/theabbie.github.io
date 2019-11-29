importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'font',
  new workbox.strategies.CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

self.addEventListener('fetch', event => {
  if (event.request.method == 'POST') {
  event.respondWith((async () => {
    const formData = await event.request.formData();
    const link = formData.get('link') || '';
    const responseUrl = await saveBookmark(link);
    return Response.redirect(responseUrl, 303);
  })());
}
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
});
