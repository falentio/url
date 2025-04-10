
 type Env = {
    DB: D1Database
}

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

 declare namespace App {
   interface Locals extends Runtime { 
    shortenerService: import("./services/shortener/shortener.service.ts").ShortenerService
    }
}