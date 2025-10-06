<script lang="ts">
  import "../app.css";
  import logo from "$lib/assets/favicon.svg"
  import { Button, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  const slideParams = { delay: 0, duration: 500};
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;

  import type { PageData } from './$types';
  export let data: PageData;
</script>
<head>
  <title>DTEK Kvittoredovisning</title>
</head>

<nav>
  <Navbar class="bg-primary-600 w-full">
    <NavBrand href="/">
      <img src={logo} class="h-20" alt="Logo" />
      <span class="invisible sm:visible self-center text-2xl font-semibold whitespace-nowrap text-white ">Datateknologsektionens Kvittoredovisning</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl {activeUrl} slideParams={slideParams}>
      <NavLi href="/">Home</NavLi>
      {#if data.user}
        <NavLi href="/clickers">Clickers</NavLi>
        <NavLi href="/stats">Statistics</NavLi>
        {#if data.user.id === 1}
          <NavLi class="cursor-pointer">
            Admin<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
          </NavLi>
          <Dropdown class="w-44 z-20">
            <DropdownItem href="/admin/clickers">Clickers</DropdownItem>
            <DropdownItem href="/admin/items">Items</DropdownItem>
            <DropdownItem href="/admin/users">Users</DropdownItem>
          </Dropdown>
        {/if}
      {/if}
      {#if !data.user}
        <NavLi href="/login">Login</NavLi>
      {:else}
        <NavLi>Logged in as {data.user.name}</NavLi>
        <NavLi>	
          <form method="POST" action="/?/logout">
            <Button outline color="blue" type="submit" name="logout" value="true" size="xs" on:click> Log out</Button>
          </form>
        </NavLi>
      {/if}
    </NavUl>
  </Navbar>
</nav>
<div class="flex flex-col items-center min-h-1/10">
  
  <div class="flex-grow rounded-xl backdrop-blur-sm bg-white/30 h-min w-min p-5 m-5">
    <slot />
  </div>
  
</div>
