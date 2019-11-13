self.addEventListener('fetch', function(event) {
fetch("https://api.github.com/repos/theabbie/theabbie.github.io/contents"+event.request.url.substring(26)).then(x=>x.json()).then(function(code) {
event.respondWith(new Response(code.content));
})
});
