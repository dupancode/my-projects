import Home from './pages/home.js'
import About from './pages/about.js'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(), // hash mode buat GitHub Pages
  routes
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')
