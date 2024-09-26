<script setup lang="ts">
import Card from '@/ui/components/Card.vue'
import Spinner from '@/ui/components/Spinner.vue'
import { ref, defineAsyncComponent } from 'vue';
const Slider    = defineAsyncComponent(() => import('@/ui/components/Slider.vue'))
const isLoaded  = ref(false)

const onImgLoad = () => {
  isLoaded.value = true; // Marca como carregada
};
</script>

<template>
  <Suspense>
    <Slider duration="duration-500" />
    <template #fallback>
      <Spinner :loading="!isLoaded" />
    </template>
  </Suspense>
  <main>
    <Card>
      <div class="flex justify-between">
        <div class="flex items-center">
          <article>
            <header>
              <h1>Uma Jornada Inesquecível</h1> 
            </header>
            <main>
              <span>Descubra uma história de amor que vai te emocionar. </span>
              <router-link class="px-2 py-1 font-bold text-white rounded hover bg-[--color-secondary] text-[--color-background]" :to="{ name: 'about'}">Começar a Jornada</router-link>
            </main>
          </article>
        </div>
      
        <img v-lazy="'@/ui/assets/images/man_and_heart.png'" src="@/ui/assets/images/man_and_heart.png" @load="onImgLoad" class="size-1/3" />
      </div>
    </Card>
    <div class="relative pt-[56.25%] w-full md:w-full sm:3/5">
      <iframe class="absolute top-0 left-0 rounded-lg w-full h-full" 
              src="https://www.youtube.com/embed/O0B54HlcpI0?si=4JwQKz4mjPHg2JXD" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
      </iframe>
    </div>
  </main>
</template>
