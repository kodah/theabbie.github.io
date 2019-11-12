self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
    new Response('<p>This is a response that comes from your service worker!</p>', {
       headers: { 'Content-Type': 'text/html' }                        
      });
    );
});
