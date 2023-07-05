import { createRouter, createWebHistory } from 'vue-router'
import Calendar from './components/Calendar.vue'
import Directives from './components/Directives.vue'


const routes = [
    { path: '/calendar', component: Calendar },
    { path: '/directives', component: Directives }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;