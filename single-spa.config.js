import { registerApplication, start } from 'single-spa';
registerApplication(
  // Name of our single-spa application
  'pocCorn',
  // loadingFunction
  () => import('./src/core/home.app.js'),
  // activityFunction
  location =>
    location.pathname === '' || location.pathname === '/' || location.pathname.startsWith('/home'),
);
start();
