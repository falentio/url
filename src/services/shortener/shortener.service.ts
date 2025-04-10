import type { ShortenerRepo } from "./shortener.repo.ts";
import { generateSlug } from "../../utils/id.ts";

export class ShortenerService {
    constructor(
        private readonly shortenerRepo: ShortenerRepo,
    ) {}

    create(target: string) {
        const slug = generateSlug()
        return this.shortenerRepo.create(slug, target);
    }

    async findBySlug(slug: string) {
        return this.shortenerRepo.findBySlug(slug);
    }
}