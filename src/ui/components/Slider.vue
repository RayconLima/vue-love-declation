<template>
  <div id="default-carousel" class="relative w-full mb-2" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <div v-for="(image, index) in images" :key="index" class="hidden duration-900 ease-in-out" data-carousel-item>
        <img
          :src="image.src"
          @load="checkImageLoaded"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="Image"
        />
      </div>
    </div>

    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[--color-secondary] dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-[--color-primary] dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[--color-secondary] dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg class="w-4 h-4 text-[--color-primary] dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>

  <!-- Loading message -->
  <!-- <div v-if="isLoading" class="flex justify-center items-center h-96">
    <Spinner :loading="isLoading" />
  </div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Spinner from '@/ui/components/Spinner.vue'

const images = ref([
  { src: '/images/women-and-moon.webp' },
  { src: 'https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1486916856992-e4db22c8df33?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D' },
  { src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww' },
]);

const isLoading = ref(true);

onMounted(() => {
  let imagesLoaded = 0;
  
  // Função que verifica se todas as imagens foram carregadas
  const checkImagesLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === images.value.length) {
      isLoading.value = true;
    }
  };

  // Itera sobre cada imagem e verifica o carregamento
  images.value.forEach(image => {
    const img   = new Image();
    img.src     = image.src;
    img.onload  = checkImagesLoaded;
    img.onerror = checkImagesLoaded; // Se houver erro, também conta como "carregada"
  });
});
</script>