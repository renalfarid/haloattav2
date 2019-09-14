import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'https://theme.hstatic.net/1000253446/1000470009/14/no-image.jpg?v=843',
    // loading: '/loading.gif',
    attempt: 1,
    listenEvents: ['scroll']
})