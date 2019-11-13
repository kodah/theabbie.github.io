self.addEventListener('fetch', async function(event) {
event.respondWith(new Response("<h1>hello world</h1>"),{headers: {'Content-Type': 'text/html'}});
});
