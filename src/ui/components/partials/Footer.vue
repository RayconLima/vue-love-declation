<template>
<footer class="bg-[--color-secondary] rounded-lg shadow mt-2 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-[--color-background] sm:text-center dark:text-gray-400">
            © 2024 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <router-link class="text-[--color-background] hover:underline me-4 md:me-6" :to="{ name: 'home'}">Página Inicial</router-link>
            </li>
            <li>
                <router-link class="text-[--color-background] hover:underline me-4 md:me-6" :to="{ name: 'about'}">Sobre nós</router-link>
            </li>
            <li>
                <router-link class="text-[--color-background] hover:underline me-4 md:me-6" :to="{ name: 'gallery'}">Galeria</router-link>
            </li>
            <li>
                <router-link class="text-[--color-background] hover:underline me-4 md:me-6" :to="{ name: 'count_regressive'}">Contagem Regressiva</router-link>
            </li>
        </ul>
    </div>
</footer>
</template>