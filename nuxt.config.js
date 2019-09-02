module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title:
      "Pesan Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya - Haloatta",
    meta: [
      { charset: "utf-8" },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700&display=swap&subset=latin-ext,vietnamese"
      }
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
    ["@nuxtjs/moment", { locales: ["id"], defaultLocale: "id" }],
    ["@nuxtjs/axios"],
    "@nuxtjs/proxy",
    "vue-currency-filter/nuxt",

    // Or if you have custom options...
    [
      "vue-currency-filter/nuxt",
      {
        symbol: "Rp.",
        thousandsSeparator: ",",
        fractionCount: 3,
        fractionSeparator: ".",
        symbolPosition: "front",
        symbolSpacing: true
      }
    ]
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  axios: {
    proxy: false
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
