import team from "../schemas/team"
import home from "../schemas/home"
import {defineCollection} from "astro:content";

const collectionTeam = defineCollection(team);
const collectionHome = defineCollection(home);

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  team: collectionTeam,
  home: collectionHome,
};
