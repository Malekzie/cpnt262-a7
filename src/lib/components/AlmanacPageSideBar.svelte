<script>
  import { dragonData } from "$lib/index.js"

  </script>


<section class="mt-[50%]">
  <h1 class="pb-2 ml-5 text-3xl border-solid">Dragon Almanac</h1>
      <div class="h-screen border-t border-r border-black border-solid dark:border-white">
          <ul class="w-full gap-10 py-2 text-center btn-group-vertical">
              <li><button type="btn" class="w-full btn indus">Indus</button></li>
              <li><button type="btn" class="w-full btn markona">Markona</button></li>
              <li><button type="btn" class="w-full btn terra">Terra</button></li>
              <li><button type="btn" class="w-full btn mizzarus">Mizzarus</button></li>
              <li><button type="btn" class="w-full btn gaia">Gaia</button></li>
              <li><button type="btn" class="w-full btn izzy">Izz'kal</button></li>
              <li><button type="btn" class="w-full btn puff">Puff</button></li>
              <li><button type="btn" class="w-full btn slade">Slade</button></li>
              <li><button type="btn" class="w-full btn ao">Ao Sol</button></li>
          </ul>
      </div>
</section>

<style lang="postcss">
	.btn{
		@apply bg-gradient-to-r from-slate-400 via-zinc-300 to-gray-500 bg-clip-text text-transparent;
		animation: myAnim 2s ease 0s infinite normal forwards;
	}
    @keyframes myAnim {
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(1);
	}
}
</style>