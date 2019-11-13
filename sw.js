/*
self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io/offline")) {
event.respondWith(new Response("<meta http-equiv='refresh' content='0;url=https://theabbie.github.io/offline' /><meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}}))
}
});
*/

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('TestCache').then(function(cache) {
      cache.add("https://theabbie.github.io/files/IMG_20190720_184556.jpg");
      cache.put("https://theabbie.github.io/offline",new Response("<h1>Hello World</h1>",{headers: {"Content-Type": "text/html"}}));
      return null;
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('TestCache').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          return response;
        });
      });
    })
  );
});
