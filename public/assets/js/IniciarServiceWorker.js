if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('./service-worker.js').then(
			//nota para el desarrollador, upgradea esto kbza, movelo a js.Registro
			function(registration) {
				// Registro exitoso.
				console.log('ServiceWorker registrado con exito: ', registration.scope);
			},
			function(err) {
				// registration failed :(
				console.log('ServiceWorker error durante el registro: ', err);
			}
		);
	});
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
const titulo = document.querySelector('.active');

addBtn.style.display = 'none';
titulo.style.textAlign = 'left';


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';
  titulo.style.textAlign = 'center';


  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
	addBtn.style.display = 'none';
	titulo.style.textAlign = 'left';

    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
