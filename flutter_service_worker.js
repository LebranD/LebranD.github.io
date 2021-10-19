'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3cb08e5b6e7ee76628062c6b2ee8cfa1",
"index.html": "6f47f3a4153913930a5037c1f2fc6cce",
"/": "6f47f3a4153913930a5037c1f2fc6cce",
"main.dart.js": "f40685e8c2e6fa4f2fd207923a9f6081",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6f2de836e30aace8d7058f70b4f42675",
"assets/images/partner_fkysr2.png": "7ac993c977ec3a956951d14129878fcf",
"assets/images/partner_xrzc.png": "8fa11fc1275b4b6bcbcec97ef74bdef6",
"assets/images/partner_wgjy.png": "450cc0eec3e7077829e086b4cd028617",
"assets/images/partner_myhtb_cover.jpg": "e93e692db31668a2f147c7c038ccac68",
"assets/images/partner_wgjx.png": "59f35926232a2956302402157f8ee52b",
"assets/images/partner_sw4_cover.jpg": "8255d1fb069ba9ca086e6b65f73cc2b3",
"assets/images/partner_sw4.jpg": "236433b62e4627b8dea30cf383e5e49d",
"assets/images/partner_xrzc_cover.jpg": "d4dc39c79c6339e2fab2c1fa0cd49d0c",
"assets/images/partner_jyyz_cover.jpg": "a9fd99541da135e88abbcd168d7e50b3",
"assets/images/partner_mrfz_cover.png": "2a06196243c146a701160fc26c268ae6",
"assets/images/partner_tlbb_cover.jpg": "2e781a47ab2f0dc8b65e6bb43d156232",
"assets/images/partner_fkysr2_cover.png": "9741ef5cce8c6c0d8965db7a2c6070e3",
"assets/images/partner_yhzd_cover.jpg": "b22a7d3c6063477b5135efea2ab1e0de",
"assets/images/partner_tlbb.png": "0a66c860c3680a3d3dced7ed75f8c5d3",
"assets/images/partner_top.png": "261ec3f3f9a3e20a34f75ed42d543790",
"assets/images/partner_wd_cover.png": "3aa9d8f2ba663cbb4d06c43e37de3c1a",
"assets/images/partner_wgjy_cover.png": "d457a060f046a5d37cbd62c3891187d7",
"assets/images/partner_ynxy_cover.png": "f2eb49f8ec80ec7f60b1504090d94d47",
"assets/images/bottom_logo.png": "a6eb66a22ef9da35c1856721938a5534",
"assets/images/join_us_top.png": "f76b54187d0b9401fd9f7d09dbd2c150",
"assets/images/office_1.png": "ea5afff9af87d84df5a215f18d36de7c",
"assets/images/game_2.png": "c65cb460b12fa5733571c6710cbd2a5b",
"assets/images/partner_mrfz.png": "3ca23c62f30ab28b0c2654949c12a6b5",
"assets/images/game_3.png": "53aa95a20e900554d090ae291069bf48",
"assets/images/partner_jyyz.jpg": "f9638ac35c6ffcf9674ebc89f0eb9477",
"assets/images/partner_ynxy.png": "a66e3c71ab8ba52c90a429f0b07b2cd9",
"assets/images/partner_wd.png": "1f4577c1bbc44857b22ef00b2e2ca3b4",
"assets/images/office_2.png": "8a287b6a71ae3b526ea04683137eddb4",
"assets/images/partner_myhtb.png": "a38e5ae85641d86e3721f890cc7fbd4d",
"assets/images/game_1.png": "ce7b7206e7f7c4e2414f2a5e050c24bf",
"assets/images/office_3.png": "eacdd79620af902c27f828e64f8581cd",
"assets/images/game_4.png": "cdd0df9e3afe013c504fa97e723d331c",
"assets/images/game_5.png": "0e02a707e45af1f74e153d471076dcad",
"assets/images/partner_yhzd.png": "ba8e90bda8641ca85dde34a3757322fe",
"assets/images/about_us_top.png": "e886bf091134acb0177dcbf35d26a2d7",
"assets/images/partner_wgjx_cover.png": "d2e50f2be62e78f64ba04d4063d679fe",
"assets/images/office_4.png": "47f537b6bc34ca1eeb0c419cdcd9a43c",
"assets/images/cusky_logo.png": "a138387f992e51e67ce194c545e684ea",
"assets/images/office_5.png": "c28c42be299325724891d5231ec392df",
"assets/AssetManifest.json": "9fafd7d6ffb7a552a282139eec783b00",
"assets/NOTICES": "49a8095e2491fc0f21194fefd1f113ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
