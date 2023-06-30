import { createRouter, createWebHistory } from 'vue-router'
import Calendar from './components/Calendar.vue'


const routes = [
    { path: '/calendar', component: Calendar }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;