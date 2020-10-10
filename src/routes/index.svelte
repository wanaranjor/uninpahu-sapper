<script context="module">
  import {
    getNews,
    getSliders,
  } from '../components/content/services/services.js';
  export async function preload() {
    const newsEntry = await getNews();
    const slidersEntry = await getSliders();
    return { newsEntry, slidersEntry };
  }
</script>

<script>
  import Slider from '../components/shared/Slider.svelte';
  import News from '../components/content/ui/News.svelte';
  export let newsEntry;
  export let slidersEntry;
</script>

<svelte:head>
  <title>Uninpahu</title>
</svelte:head>

<div class="container mx-auto">
  <Slider {slidersEntry} />
  <News {newsEntry} />
</div>
