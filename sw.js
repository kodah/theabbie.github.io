self.addEventListener('fetch', function(event) {
    event.respondWith(
    new Response('<p>This is a response that comes from your service worker!</p>', {
       headers: { 'Content-Type': 'text/html' }                        
      });
    );
});
