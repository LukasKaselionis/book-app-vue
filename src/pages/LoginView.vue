<script setup lang="ts">
    import { ref } from "vue";
    import { useFetch } from "@/composables/useFetch";
    import { useRouter } from "vue-router";
    import Form from "@/components/Form.vue";

    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const submit = async (): Promise<void> => {
        const response: { data: { token: string } } = await useFetch( {
            url: "/login",
            method: "POST",
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        });
        if (response && response.data && response.data.token) {
            localStorage.setItem("token", response.data.token);
            await router.push({ name: "book-list" });
        }
    };
</script>

<template>
    <div class="h-dvh flex flex-col justify-center items-center">
        <Form
            class="bg-gray-800 p-10"
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
