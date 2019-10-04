'use strict';

var CACHE = 'Anuncios FCYT v1.0.1';
var urlsToCache = [
	'./',
	'./index.html',
	'./manifest.json',
	'/assets/js/gets.js',
	'/assets/js/jquery.js',
	'/assets/js/IniciarServiceWorker.js',
	'/assets/css/style.css',
	'/assets/css/w3.css',
	'/assets/css/font-awesome.css',
	'/assets/database/data.json', 					
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
