import type {CollectionEntry} from "astro:content";

interface INavItem {
    title: string;
    slug: string;
    path: string[];
}

interface INavItemFinal {
    title: string;
    slug: string;
    children: INavItem[];
}

export const createNav = (items: CollectionEntry<"rezepte">[]) => {
    // Reformat data
    const ITEMS = items.reduce((current, item) => {
        const SEGMENTS = item.slug.split("/") || [];
        current.push({
            title: item.data.title,
            slug: SEGMENTS.length > 1 ? SEGMENTS.pop() : SEGMENTS[0],
            path: SEGMENTS,
        } as INavItem);
        return current;
    }, [] as INavItem[]);


    console.log(ITEMS)

    const nestedNav: INavItemFinal[] = [];
    ITEMS.forEach(item => {
        let currentLevel = nestedNav;
        let path = '';
        item.path.forEach(pathItem => {
            path += `/${pathItem}`;
            let existingItem = currentLevel.find(navItem => navItem.slug === path);
            if (!existingItem) {
                existingItem = { title: pathItem, slug: path, children: [] };
                currentLevel.push(existingItem);
            }
            currentLevel = existingItem.children;
        });
        currentLevel.push({ title: item.title, slug: `${path}/${item.slug}`, children: [] });
    });
    return nestedNav;
};
