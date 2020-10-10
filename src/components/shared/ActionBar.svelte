<script>
  import { FacebookIcon } from 'svelte-feather-icons';
  import { TwitterIcon } from 'svelte-feather-icons';
  import { YoutubeIcon } from 'svelte-feather-icons';
  import { InstagramIcon } from 'svelte-feather-icons';
</script>

<nav class="px-3 pt-3 text-orange-400">
  <div class="flex flex-col justify-end md:flex-row">
    <ul class="flex flex-row items-center">
      <li class="px-1">
        <a
          href="http://www.outlook.com/uninpahu.edu.co"
          target="_blank"
          class="hover:bg-gray-300 p-2"
        >
          Email
        </a>
      </li>
      <li class="px-1">
        <a
          href="http://www.outlook.com/uninpahu.edu.co"
          target="_blank"
          class="hover:bg-gray-300 p-2"
        >
          Investigación
        </a>
      </li>
      <li class="px-1">
        <a
          href="http://www.outlook.com/uninpahu.edu.co"
          target="_blank"
          class="hover:bg-gray-300 p-2"
        >
          Uninpahu Radio
        </a>
      </li>
    </ul>
    <ul class="flex flex-row items-center">
      <li class="px-2">
        <FacebookIcon size="1.5x" />
      </li>
      <li class="px-2">
        <TwitterIcon size="1.5x" />
      </li>
      <li class="px-2">
        <YoutubeIcon size="1.5x" />
      </li>
      <li class="px-2">
        <InstagramIcon size="1.5x" />
      </li>
    </ul>
  </div>
</nav>
