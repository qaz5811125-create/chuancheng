const CACHE_NAME = "chuancheng-cache-v0.8.0-jobs-expansion-elements-v2";
const ASSETS = [
  "./",
  "index.html",
  "CHANGELOG.md",
  "README.md",
  "README_Netlify.txt",
  "manifest.json",
  "cover.png",
  "splash.png",
  "icon-192.png",
  "icon-512.png",
  "icon-1024.png",
  "maskable-192.png",
  "maskable-512.png",
  "wood_sword.png",
  "iron_sword.png",
  "great_sword.png",
  "scythe.png",
  "spear.png",
  "axe.png",
  "attackAnimation.js",
  "weaponConfig.js",
  "weaponRenderer.js"
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
