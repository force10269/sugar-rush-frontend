// Sugar Rush Service Worker
const CACHE_NAME = 'sugar-rush-v1';
const STATIC_CACHE = 'sugar-rush-static-v1';
const DYNAMIC_CACHE = 'sugar-rush-dynamic-v1';

const staticAssets = [
  '/',
  '/manifest.json',
  '/sugar-rush-menu.pdf',
  '/placeholder.png',
  '/southern-colorado-mountain.jpg'
];

const dynamicAssets = [
  '/static/js/',
  '/static/css/',
  '/static/media/'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(staticAssets.filter(url => url !== '/static/js/bundle.js'));
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }

        return fetch(request).then((fetchResponse) => {
          if (shouldCache(request)) {
            const responseClone = fetchResponse.clone();
            const cacheName = isStaticAsset(request) ? STATIC_CACHE : DYNAMIC_CACHE;
            
            caches.open(cacheName).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return fetchResponse;
        }).catch(() => {
          if (request.destination === 'document') {
            return caches.match('/');
          }
        });
      })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

function shouldCache(request) {
  return request.method === 'GET' && 
         !request.url.includes('/api/') &&
         !request.url.includes('chrome-extension://');
}

function isStaticAsset(request) {
  return staticAssets.some(asset => request.url.endsWith(asset)) ||
         request.url.includes('.png') ||
         request.url.includes('.jpg') ||
         request.url.includes('.pdf');
} 