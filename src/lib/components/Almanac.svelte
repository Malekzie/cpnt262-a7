  <script>
    import { dragonData } from "$lib/index.js";
    let currentImageIndex = 0;

    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % dragonData.length;
    }

    function previousImage() {
      currentImageIndex = (currentImageIndex - 1 + dragonData.length) % dragonData.length;
    }
  </script>

  <section class="h-full px-10 pt-10">
    <div class="flex justify-between">
      <button on:click={previousImage} type="button" class="btn variant-filled rounded-xl hover:scale-110">Previous</button>
      <h2 class="text-5xl">Dragon Almanac</h2>
      <button on:click={nextImage} type="button" class="btn variant-filled rounded-xl hover:scale-110">Next</button>
    </div>
    <div class="flex mt-10 bg-white rounded-md bg-opacity-30">
      <img class="w-auto m-2 rounded-lg max-h-96" src="{dragonData[currentImageIndex].src}" alt="{dragonData[currentImageIndex].name}" />
      <div class="w-full m-3 bg-white rounded-lg card-footer bg-opacity-30">
        <div class="card-header">
          <h3 class="text-center text-5xl font-bold {dragonData[currentImageIndex].gradient}">{dragonData[currentImageIndex].name}</h3>
        </div>
        <p class="text-gray-500 back">{dragonData[currentImageIndex].description}</p>
        <p>hey</p>
      </div>
    </div>
  </section>


