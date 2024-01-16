const CACHE_NAME = "letsplaybingo-v2.0.0-cache";

self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(async (cache) => {
			// Open a cache and cache our files
			await cache.addAll(["/", "/index.html", "/static"]);
			return self.skipWaiting();
		})
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
	if (navigator.onLine) {
		const fetchRequest = event.request.clone();
		return fetch(fetchRequest).then((response) => {
			if (!response || response.status !== 200 || response.type !== "basic") {
				return response;
			}
			const responseToCache = response.clone();
			caches.open(CACHE_NAME).then((cache) => {
				cache.put(event.request, responseToCache);
			});

			return response;
		});
	}
});
