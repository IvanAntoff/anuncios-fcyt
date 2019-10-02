if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      // Registro exitoso.
      console.log('ServiceWorker registrado con exito: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker error durante el registro: ', err);
    });
  });
}o