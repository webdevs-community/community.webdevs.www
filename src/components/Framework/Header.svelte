<script lang="ts">
    // Imports
    import Logo from "@components/framework/Logo.svelte"
    import Navigation from "@components/framework/Navigation.svelte"

    // Export Props
    export let cRoot: string = "";
    export let navItems = [];

    // Internal
    const cc: ICompClasses = {
        root: "w-64 shrink-0 bg-pink-200",
        rootCustom: cRoot,
    };

    const twClasses = `${cc.root} ${cc.rootCustom}`;

</script>

<header class={twClasses}>
    <Logo/>
    <Navigation navItems={navItems}/>
</header>