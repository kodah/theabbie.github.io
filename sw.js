self.addEventListener('fetch', async function(event) {
if (event.request.url=="https://theabbie.github.io/") {
event.respondWith(fetch("https://typi.tk/?url=https://m.wikihow-fun.com/Special:Randomizer&sel=.step&attribs=classs&static=true&join=%3Cbr%3E"));
}
});

//new Response("<meta http-equiv='refresh' content='0;url=https://theabbie.github.io/' /><meta name='viewport' content='width=device-width, initial-scale=1.0'><h1>"+Math.random().toString()+"</h1>",{headers: {"Content-Type": "text/html"}})
