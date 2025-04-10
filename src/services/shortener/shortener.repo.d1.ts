import { anaid } from "@falentio/anaid"
import type { Shorten, ShortenerRepo } from "./shortener.repo.ts"
export class ShortenRepoD1 implements ShortenerRepo {
    constructor(private d1: D1Database) { }

    async create(slug: string, target: string): Promise<Shorten> {
        const result = await this.d1
            .prepare("INSERT INTO shortens (id, slug, target) VALUES (?, ?, ?) RETURNING *")
            .bind(anaid(), slug, target)
            .first<Shorten>()
        if (!result) {
            throw new Error("Failed to create shortened URL")
        }
        return result
    }

    async findBySlug(slug: string): Promise<Shorten | null> {
        const result = await this.d1
            .prepare("SELECT * FROM shortens WHERE slug = ?")
            .bind(slug)
            .first<Shorten>()
        return result
    }
}