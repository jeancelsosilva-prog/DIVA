/* Divã: modo offline. (O prefixo do cache continua plano-leticia- para limpar as versões antigas.) Versão 9114e87ae5 (muda sempre que o app muda). */
var V = 'plano-leticia-9114e87ae5';
var ARQUIVOS = ["./", "index.html", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-192.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png"];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(ARQUIVOS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k.indexOf('plano-leticia-') === 0 && k !== V; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Páginas: rede primeiro (pega a versão nova na hora), com 4 s de espera; sem rede, usa a cópia guardada.
function pagina(req) {
  var rede = fetch(req, { cache: 'no-cache' }).then(function (res) {
    if (res && res.ok) { var cp = res.clone(); caches.open(V).then(function (c) { c.put(req, cp); }); }
    return res;
  });
  var espera = new Promise(function (_, rej) { setTimeout(rej, 4000); });
  return Promise.race([rede, espera]).catch(function () {
    return caches.match(req, { ignoreSearch: true })
      .then(function (hit) { return hit || caches.match('index.html'); })
      .then(function (hit) { return hit || rede; });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') { e.respondWith(pagina(req)); return; }
  // Arquivos fixos (ícones, manifesto): cópia guardada primeiro.
  e.respondWith(caches.match(req).then(function (hit) {
    return hit || fetch(req).then(function (res) {
      if (res && res.ok) { var cp = res.clone(); caches.open(V).then(function (c) { c.put(req, cp); }); }
      return res;
    });
  }));
});
