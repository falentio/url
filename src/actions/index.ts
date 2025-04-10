import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { ShortenerService } from "../services/shortener/shortener.service.ts";
import { ShortenRepoD1 } from "../services/shortener/shortener.repo.d1.ts";

export const server = {
    shorten: defineAction({
        input: z.object({
            url:z.string().url()
        }),
        handler: async (input, ctx) => {
            const result = await  ctx.locals.shortenerService.create(input.url)
            return result
        }
    })
}