<script setup lang="ts">

    import Form from "@/components/Form.vue";
    import { useRouter } from "vue-router";
    import { ref } from "vue";
    import { useFetch } from "@/composables/useFetch";

    const router = useRouter();
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");

    const submit = async (): Promise<void> => {
        const response: { data: { message: string } } = await useFetch( {
            url: "/register",
            method: "POST",
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value
            })
        });
        if (response && response.data && response.data.message) {
            // show message
            await router.push({ name: "login" });
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
                for="firstName"
                class="text-white font-medium"
            >
                <span>First name:</span>
                <strong><span aria-label="required">*</span></strong>
            </label>
            <input
                id="firstName"
                v-model="firstName"
                class="outline-0 text-black"
                type="text"
            >
            <label
                for="lastName"
                class="text-white font-medium"
            >
                <span>Last name:</span>
                <strong><span aria-label="required">*</span></strong>
            </label>
            <input
                id="lastName"
                v-model="lastName"
                class="outline-0 text-black"
                type="text"
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
