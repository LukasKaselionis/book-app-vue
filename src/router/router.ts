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
                requiresAuth: false
            },
        },
        {
            path: "/forgot-password",
            name: "forgot-password",
            component: (): Promise<Component> => import("@/pages/ForgotPasswordView.vue"),
            meta: {
                requiresAuth: false
            },
        },
        {
            path: "/new-password/:hash",
            name: "new-password",
            component: (): Promise<Component> => import("@/pages/NewPasswordView.vue"),
            meta: {
                requiresAuth: false
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
