<template>
  <fwb-carousel :pictures="pictures" class="mb-2" />
</template>
<script setup lang="ts">
  import { FwbCarousel } from 'flowbite-vue';

  const pictures = [
  {src: '/images/women-and-moon.webp', alt: 'Image 1'},
  {src: 'https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 2'},
  {src: 'https://images.unsplash.com/photo-1486916856992-e4db22c8df33?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D', alt: 'Image 3'},
]
</script>