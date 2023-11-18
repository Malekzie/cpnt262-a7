<script>
  export let title = "dragon name";
  export let species = "dragon species"
  export let age = "dragon age"
</script>


<section class="mx-10 mt-32 cursor-default rounded-xl bg-surface-500">
  <div class="text-center">
      <p class="text-5xl">{title}</p>
      <div class="flex p-5 mt-10 justify-evenly">
        <p>{species}</p>
        <p>{age}</p>
      </div>
  </div>
</section>