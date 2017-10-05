self.addEventListener("install", function(evt){
    evt.waitUntil(
        caches.open("marios-demo")
        .then(function(cache) {
            return cache.addAll(
                [
                    "/",
                    "/index.html",
                    "mapbox-gl.css",
                    "mapbox-gl.js",
                    "marios.json",
                    "pizza-30.png"
                ]
            );
        })
        .catch (function(err){})
    );
});

self.addEventListener("fetch", function(evt){
    evt.respondWith(
        caches.match(evt.request)
        .then(function(response){
            return response || fetch(evt.request);
        })
    );
});