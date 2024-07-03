import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/column'
        },
        {
            path: '/column',
            name: 'TaskVue',
            component: () => import('@/views/TaskColumnView.vue')
        },
        {
            path: '/list',
            name: 'ListVue',
            component: () => import('@/views/TaskListView.vue')
        }
    ]
})

export default router
