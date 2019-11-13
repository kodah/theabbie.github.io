self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io/offline")) {
event.respondWith(new Response("<meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}}))
}
});
