// text-ediquette/Develop/client/src/js/index.js
import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
    <div class="loading-spinner"></div>
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${process.env.NODE_ENV === 'production' ? '' : 'dist/'}service-worker.js`;
    navigator.serviceWorker.register(swUrl)
      .then((registration) => {
        console.log('ServiceWorker registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('ServiceWorker registration failed: ', registrationError);
      });
  });
} else {
  console.error('Service workers are not supported in this browser.');
}
