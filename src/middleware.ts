import { defineMiddleware } from "astro:middleware";
import { ShortenRepoD1 } from "./services/shortener/shortener.repo.d1.ts";
import { ShortenerService } from "./services/shortener/shortener.service.ts";

export const onRequest = defineMiddleware(async ({ locals }, next) => {
    locals.shortenerService = new ShortenerService(
        new ShortenRepoD1(
            locals.runtime.env.DB,
        )
    )
    return next()
})