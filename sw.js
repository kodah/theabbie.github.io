self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io")) {
console.log(event.request)
event.respondWith(fetch(event.request.url));
}
});


//new Response("<meta http-equiv='refresh' content='0;url=https://theabbie.github.io/offline' /><meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}})
