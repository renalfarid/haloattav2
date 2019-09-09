module.exports = {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: "Pesan Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya - Haloatta",
        meta: [
            { charset: "utf-8" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.png" }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#0FACF3" },
    /*
     ** Global CSS
     */
    css: [
        { src: "ant-design-vue/dist/antd.css" },
        { src: "@/assets/haloatta.scss", lang: "scss" }
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: "@/plugins/antd-ui" },
        { src: "@/plugins/vue-slick", ssr: false },
        { src: "@/plugins/vInput-number", ssr: false },
        { src: "@/plugins/vCurrency-filter", ssr: false },
        { src: "@/plugins/vCountdown", ssr: false },
        { src: "@/plugins/vCharts", ssr: false },
        { src: "@/plugins/vInfinite-scroll", ssr: false },
        { src: "@/plugins/vClipboard", ssr: false },
        { src: "@/plugins/vAos", ssr: false }
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        ["@nuxtjs/moment"],
        ["@nuxtjs/axios"],
        ["@nuxtjs/proxy"],
        [
            "vue-currency-filter/nuxt",
            {
                symbol: "Rp",
                thousandsSeparator: ".",
                fractionSeparator: ".",
                symbolPosition: "front",
                symbolSpacing: true
            }
        ]
    ],

    axios: {
        proxy: false
    },

    moment: {
        defaultLocale: 'id',
        locales: ['id']
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        // extractCSS: true,
        extend(config, ctx) {
            config.resolve.alias["vue"] = "vue/dist/vue.common";
        }
    }
};