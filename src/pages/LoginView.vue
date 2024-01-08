<script setup lang="ts">
    import { ref } from "vue";
    import Form from "@/components/Form.vue";
    import { useFetch } from "@/composables/useFetch";
    import { useRouter } from "vue-router";

    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const submit = async (): Promise<void> => {
        const response = await useFetch("/login", {
            method: "POST",
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        });
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            await router.push({ name: "book-list" });
        }
    };
</script>

<template>
    <div class="bg-gray-800 p-10">
        <Form
            @submit="submit"
        >
            <label
                for="email"
                class="text-white font-medium"
            >
                <span>Email:</span>
                <strong><span aria-label="required">*</span></strong>
            </label>
            <input
                id="email"
                v-model="email"
                class="outline-0 text-black"
                type="email"
            >
            <label
                for="password"
                class="text-white"
            >
                <span>Password:</span>
                <strong><span aria-label="required">*</span></strong>
            </label>
            <input
                id="password"
                v-model="password"
                class="outline-0 text-black"
                type="password"
            >
            <button
                class="bg-emerald-600 hover:bg-emerald-800 transition-all text-white mt-2"
                type="submit"
            >
                Prisijungti
            </button>
        </Form>
    </div>
</template>

<style scoped>

</style>
