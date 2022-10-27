ServiceWorkerContainer.register(scriptURL, options)
  .then(function(ServiceWorkerRegistration) {  });

  if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }).catch(function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }

// Path: sw.js

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
        return cache.addAll([
            '/index.html',
            '/style.css',
            '/script.js'
        ]);
        })
    );
    });

    self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
        })
    );
    });
    