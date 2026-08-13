const CACHE = 'casa-al-mare-v1';
const FILE_APP = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FILE_APP)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((chiavi) =>
      Promise.all(chiavi.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Il meteo va sempre in rete (dati freschi); il resto: cache-first, con aggiornamento in background.
self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  if (url.includes('open-meteo.com')) return; // lascia passare, niente cache per le previsioni

  e.respondWith(
    caches.match(e.request).then((risposta) => {
      const rete = fetch(e.request).then((fresca) => {
        if (fresca && fresca.ok && e.request.method === 'GET') {
          caches.open(CACHE).then((cache) => cache.put(e.request, fresca.clone()));
        }
        return fresca;
      }).catch(() => risposta);
      return risposta || rete;
    })
  );
});
