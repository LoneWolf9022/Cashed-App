import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _651b0410 = () => interopDefault(import('../pages/Blah.vue' /* webpackChunkName: "pages/Blah" */))
const _0ae640f8 = () => interopDefault(import('../pages/CreateCards.vue' /* webpackChunkName: "pages/CreateCards" */))
const _7913c8f6 = () => interopDefault(import('../pages/Dashboard.vue' /* webpackChunkName: "pages/Dashboard" */))
const _115644da = () => interopDefault(import('../pages/FormYourGoals.vue' /* webpackChunkName: "pages/FormYourGoals" */))
const _1786b184 = () => interopDefault(import('../pages/GiftsandDonations.vue' /* webpackChunkName: "pages/GiftsandDonations" */))
const _2367d95e = () => interopDefault(import('../pages/goals.vue' /* webpackChunkName: "pages/goals" */))
const _69d3ff7c = () => interopDefault(import('../pages/Register.vue' /* webpackChunkName: "pages/Register" */))
const _4537ff50 = () => interopDefault(import('../pages/Wallet.vue' /* webpackChunkName: "pages/Wallet" */))
const _41faff63 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Blah",
    component: _651b0410,
    name: "Blah"
  }, {
    path: "/CreateCards",
    component: _0ae640f8,
    name: "CreateCards"
  }, {
    path: "/Dashboard",
    component: _7913c8f6,
    name: "Dashboard"
  }, {
    path: "/FormYourGoals",
    component: _115644da,
    name: "FormYourGoals"
  }, {
    path: "/GiftsandDonations",
    component: _1786b184,
    name: "GiftsandDonations"
  }, {
    path: "/goals",
    component: _2367d95e,
    name: "goals"
  }, {
    path: "/Register",
    component: _69d3ff7c,
    name: "Register"
  }, {
    path: "/Wallet",
    component: _4537ff50,
    name: "Wallet"
  }, {
    path: "/",
    component: _41faff63,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
