<script setup lang="ts">
    import { useRouter } from "vue-router";
    import { onMounted, ref } from "vue";
    import { useFetch } from "@/composables/useFetch";
    import Form from "@/components/Form.vue";

    const router = useRouter();
    const password = ref("");
    const repeatPassword = ref("");
    const passwordResetHash = ref("");

    onMounted(() => {
        if (router.currentRoute.value.params.hash) {
            passwordResetHash.value = String(router.currentRoute.value.params.hash);
        }
    });

    const submit = async (): Promise<void> => {
        const response: { data: { message: string } } = await useFetch( {
            url: `/set-new-password/${passwordResetHash.value}`,
            method: "PUT",
            body: JSON.stringify({
                password: password.value,
                repeatPassword: repeatPassword.value
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
            <label
                for="repeatPassword"
                class="text-white"
            >
                <span>Repeat password:</span>
                <strong><span aria-label="required">*</span></strong>
            </label>
            <input
                id="repeatPassword"
                v-model="repeatPassword"
                class="outline-0 text-black"
                type="password"
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
