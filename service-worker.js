/*
 * Il sito precedente (VuePress) registrava un service worker che continua a
 * servire la vecchia versione dalla cache anche dopo il redeploy.
 * Questo file lo sostituisce con un service worker che si autodistrugge:
 * svuota tutte le cache, si deregistra e ricarica le pagine aperte.
 */
self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (key) { return caches.delete(key); }));
      })
      .then(function () { return self.registration.unregister(); })
      .then(function () { return self.clients.matchAll({ type: 'window' }); })
      .then(function (clients) {
        clients.forEach(function (client) { client.navigate(client.url); });
      })
  );
});
