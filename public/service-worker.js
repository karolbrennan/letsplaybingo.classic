const CACHE_NAME = "letsplaybingo-v2.0-cache";

self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(async (cache) => {
			// Open a cache and cache our files
			await cache.addAll(["/", "/index.html", "/bundle.js"]);
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
		if (!fetchRequest.url.includes("submitpattern") && !fetchRequest.url.includes("contact")) {
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
	} else {
		event.respondWith(
			caches.match(event.request).then(function (response) {
				if (response) {
					return response;
				}
			})
		);
	}
});
