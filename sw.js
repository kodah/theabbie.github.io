self.addEventListener('fetch', async function(event) {
if (event.request.url=="https://theabbie.github.io/pwa") {
event.respondWith(new Response("<h1>okay</h1>",{headers: {"Content-Type": "text/html"}}))
}
});
