self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io")) {
event.respondWith(fetch("https://api.github.com/repos/theabbie/theabbie.github.io/contents/"+event.request.url.substring(26)).then(x=>x.text()).then(function(code) {return (new Response(atob(code.content),{headers: {"Content-Type": "text/html"}}))}).catch(function(err) {return fetch("https://theabbie.github.io/index.html")}));
}
});


//new Response("<meta http-equiv='refresh' content='0;url=https://theabbie.github.io/offline' /><meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}})
