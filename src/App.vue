<script setup lang="ts">
</script>

<template>
    <header>
        <a href="/">Home</a>
        <a href="/book">Book</a>
    </header>

    <main>
        <RouterView />
    </main>
</template>

<style scoped>
header {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
    gap: 15px;
    line-height: 1.5;
}
</style>
