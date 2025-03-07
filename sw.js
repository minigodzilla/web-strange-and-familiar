const CACHE_NAME = 'offline-cache';
const offlineAssets = ['/index.html', '/style.css', '/script.js', '/icons/icon-192x192.png', '/icons/icon-512x512.png'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(offlineAssets)));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
