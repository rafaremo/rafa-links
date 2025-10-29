<script>
  export let perLink;
  export let profileName;

  function handleClick(event){
    gtag('event', 'view_item', {
      'event_category' : 'Links',
      'event_label' : `Visit ${perLink.name} link`
    });
  }
</script>

<div class="p-2" on:click={handleClick} on:keydown={handleClick} role="button" tabindex="0">
  <a class="w-full flex flex-col justify-center items-center text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300" href={perLink.url} target="_blank" rel="noopener" >
    <img
      loading="lazy"
      class="w-1/2 dark:invert"
      src={perLink.iconUrl}
      alt={`${perLink.name} ${profileName}`}
    >
    <h3 class="my-2 font-bold text-2xl">{perLink.name}</h3>
  </a>
</div>