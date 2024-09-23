<template>
    <button class="px-2 py-1 font-bold bg-[--accent] text-white rounded hover">{{ title }}</button>
</template>
<script>
export default {
    props: {
        title: ''
    }
}
</script>