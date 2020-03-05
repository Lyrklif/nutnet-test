const CACHE="pwabuilder-precache",precacheFiles=["./"];function fromCache(e){return caches.open(CACHE).then(function(n){return n.match(e).then(function(e){return e&&404!==e.status?e:Promise.reject("no-match")})})}function updateCache(e,n){return caches.open(CACHE).then(function(t){return t.put(e,n)})}self.addEventListener("install",function(e){console.log("[PWA Builder] Install Event processing"),console.log("[PWA Builder] Skip waiting on install"),self.skipWaiting(),e.waitUntil(caches.open(CACHE).then(function(e){return console.log("[PWA Builder] Caching pages during install"),e.addAll(precacheFiles)}))}),self.addEventListener("activate",function(e){console.log("[PWA Builder] Claiming clients for current page"),e.waitUntil(self.clients.claim())}),self.addEventListener("fetch",function(e){"GET"===e.request.method&&-1===e.request.url.indexOf("/second-page")&&e.respondWith(fromCache(e.request).then(function(n){return e.waitUntil(fetch(e.request).then(function(n){return updateCache(e.request,n)})),n},function(){return fetch(e.request).then(function(n){return e.waitUntil(updateCache(e.request,n.clone())),n}).catch(function(e){console.log("[PWA Builder] Network request failed and no cache."+e)})}))});