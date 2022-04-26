import { createRouter, createWebHistory } from "vue-router";
import IaVsIa from "@/components/fights/IaVsIa.vue";
import IaVsHuman from "@/components/fights/IaVsHuman.vue";

const routes = [
    {
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