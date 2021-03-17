importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');


// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

// Cache the API endpoint results
workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    new workbox.strategies.CacheFirst({
        cacheName: 'api-cache',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
              statuses: [0, 200],
            }),
        ],
    })
)

// Cache asset files -- Not using this because this app is demo only (uSe prEcAcHe InsTeAd)
workbox.routing.registerRoute(
    // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
    ({ request }) =>
      request.destination === 'style' ||
      request.destination === 'script' ||
      request.destination === 'worker',
    // Use a Stale While Revalidate caching strategy
    new workbox.strategies.StaleWhileRevalidate({
      // Put all cached files in a cache named 'assets'
      cacheName: 'assets',
      plugins: [
        // Ensure that only requests that result in a 200 status are cached
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [200],
        }),
      ],
    }),
);

  workbox.precaching.precacheAndRoute([{"revision":"90e557f51caa4b315c7c5ceb619eb68e","url":"css/main.css"},{"revision":"22307e4096a10500685c016e718c4658","url":"index.html"},{"revision":"17288fa63ee7092eb57cb9338267f3d2","url":"js/app.js"},{"revision":"b8fc4c32836b4f9ab5efbf0a10242635","url":"workbox-53962844.js"}]);
