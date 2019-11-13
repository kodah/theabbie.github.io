self.addEventListener('fetch', async function(event) {
event.respondWith((await (await fetch("https://api.github.com/repos/theabbie/theabbie.github.io/contents"+event.request.url.substring(26))).json()).content);
});
