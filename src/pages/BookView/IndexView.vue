<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { useFetch } from "@/composables/useFetch";

    const books = ref([]);
    const api_url = "http://localhost:3004";

    onMounted(() => {
        getBookList();
    });

    const getBookList = async (): Promise<void> => {
        const response = await useFetch("/book", {
            method: "GET"
        });

        if (response) {
            books.value = response.data.books;
        }
    };
</script>

<template>
    <div>
        <div
            v-for="book in books"
            :key="book.title"
            style="border: 1px solid white; min-height: 300px; width: 300px;"
        >
            <h1>{{ book.title }}</h1>
            <p>{{ book.description }}</p>
            <img
                :src="`${api_url}/${book.imagePath}`"
                alt=""
                height="250"
                width="250"
            >
            <button type="button">
                Redaguoti
            </button>
            <button type="button">
                Istrinti
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
