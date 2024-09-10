// text-ediquette/Develop/client/src/js/install.js
const butInstall = document.getElementById('buttonInstall');

// Event listener for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.style.display = 'none';
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed successfully');
  window.deferredPrompt = null;
});
