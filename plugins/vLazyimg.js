import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.2,
    error: '/loading.png',
    loading: '/loading.png',
    attempt: 1,
    listenEvents: ['scroll']
})