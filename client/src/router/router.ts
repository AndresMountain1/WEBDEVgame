import { createRouter, createWebHistory } from "vue-router";
import IaVsIa from "@/components/fights/IaVsIa.vue";
import IaVsHuman from "@/components/fights/IaVsHuman.vue";
import App from "@/App.vue";
import DropZoneIa from "@/components/dropzone/DropZone.vue";

const routes = [
    {
        name : 'IaVsIa',
        path : '/IaVsIa',
        component : IaVsIa,
    }, {
        name : 'IaVsHuman',
        path : '/IaVsHuman/',
        component : IaVsHuman
    }, {
        name : 'DropZoneIa',
        path : '/DropZoneIa',
        component : DropZoneIa
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;