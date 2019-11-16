self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io/html")) {
event.respondWith(
fetch("https://codrcrew.firebaseio.com/main/html.json").then(x=>x.text()).then(function(code) {
return (new Response(unescape(code.slice(1,-1)),{headers: {"Content-Type": "text/html"}}))
})
);
}
});
