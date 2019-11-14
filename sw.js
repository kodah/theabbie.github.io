self.addEventListener('fetch', async function(event) {
event.respondWith(
if (event.request.url.startsWith("https://theabbie.github.io/html")) {
fetch("https://thedb.now.sh/data").then(x=>x.text()).then(function(code) {
return (new Response(code,{headers: {"Content-Type": "text/html"}}))
})
}
);
});
