<script context="module">
  import { getNewById } from '../../components/content/services/services';
  export async function preload(page) {
    const { slug } = page.params;
    const newId = await getNewById(slug);
    return { newId };
  }
</script>

<script>
  import marked from 'marked';
  import { API_BASE_URL } from '../../config/api';
  export let newId;
  const markdown = marked(newId.Body);
</script>

<div class="container mx-auto">
  <div class="border-t-4 border-b-4 border-orange-400">
    <h1
      class="text-3xl p-5 text-center text-gray-700 font-extrabold leading-tight"
    >
      {newId.Title}
    </h1>
  </div>
  <div class="flex flex-row my-5">
    <div class="w-1/12">Redes</div>
    <div class="w-11/12 flex flex-col justify-center items-center">
      <img src="{API_BASE_URL}{newId.Photo[0].url}" alt="img" class="mb-6" />
      <p class="whitespace-pre-wrap">
        {@html markdown}
      </p>
    </div>
  </div>
</div>
