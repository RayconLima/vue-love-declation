<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(group, index) in imageGroups" :key="index" class="grid gap-4">
            <div v-for="(image, imgIndex) in group" :key="imgIndex">
                <img 
                    class="h-200 max-w-full rounded-lg animate-fade-in-up" 
                    :src="image.src" :alt="image.alt" :title="image.alt">
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import images from '@/utils/images.json'; // Importe o arquivo JSON

export default {
    name: "Gallery",
    setup() {  
        const route = useRoute();
        const imageGroups = ref([]);

        onMounted(() => {
            console.log(images)
            document.title = route.meta.title || 'Galeria';

            // Organize as imagens em grupos de 3 para cada coluna
            const groupedImages = [];
            const chunkSize     = 3;
            for (let i = 0; i < images.gallery.length; i += chunkSize) {
                groupedImages.push(images.gallery.slice(i, i + chunkSize));
            }
            imageGroups.value = groupedImages;

            setInterval(() => {
                images.gallery.forEach((image) => {
                    image.isVisible = !image.isVisible;
                });
            }, 5000);
        });

        return {
            imageGroups,
        };
    }   
}
</script>
