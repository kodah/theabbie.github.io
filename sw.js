self.addEventListener('fetch', async function(event) {
event.respondWith(new Response(event));
});
