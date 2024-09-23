<template>
    <div>
        <Navbar />

        <div class="p-2">
            <div class="rounded-lg">
                <RouterView />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup lang="ts">
import Navbar from '@/ui/components/partials/Navbar.vue';
import Footer from '@/ui/components/partials/Footer.vue';
</script>