self.addEventListener("install", function(evt) {
    evt.waitUntil(
        caches.open("marios-demo")
        .then(function(cache) {
            return cache.addAll(
                [
                    "/",
                    "/index.html",
                    "icon-512x512.png",
                    "icon-384x384.png",
                    "icon-192x192.png",
                    "icon-152x152.png",
                    "icon-144x144.png",
                    "icon-128x128.png",
                    "icon-96x96.png",
                    "icon-72x72.png"
                ]
            );
        })
        .catch(function(err) {})
    );
});

self.addEventListener("fetch", function(evt) {
    if (evt.request.mode === 'navigate') {
        evt.respondWith(
            caches.match(evt.request)
            .then(function(response) {
                return response || fetch(evt.request);
            })
        );
    }
});