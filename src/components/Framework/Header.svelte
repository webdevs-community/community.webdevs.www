<script lang="ts">
  // Imports
  import SiDiscord from "svelte-icons-pack/si/SiDiscord";
  import Logo from "@components/Framework/Logo.svelte"
  import Link from "@components/Text/Link.svelte";


  // Export Props
  export let cRoot: string = "";

  // Internal
  const cc: ICompClasses = {
    root: "h-32 bg-background/50 fixed top-4 inset-x-0 z-50 backdrop-blur-sm flex items-center",
    rootCustom: cRoot,
    inner: 'h-24 w-full container mx-auto  flex items-center justify-between',
    logo: 'w-16 h-16 text-white'
  };

  const twClasses = `${cc.root} ${cc.rootCustom}`;

</script>

<header class={twClasses}>
  <div class={cc.inner}>
    <a href="/">
      <Logo class={cc.logo} />
    </a>
    <Link
      class="-indent-96 !gap-0 sm:!gap-3 sm:indent-0"
      target="_blank"
      href="https://discord.com/invite/66J8zgj2DE"
      text="Discord"
      icon={SiDiscord}
    />
  </div>
</header>
