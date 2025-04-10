import { signal } from "@preact/signals"
import { ActionError, actions } from "astro:actions"

const slug = signal<string | undefined>("")
const error = signal<ActionError<{ url: string }> | undefined>()
const showCopied = signal(false)

export function ShortenForm ({ url }: { url: string })  {
    if (showCopied.value) {
        return <div class="bg-function text-muted px-4 py-2 text-center rounded-md">Link copied</div>
    }

    if(slug.value) {
        const target = new URL("/" + slug.value, new URL(url))
        return <div class="flex flex-col md:flex-row gap-4">
          <input
            disabled
            type="url"
            placeholder="https://your-very-long-url-that-needs-shortening.com/some/path?with=parameters"
            value={target.href}
            class="flex-1 bg-background border-muted focus:border-keyword text-foreground placeholder:text-lineNumber font-mono px-4 py-2 rounded-md"
          />
          <button
            type={"button"}
            class="md:w-auto w-full bg-keyword hover:bg-keyword/90 text-background px-6 py-2 rounded-md"
            onClick={() => {
                navigator.clipboard
                    .writeText(target.href)
                    .then(() => {
                        showCopied.value = true
                        setTimeout(() => {
                            showCopied.value = false
                            slug.value = ""
                        }, 1000)
                    })
            }}
          >
            copy()
          </button>
        </div>
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            actions
                .shorten({
                    url: e.currentTarget.querySelector("input")!.value
                })
                .then(({ data, error: e}) => {
                    slug.value = data?.slug
                    console.log(slug.value)
                    error.value = e
                })
        }} class="flex flex-col md:flex-row gap-4">
          <input
            type="url"
            placeholder="https://your-very-long-url-that-needs-shortening.com/some/path?with=parameters"
            class="flex-1 bg-background border-muted focus:border-keyword text-foreground placeholder:text-lineNumber font-mono px-4 py-2 rounded-md"
          />
          <button
            class="md:w-auto w-full bg-keyword hover:bg-keyword/90 text-background px-6 py-2 rounded-md"
          >
            shorten()
          </button>
        </form>
        )
}

export default ShortenForm