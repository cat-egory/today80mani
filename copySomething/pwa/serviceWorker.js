const staticAssets = [
    './',
    // './assets/audio/bubbles.mp3',
    // './assets/audio/clay.mp3',
    // './assets/audio/confetti.mp3',
    // './assets/audio/gilmmer.mp3',
    // './assets/audio/moon.mp3',
    // './assets/audio/ufo.mp3',
    './assets/css/style.css',
    './assets/js/index.js'
];

self.addEventListener('install', async ev => {
    const cache = await caches.open('pwa-static-test');
    cache.addAll(staticAssets);
});

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('pwa-dynamic-test');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (e) {
        return await caches.match(req);
    }
}

self.addEventListener('fetch', ev => {
    const req = ev.request;
    const url = new URL(req.url);

    console.log(url.origin, location.url);
    if(url.origin === location.url) {
        console.log('local');
        // ev.respondWith(cacheFirst(req));
    } else {
        console.log('network');
        // ev.respondWith(networkFirst(req));
    }

});
