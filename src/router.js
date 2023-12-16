import { createRouter, createWebHistory } from 'vue-router'
import contentObjects from '@/components/contentPage/contentOrg.vue'

const routes = [
    { path: '/content/:id/:name', component: contentObjects },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;