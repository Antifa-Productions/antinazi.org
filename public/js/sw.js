const addResourcesToCache = async (resources) => {
    const cache = await caches.open("an-v10");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/css/style_2.css",
            "/js/main.js",
            "/apple-touch-icon.png",
            "/favicon.png",
            "/favicon.svg",
            "/maskable_icon.png",
            "/icon_x72.png",
            "/icon_x96.png",
            "/icon_x128.png",
            "/icon_x192.png",
            "/icon_x384.png",
            "/icon_x512.png",
            "/AntiNaziTwitter.png",
            "/manifest.webmanifest",
        ])
    );
});
