'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0b1b77f31c71ac93e334669218f34adc",
"assets/AssetManifest.json": "879515d883a8e799cfd8063297024aad",
"assets/assets/fonts/CenturyGothic.ttf": "09f6b2ba02572f19a7d7dd2b5f6494ad",
"assets/assets/fonts/HankenGrotesk-Bold.ttf": "61097ecff9db3db742c750486eba0c5d",
"assets/assets/fonts/HankenGrotesk-Medium.ttf": "c5b0b9b7011812c69f0e876182536930",
"assets/assets/fonts/HankenGrotesk-Regular.ttf": "e94ea86690059e4c488a9a8cb789ba2f",
"assets/assets/fonts/HankenGrotesk-SemiBold.ttf": "adf5a260825f6635b750c6ee14eebc4c",
"assets/assets/fonts/Jost-Bold.ttf": "67d4fe2602174cb3c97346ce2b391a60",
"assets/assets/fonts/Jost-Medium.ttf": "01d92baf00ccba044b49ca4e0db57265",
"assets/assets/fonts/Jost-SemiBold.ttf": "05f7115c8a623b537852e7425c3fc019",
"assets/assets/images/background/bg_01.svg": "8d49905d4e5c39e45288ba8b15a172e3",
"assets/assets/images/background/bg_02.svg": "c7dbe6060cb50a7b266284aa15f03d13",
"assets/assets/images/background/bg_03.svg": "19a346907f11b61faba664846312288c",
"assets/assets/images/background/bg_bottom_left_black.svg": "39f30276ccf43ab39636b43e02cb4664",
"assets/assets/images/background/bg_color_rectangle.svg": "a4e3829b3deedf3e5cbde67c75a1e12f",
"assets/assets/images/background/bg_footer.png": "f95688150691ffbe5fe2a922cf39f16d",
"assets/assets/images/background/bg_gradient.png": "8f405e4b1970b07ab8cc91346ca03135",
"assets/assets/images/background/bg_gradient.svg": "008e7e7d98088a0891658b21c9ca9d58",
"assets/assets/images/background/bg_hand.png": "f8aeeafae70e1752b47f56e223fa41de",
"assets/assets/images/background/bg_home.png": "0397e8001695fc4db4ab4dbc4ea6c063",
"assets/assets/images/background/bg_mobile_color.png": "38f2ad843fae725d00b31ea8519a9db9",
"assets/assets/images/background/bg_mobile_color.svg": "b324b94eda1185ff830ceef4b2aab3d9",
"assets/assets/images/background/bg_mobile_presale.png": "b414f071a97b63d944db0b8c9df541a2",
"assets/assets/images/background/bg_mobile_rectangle.png": "c31737b468db566a3e677a82a086af93",
"assets/assets/images/background/bg_mobile_rectangle.svg": "4d5ee18288ebf6ce674ba471b0dcdf8d",
"assets/assets/images/background/bg_phone.png": "749baa0fba31dff9508f0fdf324e2ff3",
"assets/assets/images/background/bg_phones.png": "a3dd025e12680b28e5fcab1c52deb4f9",
"assets/assets/images/background/bg_presale.png": "deeb54777db904e984e6757f104ed290",
"assets/assets/images/background/bg_right_rectangle.svg": "ce0c4b282dfcb06886b38b4531ec4396",
"assets/assets/images/background/bg_top_right_black.svg": "e7b265ac17bbad0cce46824134f5a2ec",
"assets/assets/images/background/bg_top_right_white.svg": "fc1e097bf1215cd75cc1f70953235157",
"assets/assets/images/background/bg_ween.svg": "36cecb103178a8ed0ca087ba1be4dc72",
"assets/assets/images/icons/ic_black_circle.png": "3b1a2a9a70aeeb6eda8e350ebb066375",
"assets/assets/images/icons/ic_blue_arrow.svg": "11d0c100985d235fb254c7217b5f4ba2",
"assets/assets/images/icons/ic_blue_circle.svg": "fffcc069f8526d74fbb577826bf3353d",
"assets/assets/images/icons/ic_blue_drop.svg": "92378e762510eda0eb08436b32907a1e",
"assets/assets/images/icons/ic_crown.svg": "4818234c6e2fecf9bcbb773078aa4383",
"assets/assets/images/icons/ic_drop.svg": "f9aa566dcfbd37545acc7a7ac18f1990",
"assets/assets/images/icons/ic_github.svg": "eb9fdb362ea26f73c9cb3c5fd004417a",
"assets/assets/images/icons/ic_green_arrow.svg": "e30af124c620e81aec6c48f805d2f469",
"assets/assets/images/icons/ic_green_circle.svg": "f14efaa50a1054eef89a9f0ea2bebe54",
"assets/assets/images/icons/ic_green_drop.svg": "cb52ae4a1f237284c169fb509ce8ff95",
"assets/assets/images/icons/ic_green_right.svg": "c019c28a909433e4cc526b886d5ad0f7",
"assets/assets/images/icons/ic_grey_circle.svg": "c1a37bf667e36407ca84b017dd663ed2",
"assets/assets/images/icons/ic_instagram.svg": "cba13abe9f7748f17b7a517b87f8bbd8",
"assets/assets/images/icons/ic_logo.svg": "8c9cc7e8122ca002158664f035955463",
"assets/assets/images/icons/ic_medium.svg": "70f2cf31d20dfb7025369f61451d84ed",
"assets/assets/images/icons/ic_menu.svg": "6154c9e4eeea9f9a871ecd7afcf1652d",
"assets/assets/images/icons/ic_oleg.svg": "66eb2c369ebb952340d5222f2b977778",
"assets/assets/images/icons/ic_reddit.svg": "23d4533da09b88685b730ffdf08426ea",
"assets/assets/images/icons/ic_red_drop.svg": "ce3f35d04150660d50150b775a8a97fc",
"assets/assets/images/icons/ic_semi_circle.png": "c03abe10d5de3b17f6dc74cb06d5575d",
"assets/assets/images/icons/ic_star.svg": "823ba531850b2717ca123e6fe16bd009",
"assets/assets/images/icons/ic_telegram.svg": "f23adb57f9c7b0472a8d5489797b13c5",
"assets/assets/images/icons/ic_tokners.svg": "f9414c85ca639187bcc3e4ce390b0f99",
"assets/assets/images/icons/ic_twitter.svg": "1cb1230fea71d7d57890b5be509cd098",
"assets/assets/images/icons/ic_yellow_drop.svg": "cec7dace46fee0287147ebbbbb5f5e07",
"assets/assets/images/icons/ic_yellow_right.svg": "b95c1f8df030e1db37cf6db68b5e3f65",
"assets/FontManifest.json": "54d4e1739403cde49e6e65f7f543a07e",
"assets/fonts/MaterialIcons-Regular.otf": "40e0d3264f5eb0477693be70155d0801",
"assets/NOTICES": "b9834c7da6ee87e17eac8272debfa176",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0e776d5214fb8a11d1fa2de60099306f",
"/": "0e776d5214fb8a11d1fa2de60099306f",
"main.dart.js": "a4658f9535f019eaaa8e5c0b3a9154db",
"manifest.json": "1acdd1ec5c0a1bfd536657f1b1faca8e",
"version.json": "53c91bde4e081fb11afed8db4c57c0b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
