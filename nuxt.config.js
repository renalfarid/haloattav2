module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Haloatta - Booking Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya',
        meta: [
            { charset: 'utf-8' },
            // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
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
        { src: '@/plugins/vue-slick', ssr: false }
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [],
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