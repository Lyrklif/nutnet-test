const CACHE="pwabuilder-adv-cache",precacheFiles=["./**/*.{html,js,png,jpg,css,svg,eot,ttf,woff,woff2}"],offlineFallbackPage="./index.html",networkFirstPaths=[],avoidCachingPaths=["./second-page.html"];function pathComparer(e,t){return e.match(new RegExp(t))}function comparePaths(e,t){if(e)for(let n=0;n<t.length;n++){if(pathComparer(e,t[n]))return!0}return!1}function cacheFirstFetch(e){e.respondWith(fromCache(e.request).then(function(t){return e.waitUntil(fetch(e.request).then(function(t){return updateCache(e.request,t)})),t},function(){return fetch(e.request).then(function(t){return e.waitUntil(updateCache(e.request,t.clone())),t}).catch(function(t){if("document"===e.request.destination&&"navigate"===e.request.mode)return console.log("[PWA Builder] Network request failed and no cache."+t),caches.open(CACHE).then(function(e){e.match(offlineFallbackPage)})})}))}function networkFirstFetch(e){e.respondWith(fetch(e.request).then(function(t){return e.waitUntil(updateCache(e.request,t.clone())),t}).catch(function(t){return console.log("[PWA Builder] Network request Failed. Serving content from cache: "+t),fromCache(e.request)}))}function fromCache(e){return caches.open(CACHE).then(function(t){return t.match(e).then(function(e){return e&&404!==e.status?e:Promise.reject("no-match")})})}function updateCache(e,t){return comparePaths(e.url,avoidCachingPaths)?Promise.resolve():caches.open(CACHE).then(function(n){return n.put(e,t)})}self.addEventListener("install",function(e){console.log("[PWA Builder] Install Event processing"),console.log("[PWA Builder] Skip waiting on install"),self.skipWaiting(),e.waitUntil(caches.open(CACHE).then(function(e){return console.log("[PWA Builder] Caching pages during install"),e.addAll(precacheFiles).then(function(){return"ToDo-replace-this-name.html"===offlineFallbackPage?e.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker.")):e.add(offlineFallbackPage)})}))}),self.addEventListener("activate",function(e){console.log("[PWA Builder] Claiming clients for current page"),e.waitUntil(self.clients.claim())}),self.addEventListener("fetch",function(e){"GET"===e.request.method&&(comparePaths(e.request.url,networkFirstPaths)?networkFirstFetch(e):cacheFirstFetch(e))});