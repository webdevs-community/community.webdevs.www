<script lang="ts">

    // Export Props
    export let cRoot: string = "";
    export let navItems = [];

    // Internal
    const cc: ICompClasses = {
        root: "pl-2",
        rootCustom: cRoot,
    };

    const twClasses = `${cc.root} ${cc.rootCustom}`;

</script>

<!-- create navigation with navItems but don't output the last level -->
<ul class={twClasses}>
    {#each navItems as navItem}
        {#if navItems.some(item => item.children.length > 0)}
            <li>
                {#if navItem.children}
                    <a href="{navItem.slug}">{navItem.title}</a>
                    <svelte:self navItems={navItem.children}/>
                {:else}
                    <a href="{navItem.slug}">{navItem.title}</a>
                {/if}
            </li>
        {/if}
    {/each}
</ul>
