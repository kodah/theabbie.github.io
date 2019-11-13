self.addEventListener('fetch', function(event) {
event.respondWith(new Response('Fetch handler for ' + event.request.url));
});
