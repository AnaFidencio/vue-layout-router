import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import TeamView from '../views/TeamView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProductsView from '../views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
    ,
    {
      path: '/team',
      name: 'team',
      component: TeamView
    }
    ,
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    }
    ,
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    }
  ]
})

export default router
