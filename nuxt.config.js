module.exports = {
  mode: "universal",
  head: {
    title:
      "Pesan Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya - Haloatta",
    meta: [
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },

  env: {
    baseUrl: "https://api.haloatta.com/api/",
    token: "https://api.haloatta.com/oauth/token"
  },

  loading: false,

  css: [
    { src: "ant-design-vue/dist/antd.css" },
    { src: "@/assets/haloatta.scss", lang: "scss" }
  ],

  plugins: [
    { src: "@/plugins/antd-ui" },
    { src: "@/plugins/vue-slick", mode: "client" },
    { src: "@/plugins/vInput-number", mode: "client" },
    { src: "@/plugins/vCurrency-filter", mode: "client" },
    { src: "@/plugins/vCountdown", mode: "client" },
    { src: "@/plugins/vCharts", mode: "client" },
    { src: "@/plugins/vInfinite-scroll", mode: "client" },
    { src: "@/plugins/vClipboard", mode: "client" },
    { src: "@/plugins/vSticky", mode: "client" },
    { src: "@/plugins/vLazytube", mode: "client" },
    { src: "@/plugins/vMyphotos", mode: "client" },
    { src: "@/plugins/vLazyimg", mode: "client" },
    { src: "@/plugins/vPimg", mode: "client" },
    { src: "@/plugins/vAos", mode: "client" }
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
    defaultLocale: "id",
    locales: ["id"]
  },

  /*
   ** Auth Config
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: process.env.BASE_URL + "oauth/token",
            method: "post",
            propertyName: "token"
          },
          logout: { url: process.env.BASE_URL + "user/logout", method: "del" },
          user: {
            url: process.env.BASE_URL + "user/info",
            method: "get",
            propertyName: "user"
          }
        }
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    }
  },

  build: {
    // extractCSS: true,
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  }
};
