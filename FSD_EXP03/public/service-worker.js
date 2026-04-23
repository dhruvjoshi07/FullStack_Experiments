importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"
);

if (workbox) {
  console.log("Workbox loaded");

  // Cache static files
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

  // Runtime caching for API
  workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith("/api"),
    new workbox.strategies.NetworkFirst({
      cacheName: "api-cache",
      networkTimeoutSeconds: 3
    })
  );

  // Cache images
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.CacheFirst({
      cacheName: "image-cache"
    })
  );
}