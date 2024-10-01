<template>
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
      
        <img src="@/ui/assets/images/man_and_heart.png" @load="onImgLoad" class="size-1/3" />
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
<script>
import Card from '@/ui/components/Card.vue'
import Slider from '@/ui/components/Slider.vue'
import { APP_NAME } from '@/utils/config';
import { ref, onMounted } from 'vue';
const isLoaded  = ref(false)
import { useRoute } from 'vue-router';
export default {
  components: {
    Card,
    Slider
  },
  setup() {
    const route = useRoute();
    const onImgLoad = () => {
      isLoaded.value = true;
    };

    onMounted(() => {
      document.title = route.meta.title || APP_NAME;
    })

    return {
      onImgLoad,
      isLoaded
    }
  }
}

</script>