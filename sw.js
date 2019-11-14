self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io/html")) {
event.respondWith(
fetch("https://thedb.now.sh/data").then(x=>x.text()).then(function(code) {
return (new Response(code,{headers: {"Content-Type": "text/html"}}))
})
);
}
});
