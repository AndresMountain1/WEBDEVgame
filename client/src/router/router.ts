import { createRouter, createWebHistory } from "vue-router";
import IaVsIa from "@/components/fights/IaVsIa.vue";
import IaVsHuman from "@/components/fights/IaVsHuman.vue";
import LoginComponentVue from "@/components/login/LoginComponent.vue";

const routes = [
    {
        name :'Login',
        path : '/',
        component : LoginComponentVue
    }, {
        name : 'IaVsIa',
        path : '/IaVsIa',
        component : IaVsIa
    }, {
        name : 'IaVsHuman',
        path : '/IaVsHuman',
        component : IaVsHuman
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;