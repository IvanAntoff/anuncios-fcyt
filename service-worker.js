'use strict';

var CACHE = 'Anuncios FCYT v0.1.0';
var urlsToCache = [
	'./',
	'../views/home.hbs',
	'/assets/index.html',
	'/assets/js/helpers/helpers.js',
	'/assets/js/OneSignalSDKUpdaterWorker.js',
	'/assets/js/OneSignalSDKWorker.js',
	'/assets/js/date.js',
	'/assets/css/style.css',
	'/assets/database/database.js',
	'/assets/database/data.json', 				//nota para el desarrollador, upgradea esto kbza
	'/assets/images/icons/FB2.png', 				//nota para el desarrollador, upgradea esto kbza
	'/assets/images/icons/GH2.png', 				//nota para el desarrollador, upgradea esto kbza
	'/assets/images/icons/TW2.png', 				//nota para el desarrollador, upgradea esto kbza
	'/assets/images/icons/IG2.png',	 			//nota para el desarrollador, upgradea esto kbza
	'/assets/images/assents/header.png' 			//nota para el desarrollador, upgradea esto kbza
];

self.addEventListener('install', function(event) {
	// Instalacion del servioce worker.
	event.waitUntil(
		caches.open(CACHE).then(function(cache) {
			console.log('Cache abierto.');
			return cache.addAll(urlsToCache);
		})
	);
});
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				return response;
			}

			var fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(function(response) {
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

				var responseToCache = response.clone();

				caches.open(CACHE).then(function(cache) {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});

self.addEventListener('message', function(event) {
	if (event.data.action === 'skipWaiting') {
		self.skipWaiting();
	}
});
