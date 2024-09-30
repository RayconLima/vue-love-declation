<template>
    <h1>Sobre nós</h1>
</template>
<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
export default {
    setup() {  
        const route = useRoute();

        onMounted(() => {
            document.title = route.meta.title || 'Sobre nós';
        })
    }   
}
</script>