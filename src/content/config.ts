import team from "../schemas/team"
import globals from "../schemas/globals"
import {defineCollection} from "astro:content";

const collectionTeam = defineCollection(team);
const collectionGlobals = defineCollection(globals);

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  team: collectionTeam,
  globals: collectionGlobals,
};


