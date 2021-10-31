//does the browser support service worker?

if ("serviceWorker" in navigator){
    //defer sw install until page completes loading
    window.addEventListener("load", () => {

//then register out service worker
navigator.serviceWorker
.register("sw.js")
.then((reg) => {
    //display a success message
    console.log(`Service Worker Registration (Scope: ${reg.scope})`);
})
    .catch((error) => {
    //display error message
    console.log(`Service Worker error (${error})`);
    });
});
    
} else {
    //happens when the app isnt servered over a TLS connection(HTTP)
    //or if the broswer doesnt support the service worker
    console.log("Service Worker not available");
    }

// if ('serviceWorker' in navigator){
//   navigator.serviceWorker.register('/sw.js').then(function(registration){
//     console.log('service worker registration succeeded:',registration);
//   },
// function(error){
//   console.log('service worker registration failed:',error);
// });
// }
// else{
//   console.log('service workers are not supported.');
// }