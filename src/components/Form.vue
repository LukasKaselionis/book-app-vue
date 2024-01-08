<script setup lang="ts">
    const emit = defineEmits(["submit"]);

    const submit = (): void => {
        setTimeout(() => {
            emit("submit");
        }, 1000);
    };
</script>

<template>
    <form
        class="flex flex-col gap-1.5"
        @submit.prevent="submit"
    >
        <slot />
    </form>
</template>

<style scoped>

</style>
