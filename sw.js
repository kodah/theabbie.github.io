self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io")) {
event.respondWith(fetch("https://typi.tk/?url=https://github.com/theabbie/theabbie.github.io/blob/master/"+event.request.url.substring(26)+"&sel=.js-file-line&static=true&join=%0A&pad=@").then(x=>x.text()).then(function(code) {return (new Response(code,{headers: {"Content-Type": "text/html"}}))}).catch(function(err) {return (new Response("<h1>404</h1>",{headers: {"Content-Type": "text/html"}}))}));
}
});


//new Response("<meta http-equiv='refresh' content='0;url=https://theabbie.github.io/offline' /><meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}})
