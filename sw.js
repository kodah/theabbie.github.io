self.addEventListener('fetch', async function(event) {
if (event.request.url.startsWith("https://theabbie.github.io/html")) {
event.waitUntil(
self.registration.showNotification("title", {  
body: "body",  
icon: "blog/72fe95c5576ec634e214814a32ab785568eda76a.png",  
tag: "tag"  
})  
);  
event.respondWith(
fetch("https://codrcrew.firebaseio.com/main/html.json").then(x=>x.text()).then(function(code) {
return (new Response(atob(code.slice(1,-1)),{headers: {"Content-Type": "text/html"}}))
})
);
}
});
