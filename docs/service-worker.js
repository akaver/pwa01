importScripts("/pwa01/precache-manifest.10465a62f3a92c89fdbc9a7dd8ca4a37.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
    if (msg.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

