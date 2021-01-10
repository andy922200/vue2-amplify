import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { components } from 'aws-amplify-vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const authorizedAdmin = (to, from, next) => {
  const currentUserId = localStorage.getItem('CognitoIdentityServiceProvider.21tkc6v01fkb4kre5m9oml43ns.LastAuthUser')
  if (!currentUserId) {
    next('/')
    return
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'auth',
    component: components.Authenticator
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: authorizedAdmin
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    beforeEnter: authorizedAdmin
  },
  {
    path: '*',
    name: 'not-found',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const currentUserId = localStorage.getItem('CognitoIdentityServiceProvider.21tkc6v01fkb4kre5m9oml43ns.LastAuthUser')
  if (currentUserId && to.name === 'auth') {
    next('/home')
    return
  }
  next()
})

export default router
