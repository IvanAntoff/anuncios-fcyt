'use strict';

var CACHE = 'Anuncios FCYT v1.1.1';
var urlsToCache = [
	'./',
	'./index.html',
	'./manifest.webmanifest',
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
self.addEventListener('activate', function(event) {
	var version = 'v1.1';
	event.waitUntil(
	  caches.keys()
		.then(cacheNames =>
		  Promise.all(
			cacheNames
			  .map(c => c.split('-'))
			  .filter(c => c[0] === 'cachestore')
			  .filter(c => c[1] !== version)
			  .map(c => caches.delete(c.join('-')))
		  )
		)
	);
  });

  //Siempre Intenta descargar contenido de la red, si no lo logra, utiliza cache.
  self.addEventListener("fetch", function(event) {
	event.respondWith(
	  fetch(event.request).catch(function() {
		return caches.match(event.request);
	  })
	);
  });

self.addEventListener('message', function(event) {
	if (event.data.action === 'skipWaiting') {
		self.skipWaiting();
	}
});
