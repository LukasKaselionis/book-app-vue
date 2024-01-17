<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import BookBuilder from "@/builder/BookBuilder";
    import BookInterface from "@/interfaces/BookInterface";

    const books = ref<BookInterface[]>([]);
    const Book = new BookBuilder();

    onMounted(() => {
        getBookList();
    });

    const getBookList = async (): Promise<void> => {
        books.value = await Book.list();
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
                :src="book.imagePath"
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
