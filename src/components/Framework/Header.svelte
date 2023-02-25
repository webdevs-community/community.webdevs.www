<script lang="ts">
  // Imports
  import Logo from "@components/framework/Logo.svelte"

  // Export Props
  export let cRoot: string = "";

  // Internal
  const cc: ICompClasses = {
    root: "w-64 shrink-0 bg-pink-200",
    rootCustom: cRoot,
  };

  const twClasses = `${cc.root} ${cc.rootCustom}`;

</script>

<header class={twClasses}>
  <Logo/>
</header>
