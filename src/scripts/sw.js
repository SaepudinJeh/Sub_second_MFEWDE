import "regenerator-runtime";
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

const { assets } = global.serviceWorkerOption;
console.log(assets);

if (workbox)
    console.log(`Workbox berhasil dimuat`);
else {

    console.log(`Workbox gagal dimuat`);
}

workbox.routing.registerRoute(
    new RegExp("https://restaurant-api.dicoding.dev/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "Api",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 10
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp("/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "pages",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 10
            })
        ]
    })
);

