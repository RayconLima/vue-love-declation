<template>
    <Slider />
    <card>
        <div class="container mx-auto flex flex-wrap justify-center md:justify-between lg:p-12">
            <div class="w-full md:w-1/2 xl:w-1/3">
                <h1 class="text-3xl text-[--color-secondary] font-bold mb-4">Sobre Nós</h1>
                <p class="text-lg mb-6">Aqui vai um pouco da nossa história...</p>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3">
                <ul>
                    <li class="text-3xl text-[--color-secondary] font-bold mb-4">01. Um ano de amizade</li>
                    <li class="text-3xl text-[--color-secondary] font-bold mb-4">02. 8 meses de relacionamento</li>
                    <li class="text-3xl text-[--color-secondary] font-bold mb-4">03. Temos uma filha adotiva</li>
                </ul>
            </div>
        </div>
    </card>
</template>
<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Card from '../components/Card.vue';
import Slider from '../components/Slider.vue';
export default {
    components: {
        Card,
        Slider
    },
    setup() {  
        const route = useRoute();

        onMounted(() => {
            document.title = route.meta.title || 'Sobre nós';
        })
    }   
}
</script>