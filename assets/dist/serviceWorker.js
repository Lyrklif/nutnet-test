"serviceWorker"in navigator&&(navigator.serviceWorker.controller?console.log("[PWA Builder] active service worker found, no need to register"):navigator.serviceWorker.register("pwabuilder-sw.js",{scope:"./"}).then(function(e){console.log("[PWA Builder] Service worker has been registered for scope: "+e.scope)}));