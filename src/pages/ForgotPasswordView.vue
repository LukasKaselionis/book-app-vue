<script setup lang="ts">
    import { ref } from "vue";
    import { useFetch } from "@/composables/useFetch";
    import Form from "@/components/Form.vue";

    const email = ref("");

    const submit = async (): Promise<void> => {
        const response: { data: { message: string } } = await useFetch( {
            url: "/forgot-password",
            method: "POST",
            body: JSON.stringify({
                email: email.value,
            })
        });
        if (response && response.data && response.data.message) {
            // show message
            console.log(response.data.message);
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
                class="text-white"
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
            <button
                class="bg-emerald-600 hover:bg-emerald-800 transition-all text-white mt-2"
                type="submit"
            >
                Patvirtinti
            </button>
        </Form>
    </div>
</template>

<style scoped>

</style>
