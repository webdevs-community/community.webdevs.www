import rezepte from "../schemas/rezepte";
import { defineCollection } from "astro:content";

const collectionRezepte = defineCollection(rezepte);

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  rezepte: collectionRezepte,
};
