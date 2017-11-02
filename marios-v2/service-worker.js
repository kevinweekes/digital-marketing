self.addEventListener("install", function(evt) {
    evt.waitUntil(
        caches.open("marios-demo")
        .then(function(cache) {
            return cache.addAll(
                [
                    "/",
                    "/index.html",
                    "/detabinator.js",
                    "/side-nav.js",
                    "/styles.css",
                    "/map-styles.css",
                    "/img/icon-512x512.png",
                    "/img/icon-384x384.png",
                    "/img/icon-192x192.png",
                    "/img/icon-152x152.png",
                    "/img/icon-144x144.png",
                    "/img/icon-128x128.png",
                    "/img/icon-96x96.png",
                    "/img/icon-72x72.png"
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