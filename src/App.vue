<script setup>
import { onBeforeMount, onBeforeUnmount } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import DefaultLayout from '@/Core/layouts/DefaultLayout.vue'
const init = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

onBeforeMount(() => {
    init();
    window.addEventListener('resize', init);
})

onBeforeUnmount(() => {
    init();
    window.addEventListener('resize', init);
})

</script>

<template>
    <DefaultLayout>
        <RouterView />
    </DefaultLayout>
</template>