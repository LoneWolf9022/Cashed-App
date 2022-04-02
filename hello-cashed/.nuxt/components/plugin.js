import Vue from 'vue'

const components = {
  SiteFooter: () => import('../../components/SiteFooter.vue' /* webpackChunkName: "components/site-footer" */).then(c => c.default || c),
  SiteHeader: () => import('../../components/SiteHeader.vue' /* webpackChunkName: "components/site-header" */).then(c => c.default || c),
  SiteNavigation: () => import('../../components/SiteNavigation.vue' /* webpackChunkName: "components/site-navigation" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
