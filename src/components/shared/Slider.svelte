<script>
  import { API_BASE_URL } from '../../config/api';
  import Carousel from '@beyonk/svelte-carousel';
  import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
  export let slidersEntry = [];
</script>

<Carousel perPage={1} autoplay={5000} class="px-3 md:px-0">
  <span class="control" slot="left-control">
    <ChevronLeftIcon />
  </span>
  <div class="slide-content">
    <a
      target="_self"
      href="https://www.uninpahu.edu.co/admisiones-y-matricula/proceso-de-inscripcion/"
    >
      <img
        class="w-full"
        src="{API_BASE_URL}{slidersEntry[0].Image1[0].url}"
        alt="img"
      />
    </a>
  </div>
  <div class="slide-content">
    <a
      target="_self"
      href="https://www.uninpahu.edu.co/admisiones-y-matricula/proceso-de-inscripcion/"
    >
      <img
        class="w-full"
        src="{API_BASE_URL}{slidersEntry[0].Image2[0].url}"
        alt="img"
      />
    </a>
  </div>
  <div class="slide-content">
    <a
      target="_self"
      href="https://www.uninpahu.edu.co/admisiones-y-matricula/proceso-de-inscripcion/"
    >
      <img
        class="w-full"
        src="{API_BASE_URL}{slidersEntry[0].Image3[0].url}"
        alt="img"
      />
    </a>
  </div>
  <span class="control" slot="right-control">
    <ChevronRightIcon />
  </span>
</Carousel>
