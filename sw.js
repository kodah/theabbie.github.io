self.addEventListener('install', async function(event) {
event.waitUntil(
    caches.open("TestCacheV1").then(function(cache) {
      cache.add("/");
    })
  );
});

self.addEventListener('fetch', async function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});

//new Response("<meta http-equiv='refresh' content='0;url=https://theabbie.github.io/' /><meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}})
