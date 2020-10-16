/* eslint-disable no-restricted-globals */
import 'regenerator-runtime'; /* for async await transpile */

const { default: CacheHelper } = require('./utils/cache-helper');

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', event => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './', '/images/no-connection-large.jpg']));
});

self.addEventListener('activate', event => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', event => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
