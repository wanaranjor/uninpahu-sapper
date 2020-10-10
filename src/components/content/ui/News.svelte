<script>
  import { API_BASE_URL } from '../../../config/api';
  export let newsEntry = [];
</script>

<div class="">
  <h1 class="font-bold text-4xl text-gray-700 py-5 px-3 md:px-0">Noticias</h1>
  <div class="grid grid-col-1 md:grid-cols-4 gap-5 px-5">
    {#each newsEntry as entry}
      <div class="flex flex-col">
        <a href="/news/{entry.id}">
          <img
            src="{API_BASE_URL}{entry.Photo[0].formats.small.url}"
            alt="img"
          />
          <span class="text-xs text-gray-500 py-2">{entry.published_at}</span>
          <p class="leading-tight hover:text-orange-500">{entry.Title}</p>
        </a>
      </div>
    {/each}
  </div>
</div>
