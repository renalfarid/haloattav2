require('dotenv').config();
module.exports = {
    mode: 'universal',
    head: {
        title: 'Tempat Pesan Paket Umrah dan Komponen Umrah Lainnya - Haloatta',
        meta: [{
                charset: 'utf-8'
            },

            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Tempat Pesan Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya'
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'Haloatta, Halo, Atta, Umrah, Umroh, Umaroh, Vendor, Wisata, Travel, Tiket, Paket Umroh, LA Akomodasi, Akomodasi, LA, Hotel, Visa, Asuransi, Perjalanan, Handling, Manasik, Perlengkapan, Tourleader, Ustad, Makkah, Madinah, Indonesia, Surabaya, Makassar, Jakarta'
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Haloatta'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Tempat Pesan Paket Umrah, Tiket, LA Akomodasi, Visa dan Komponen Umrah Lainnya'
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://www.haloatta.com/'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://www.haloatta.com/makkah.jpg'
            },
            {
                hid: 'og:image:width',
                property: 'og:image:width',
                content: '1200'
            },
            {
                hid: 'og:image:height',
                property: 'og:image:height',
                content: '628'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.png'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Archivo:400,400i,500,500i,600,600i,700,700i&display=swap'
            }
        ]
    },

    env: {
        baseUrl: process.env.apiUrl,
        token: process.env.apiToken + '/oauth/token'
    },

    loading: '@/components/template/Loading',

    css: [
        { src: 'ant-design-vue/dist/antd.less', lang: 'less' },
        { src: '@/assets/haloatta.scss', lang: 'scss' }
    ],

    plugins: [
        { src: '@/plugins/antd-ui' },
        { src: '@/plugins/silent-box', mode: 'client' },
        { src: '@/plugins/vInput-number', mode: 'client' },
        { src: '@/plugins/vCurrency-filter', mode: 'client' },
        { src: '@/plugins/vCountdown', mode: 'client' },
        { src: '@/plugins/vCharts', mode: 'client' },
        { src: '@/plugins/vInfinite-scroll', mode: 'client' },
        { src: '@/plugins/vClipboard', mode: 'client' },
        { src: '@/plugins/vMyphotos', mode: 'client' },
        { src: '@/plugins/vLazyimg', mode: 'client' },
        { src: '@/plugins/vFlickity', mode: 'client' },
        { src: '@/plugins/vAos', mode: 'client' }
    ],

    modules: [
        '@nuxtjs/moment',
        '@nuxtjs/axios',
        '@bazzite/nuxt-optimized-images',
        '@nuxtjs/sitemap',
        '@nuxtjs/proxy', ['nuxt-vuex-localstorage', {
            mode: 'debug'
        }],
        [
            'vue-currency-filter/nuxt',
            {
                symbol: 'Rp',
                thousandsSeparator: ',',
                fractionSeparator: ',',
                symbolPosition: 'front',
                symbolSpacing: true
            }
        ],
    ],

    sitemap: {
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 60 * 2,
        trailingSlash: true,
        gzip: true
    },

    optimizedImages: {
        inlineImageLimit: 1000,
        imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[contenthash:7].[ext]',
        responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]' : 'img/[contenthash:7]-[width].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        defaultImageLoader: 'img-loader',
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        svgo: {
            // enable/disable svgo plugins here
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    },

    axios: {
        proxy: false,
        crossDomain: true
    },

    moment: {
        defaultLocale: 'id',
        locales: ['id']
    },

    /*
     ** Auth Config
     */
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: process.env.BASE_URL + 'oauth/token',
                        method: 'post',
                        propertyName: 'token'
                    },
                    logout: { url: process.env.BASE_URL + 'user/logout', method: 'del' },
                    user: {
                        url: process.env.BASE_URL + 'user/info',
                        method: 'get',
                        propertyName: 'user'
                    }
                }
                // tokenRequired: true,
                // tokenType: 'bearer',
            }
        }
    },

    build: {
        extend(config, ctx) {
            if (ctx && ctx.isClient) {
                config.optimization.splitChunks.maxSize = 51200
            }
            config.resolve.alias['vue'] = 'vue/dist/vue.common';
        },

        babel: {
            plugins: [
                [
                    'import', { libraryName: 'ant-design-vue' }, 'ant-design-vue'
                ]
            ]
        },

        loaders: {
            less: {
                modifyVars: {
                    'primary-color': '#0FACF3',
                    'link-color': '#0FACF3',
                    'border-radius-base': '4px',
                },
                javascriptEnabled: true
            }
        }
    }
};