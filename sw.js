self.addEventListener('fetch', async function(event) {
event.respondWith(fetch("https://api.github.com/repos/theabbie/theabbie.github.io/contents/form.html").then(x=>x.json()).then(function(code) {return (new Response(atob(code.content),{headers: {"Content-Type": "text/html"}}))}));
});


//new Response("<meta http-equiv='refresh' content='0;url=https://theabbie.github.io/offline' /><meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}})
