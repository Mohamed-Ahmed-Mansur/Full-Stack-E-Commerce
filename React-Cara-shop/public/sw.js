const filesToCache = [
    'assets/15.WebP',
    'assets/landing.WebP',
    'assets/img/banner/b10.WebP',
    'assets/img/banner/b17.WebP',
    'assets/img/banner/b18.Webp',
    'assets/img/banner/b4.WebP',
    'assets/img/banner/b7.WebP',
    'static/js/bundle.js'
];

const staticCacheName = 'pages1'

this.addEventListener('install',event=>{
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache=>{
            return cache.addAll(filesToCache)
        })
    )
})

this.addEventListener('activate',event=>{
    console.log('activating service worker ', event)
})

this.addEventListener('fetch',event=>{
    console.log(event.request)
    event.respondWith(
        caches.match(event.request)
        .then(response=>{
            if(response){
                console.log('Found request :' ,event.request.url,' in cache')
                return response
            }
            // console.log(response);
            // console.log("try connecting to server", event.request)
            return fetch(event.request).then(respone => {
                if (!respone.ok) {
                    console.log("File not found")
                    return fetch("custom.html")
                }
                console.log("connection with server successeded", respone.url)
                return fetch(event.request) 
            }).catch(error => {
                console.error("Network error:", error);
                return "404 Check Your Network connection";
            }); /**
             handle
             online response server 404----custom page page request wrong
             offline---custome page you are working offline */
            //  .then()
            //  .catch()//server
        })        
        .catch(err=> {
            console.log(err)
        })
    )
});