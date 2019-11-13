self.addEventListener('fetch', async function(event) {
if (event.request.url=="https://theabbie.github.io/pwa") {
event.respondWith(new Response("okay"))
}
});
