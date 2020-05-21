importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {registerRoute} = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;

registerRoute(
    ({request}) => request.destination === 'script' ||
        request.destination === 'style',
    new StaleWhileRevalidate()
);