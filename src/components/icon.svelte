<script>
  export let perLink;
  export let profileName;

  console.log(perLink)

  function handleClick(event){
    gtag('event', 'view_item', {
      'event_category' : 'Links',
      'event_label' : `Visit ${perLink.name} link`
    });
  }
</script>

<div class="p-2" on:click={handleClick}>
  <a class="w-full flex flex-col justify-center items-center" href={perLink.url} target="_blank" rel="noopener" >
    <img
      loading="lazy"
      class="w-1/2 dark:invert"
      src={perLink.iconUrl}
      alt={`${perLink.name} ${profileName}`}
    >
    <h3 class="my-2 font-bold text-2xl dark:text-white">{perLink.name}</h3>
  </a>
</div>