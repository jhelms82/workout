// const assets = [
//     '/',
//     "/index.html",
//     "/js/app.js",
//     "/js/materialize.min.js",
//     "/css/style.css",
//     "/css/materialize.min.css",
//     "/img/workout.jpg"
// ]


self.addEventListener('install', function(event){
    //fires when the browser install the app
    //here we just logging the enet and the contents of the object passed to the event
    //purpose of this is to give the service worker a plae to secactup the local
    //environment after the installation completes
    console.log(`SW: Event fire: ${event.type}`);
    // event.waitUntil(caches.open('static').then(function(cache){
    //     console.log("SW: Precaching App shell");
    //     cache.addAll(assets);
    // })
    // );
});

self.addEventListener('activate', function(event){
    //fires when the browser install the app
  //its a place for the service worker to clean up from
  //previous service worker versions

    console.log(`SW: Event fire: ${event.type}`);
});

self.addEventListener('fetch', function(event){
    //fires whenever the app request a resource (file or data)
    console.log(`SW: fetching ${event.request.url}`);
    //next, go get the requested resource from the network
    event.respondWith(fetch(event.request));
    // caches.match(event.request).then(function(response){
    //     return(response) || fetch(event.request);
    // });

});