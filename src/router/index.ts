import { createRouter, createWebHistory } from 'vue-router'
import TaskColumnView from '@/views/TaskColumnView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'TaskVue',
            component: TaskColumnView
        }
    ]
})

export default router
