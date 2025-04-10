import { type APIRoute } from "astro"
export const GET: APIRoute = async ({  params, locals, cookies, url }) => {

    
    const { slug } = params
    if (!slug) {
        return new Response("not found", {
            status: 404,
        })
    }

    const shorten = await locals.shortenerService.findBySlug(slug)
    if (!shorten) {
        return new Response("not found", {
            status: 404,
        })
    }

    const current =( new Date().getTime() / 86400_000 | 0).toString(36)
    if (cookies.get("abl")?.value !== current) {
        cookies.set("abl", current)
        const target = new URL("/confirm", url)
        target.searchParams.set("to", shorten.target)
        return Response.redirect(target, 307)
    }
    return Response.redirect(shorten.target, 307)
}