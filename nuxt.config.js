module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Booking Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya - Haloatta',
        meta: [
            { charset: 'utf-8' },
            // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&display=swap' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: false,
    /*
     ** Global CSS
     */
    css: [
        { src: 'ant-design-vue/dist/antd.css' },
        { src: '@/assets/haloatta.scss', lang: 'scss' }
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '@/plugins/antd-ui' },
        { src: '@/plugins/vue-slick', ssr: false },
        { src: '@/plugins/vInput-number', ssr: false },
        { src: '@/plugins/vCountdown', ssr: false },
        { src: '@/plugins/vInfinite-scroll', ssr: false },
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios'
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extractCSS: true,
        extend(config, ctx) {}
    }
}