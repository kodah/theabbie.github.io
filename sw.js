self.addEventListener('fetch', async function(event) {
event.respondWith(new Response(event),{headers: {'Content-Type': 'application/json'}});
});
