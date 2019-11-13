/*
self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io/offline")) {
event.respondWith(new Response("<meta http-equiv='refresh' content='0;url=https://theabbie.github.io/offline' /><meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}}))
}
});
*/
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('TestCache').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
