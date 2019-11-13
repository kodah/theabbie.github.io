self.addEventListener('fetch', async function(event) {
event.respondWith(new Response(JSON.stringify(event.request)),{headers: {'Content-Type': 'text/html'}});
});
