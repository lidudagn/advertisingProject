import { createRouter, createWebHistory } from 'vue-router'
import signin from '../view/signin.vue'
import homePage from '../view/homePage.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: homePage
          },
      {
        path: '/sign_in',
        name: 'signin',
        component: signin
      },
     
    ]
  })
  
  export default router
  