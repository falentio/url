export type Shorten = {
    id: string;
    slug: string;
    target: string;
    createdAt: Date;
    updatedAt: Date;
}

export type ShortenerRepo = {
    create(slug: string, target: string): Promise<Shorten>
    findBySlug(slug: string): Promise<Shorten | null>
}