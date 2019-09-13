module.exports = {
    mode: "universal",
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

    loading: false,

    css: [
        { src: "ant-design-vue/dist/antd.css" },
        { src: "@/assets/haloatta.scss", lang: "scss" }
    ],

    plugins: [
        { src: "@/plugins/antd-ui" },
        { src: "@/plugins/vue-slick", ssr: false },
        { src: "@/plugins/vInput-number", ssr: false },
        { src: "@/plugins/vCurrency-filter", ssr: false },
        { src: "@/plugins/vCountdown", ssr: false },
        { src: "@/plugins/vCharts", ssr: false },
        { src: "@/plugins/vInfinite-scroll", ssr: false },
        { src: "@/plugins/vClipboard", ssr: false },
        { src: "@/plugins/vSticky", ssr: false },
        { src: "@/plugins/vAos", ssr: false }
    ],

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

    build: {
        // extractCSS: true,
        extend(config, ctx) {
            config.resolve.alias["vue"] = "vue/dist/vue.common";
        }
    }
};