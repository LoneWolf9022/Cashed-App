export { default as SiteFooter } from '../../components/SiteFooter.vue'
export { default as SiteHeader } from '../../components/SiteHeader.vue'
export { default as SiteNavigation } from '../../components/SiteNavigation.vue'

export const LazySiteFooter = import('../../components/SiteFooter.vue' /* webpackChunkName: "components/site-footer" */).then(c => c.default || c)
export const LazySiteHeader = import('../../components/SiteHeader.vue' /* webpackChunkName: "components/site-header" */).then(c => c.default || c)
export const LazySiteNavigation = import('../../components/SiteNavigation.vue' /* webpackChunkName: "components/site-navigation" */).then(c => c.default || c)
