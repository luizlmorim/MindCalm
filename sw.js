var CACHE_NAME = 'my-web-app-cache';
var urlsToCache = [
  '/home.html',
  '/manifest.json',
  '/data/professionals.json',
  '/pages/breathing.html',
  '/pages/daily.html',
  '/pages/meditation.html',
  '/pages/professionals.html',
  '/pages/self-massage.html',
  '/pages/education/bright.html',
  '/pages/education/index.html',
  '/pages/education/podcast.html',
  '/pages/education/tips.html',

  '/images/icons/icon512_maskable.png',
  '/images/icons/icon512_rounded.png',

  
  '/assets/css/fontawesome-all.min.css',
  '/assets/css/main.css',
  '/assets/css/noscript.css',

  '/assets/sass/main.scss',
  '/assets/sass/noscript.scss',

  '/assets/sass/base/_page.scss',
  '/assets/sass/base/_reset.scss',
  '/assets/sass/base/_typography.scss',

  '/assets/sass/components/_actions.scss',
  '/assets/sass/components/_box.scss',
  '/assets/sass/components/_button.scss',
  '/assets/sass/components/_features.scss',
  '/assets/sass/components/_form.scss',
  '/assets/sass/components/_icon.scss',
  '/assets/sass/components/_list.scss',
  '/assets/sass/components/_row.scss',
  '/assets/sass/components/_section.scss',
  '/assets/sass/components/_image.scss',
  '/assets/sass/components/_spotlight.scss',
  '/assets/sass/components/_statistics.scss',
  '/assets/sass/components/_statistics.scss',
  '/assets/sass/components/_table.scss',

  '/assets/webfonts/fa-brands-400.eot,',
  '/assets/webfonts/fa-brands-400.svg',
  '/assets/webfonts/fa-brands-400.ttf,',
  '/assets/webfonts/fa-brands-400.woff,',
  '/assets/webfonts/fa-brands-400.woff2',
  '/assets/webfonts/fa-regular-400.eot',
  '/assets/webfonts/fa-regular-400.svg',
  '/assets/webfonts/fa-regular-400.woff',
  '/assets/webfonts/fa-regular-400.woff2',
  '/assets/webfonts/fa-solid-900.eot',
  '/assets/webfonts/fa-solid-900.svg',
  '/assets/webfonts/fa-solid-900.ttf',
  '/assets/webfonts/fa-solid-900.woff',
  '/assets/webfonts/fa-solid-900.woff2',




  '/assets/js/breakpoints.min.js',
  '/assets/js/browser.min.js',
  '/assets/js/funções.js',
  '/assets/js/import.js',
  '/assets/js/jquery.min.js',
  '/assets/js/jquery.scrollex.min.js',
  '/assets/js/jquery.scrolly.min.js',
  '/assets/js/map.js',
  '/assets/js/main.js',
  '/assets/js/util.js',
  




  '/images/,ao2.png',
  '/images/alegre.png',
  '/images/automassagem.png',
  '/images/capaBrilhante.png',
  '/images/capaBrilhante.png',
  '/images/capaDicas.png',
  '/images/capaPreviewBrilhante.png',
  '/images/capaPreviewDicas.png',
  '/images/capaPreviewPodcast.png',
  '/images/confuso.png',
  '/images/diario.png',
  '/images/educacao.png',
  '/images/favicon.png',
  '/images/iconBlue.png',
  '/images/logo.svg',
  '/images/mao1.png',
  '/images/mao3.png',
  '/images/mao4.png',
  '/images/mao5.png',
  '/images/mao6.png',
  '/images/mao7.png',
  '/images/mao8.png',
  '/images/mao9.png',
  '/images/meditacao.png',
  '/images/neutro.png',
  '/images/pe1.png',
  '/images/pe2.png',
  '/images/pe3.png',
  '/images/pe4.png',
  '/images/pe5.png',
  '/images/pe6.png',
  '/images/profissionais.png',
  '/images/raiva.png',
  '/images/respiracao.png',
  '/images/triste.png'
  ]

self.addEventListener('install', function(event) {
  // event.waitUntil takes a promise to know how
  // long the installation takes, and whether it 
  // succeeded or not.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // This method looks at the request and
    // finds any cached results from any of the
    // caches that the Service Worker has created.
    caches.match(event.request)
      .then(function(response) {
        // If a cache is hit, we can return thre response.
        if (response) {
          return response;
        }

        // Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the request.
        var fetchRequest = event.request.clone();
        
        // A cache hasn't been hit so we need to perform a fetch,
        // which makes a network request and returns the data if
        // anything can be retrieved from the network.
        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cloning the response since it's a stream as well.
            // Because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                // Add the request to the cache for future queries.
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
