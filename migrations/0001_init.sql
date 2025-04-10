-- Migration number: 0001 	 2025-04-09T01:33:38.103Z
CREATE TABLE IF NOT EXISTS "shortens" (
    id TEXT NOT NULL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    target TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAM
);

CREATE INDEX IF NOT EXISTS "shortens_slug_index" ON "shortens" (slug);