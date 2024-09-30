<script>
export default {
  metaInfo: {
    title: 'Default App Title',
    titleTemplate: '%s | vue-meta Example App',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'An example Vue application with vue-meta.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  setup() {
    
  }
}
</script>

<template>
  <div id="main" class="bg-[--color-background]">
    <router-view />
  </div>
</template>

<style>
#main {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/ui/assets/images/sunflower.webp');
  /* background-image: url('@/ui/assets/images/sunflower.webp'); */
  background-size: 250px 250px;
  background-repeat: repeat;
}
</style>