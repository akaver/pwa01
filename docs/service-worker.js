importScripts("/pwa01/precache-manifest.ba3e5d60e3fb191ffdf2625e3f88b4fc.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
    console.log("message it is really", msg);
    if (msg.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', (event) => {
    console.log('SW fetch', event);

    const fetchFn = async (event) => {
        const cache = await caches.open('CACHE');

        const getCachedResponse = async () => {
            const cacheResponse = await cache.match(event.request);
            console.log('Cache response', cacheResponse);
            if (cacheResponse !== undefined) return cacheResponse;
            return new Response(undefined, { status: 500, statusText: 'Nothing in cache!' });
        };

        if (navigator.onLine) {
            try {
                const response = await fetch(event.request);
                cache.put(event.request, response.clone());
                return response;
            } catch (err) {
                console.log('Fetch failed, trying cache', err);
                const cacheResponse = await getCachedResponse(event.request);
                return cacheResponse;
            }
        } else {
            console.log('navigator.onLine', navigator.onLine);
            const cacheResponse = await getCachedResponse(event.request);
            return cacheResponse;
        }
    };

    event.respondWith(fetchFn(event));
    /*
        event.respondWith(
            fetch(event.request).then(response => {
                console.log('fetch response', response);
                return response;
            })
        );
        */
});

