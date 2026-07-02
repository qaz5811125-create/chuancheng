const CACHE_NAME = "chuancheng-cache-v0.5.6-attack-animation-v3";
const ASSETS = [
  "./",
  "index.html",
  "CHANGELOG.md",
  "README.md",
  "manifest.json",
  "weaponConfig.js",
  "weaponRenderer.js",
  "attackAnimation.js",
  "cover.png",
  "splash.png",
  "icon-192.png",
  "icon-512.png",
  "icon-1024.png",
  "maskable-192.png",
  "maskable-512.png",
  "assets/weapons/wood_sword.png",
  "assets/weapons/iron_sword.png",
  "assets/weapons/great_sword.png",
  "assets/weapons/scythe.png",
  "assets/weapons/spear.png",
  "assets/weapons/axe.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match("index.html")))
  );
});
