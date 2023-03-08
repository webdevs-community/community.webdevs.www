<script lang="ts">
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import { SITE_URL } from "@config/constants";
  import _default from "svelte-icons-pack/si/SiDiscord";

  // Export Props
  export let href: string | null = null;
  export let text: string;
  export let target: '_blank' | '' = ''
  export let icon: string | _default;
  export let cRoot: string = "";
  export let vSize: string = "md";
  export let vIconSize: string = "md";
  export let vColor: string = "primary";
  export let vStyle: string = "button";

  let className = ''
  export { className as class }

  function setFinalUrl(href: string | null) {
    if (href && !href.includes("://")) {
      return new URL(href, SITE_URL);
    } else {
      return href;
    }
  }

  // Internal
  const tag: "button" | "a" = href ? "a" : "button";
  const cc: ICompClasses = {
    root: "font-bold inline-flex justify-center items-center gap-3 transition-all whitespace-pre",
    rootCustom: cRoot,
    size: {
      sm: "px-2 py-1",
      md: "px-4 py-2",
      lg: "px-6 py-3",
    },
    iconSize: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-8 h-8",
    },
    color: {
      primary: "bg-pink hover:bg-purple text-white",
      secondary: "bg-purple hover:bg-pink text-white",
      gray: "bg-line text-white",
    },
    style: {
      button: "rounded",
      pill: "rounded-full",
      inline: "",
    },
  };

  const twClasses = `${cc.root} ${cc.rootCustom} ${cc.size[vSize]} ${cc.color[vColor]} ${cc.style[vStyle]} ${className}`;
</script>

{#if text}
  <svelte:element this={tag} href={setFinalUrl(href)} target={target} class={twClasses}>
    {#if icon}<Icon className="fill-current {cc.iconSize[vIconSize]}" src={icon} />{/if}{text}
  </svelte:element>
{/if}
