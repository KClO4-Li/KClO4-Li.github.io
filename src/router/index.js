import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import LabReports from '../views/LabReports.vue'

const routes = [
{
path: '/',
component: Home
},

{
path: '/lab',
component: LabReports
}
]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router
