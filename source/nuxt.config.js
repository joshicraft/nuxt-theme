const nodeExternals = require('webpack-node-externals');
// const SoundsPlugin = require('sounds-webpack-plugin');

global.HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Source',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Source vuejs project' }
    ],
    link: [
      // { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: '//cdn.materialdesignicons.com/2.2.43/css/materialdesignicons.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#6200ea' },
  /**
   * Modules
   * @type {Array}
   */
  modules: [
    ['nuxt-buefy', { css: false, materialDesignIcons: false }],
    '@nuxtjs/axios',
    // '@nuxtjs/blog',
    '@nuxtjs/sitemap',
    '@nuxtjs/vendor',
    // ['@nuxtjs/google-analytics', { id: 'UA-32255834-1' }]
  ],
  css: [
    // node.js module but we specify the pre-processor
    { src: '~assets/scss/main.scss', lang: 'scss' },
    { src: 'aos/dist/aos.css' },
  ],
  axios: {
    "baseURL": "http://fake-api.source.themebiotic.com",
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://source.themebiotic.com",
    generate: true,
    routes: [
      // {
      //   url: '/portfolio',
      //   changefreq: 'weekly',
      //   priority: 1,
      //   lastmodISO: new Date().toISOString()
      // },
      // {
      //   url: '/blogs',
      //   changefreq: 'weekly',
      //   priority: 0.8,
      //   lastmodISO: new Date().toISOString()
      // },
      // {
      //   url: '/pricing',
      //   changefreq: 'monthly',
      //   priority: 0.8,
      //   lastmodISO: new Date().toISOString()
      // },
      // {
      //   url: '/contact',
      //   changefreq: 'monthly',
      //   priority: 0.5,
      //   lastmodISO: new Date().toISOString()
      // },
      // {
      //   url: '/about',
      //   changefreq: 'monthly',
      //   priority: 0.8,
      //   lastmodISO: new Date().toISOString()
      // }
    ]
  },
  plugins: [
    '~plugins/font-awesome',
    '~plugins/vue-markdown',
    '~plugins/vue-moment',
    '~plugins/vue-filter',
    '~plugins/vue-countdown',
    { src: '~plugins/vue-googlemaps', ssr: false },
    { src: '~plugins/vue-mq', ssr: false },
    { src: '~plugins/lazysizes', ssr: false },
    { src: '~plugins/aos', ssr: false },
  ],
  /*
  ** Build configuration
  */
  build: {
    // plugins: [new SoundsPlugin()],
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    vendor: [
      // '@nuxtjs/axios',
      // 'aos',
      // 'vue-awesome'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) {

        config.module.rules.push({
          test: /\.(webp)$/i,
          loader: 'url-loader',
          query: {
            limit: 1000, // 1kB
            name: 'img/[name].[hash:7].[ext]'
          },
        //  use: [
        //   // 'file-loader',
        //   'file-loader?hash=sha512&digest=hex&name=img/[name].[hash:7].[ext]',
        //   {
        //     loader: 'image-webpack-loader',
        //     options: {
        //       // bypassOnDebug: true,
        //       webp: { quality: 75 }
        //     },
        //   },
        // ],
        });

      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      // vueLoader.options.transformToRequire['img'] = ['src', 'data-src','data-srcset','srcset'];
      vueLoader.options.transformToRequire['figure'] = ['data-src','data-image'];

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    }
  }
}
