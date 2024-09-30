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