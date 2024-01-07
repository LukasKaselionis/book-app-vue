import { Component } from "vue";
import {
    createRouter,
    createWebHistory,
    Router
} from "vue-router";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:pathMatch(.*)*",
            redirect: "/login"
        },
        {
            path: "/login",
            name: "login",
            component: (): Promise<Component> => import("@/pages/LoginView.vue"),
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/book",
            name: "book-list",
            component: (): Promise<Component> => import("@/pages/BookView/IndexView.vue"),
            meta: {
                requiresAuth: true
            },
        },
    ]
});

export default router;
