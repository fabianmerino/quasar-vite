import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'

console.log(import.meta.env.VITE_ROUTER_MODE)

const createHistory = import.meta.env.VITE_SERVER
  ? createMemoryHistory
  : import.meta.env.VITE_ROUTER_MODE === 'history'
  ? createWebHistory
  : createWebHashHistory

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(import.meta.env.VITE_ROUTER_BASE || void 0),
})

export default Router
