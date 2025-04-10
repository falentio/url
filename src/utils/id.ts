const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
const VOWELS = 'aeiou';

export function generateSlug() {
    let slug = ""
    slug += CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
    slug += VOWELS[Math.floor(Math.random() * VOWELS.length)];
    slug += CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
    slug += VOWELS[Math.floor(Math.random() * VOWELS.length)];
    slug += CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
    slug += VOWELS[Math.floor(Math.random() * VOWELS.length)];
    slug += CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
    slug += VOWELS[Math.floor(Math.random() * VOWELS.length)];
    if (Math.random() < 0.5) {
        const n = Math.random() * 10 | 0;
        slug += n.toString().repeat(Math.random() * 4 | 0);
        return slug
    } 
    const n = Math.random() * 10 | 0;
    const pow = Math.random() * 4 | 0
    slug += (n * Math.pow(10, pow)).toString();
    return slug
}