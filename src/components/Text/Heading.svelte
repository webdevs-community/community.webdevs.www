<script lang="ts">
  // Export Props
  export let text: string;
  export let tag = "h2";
  export let cRoot: string = "";
  export let vSize: "mega" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h2";

  // Internal
  const cc: ICompClasses = {
    root: "font-bold",
    rootCustom: cRoot,
    size: {
      mega: "text-6xl",
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
  };

  const twClasses = `${cc.root} ${cc.rootCustom} ${cc.size[vSize]}`;
</script>

{#if text}
  <svelte:element this={tag} class={twClasses}>
    {text}
  </svelte:element>
{/if}
