const axios = require('axios')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow, all,max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'theme-color', content: '#ef476f' },
      { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8' },
      { 'http-equiv': 'content-language', content: 'en' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/553e9750160831.58c8ff8bc2909.png' }
    ]
  },

  serverMiddleware: ['~/api/index'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#06d6a0', height: '3px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuejs-paginate.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-ssr-cache',
    'nuxt-lazy-load',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/api',
    Sitemap: 'http://localhost:3000/sitemap.xml'
  },
  cache: {
    // if you're serving multiple host names (with differing
    // results) from the same server, set this option to true.
    // (cache keys will be prefixed by your host name)
    // if your server is behind a reverse-proxy, please use
    // express or whatever else that uses 'X-Forwarded-Host'
    // header field to provide req.hostname (actual host name)
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/'
    ],

    key (route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return
      // falsy value to bypass the cache
    },

    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 60
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://localhost:3000',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    sitemaps: [
      {
        generate: false,
        path: '/sitemap_anime1.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=1'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      },
      {
        generate: false,
        path: '/sitemap_anime2.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=2'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      },
      {
        generate: false,
        path: '/sitemap_anime3.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=3'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      },
      {
        generate: false,
        path: '/sitemap_anime4.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=4'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      },
      {
        generate: false,
        path: '/sitemap_anime5.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=5'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      },
      {
        generate: false,
        path: '/sitemap_anime6.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=6'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      },
      {
        generate: false,
        path: '/sitemap_anime7.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=7'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      }, {
        generate: false,
        path: '/sitemap_anime8.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=8'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      }, {
        generate: false,
        path: '/sitemap_anime9.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=9'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      }, {
        generate: false,
        path: '/sitemap_anime10.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=10'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      }, {
        generate: false,
        path: '/sitemap_anime11.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=11'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      }, {
        generate: false,
        path: '/sitemap_anime12.xml',
        routes: async () => {
          const game = await axios.get(
            'http://localhost:3000/api/sitemap_anime_sub?page=12'
          )
          return game.data.resquert.map(game => `/anime/${game.a_name
            .replace(/[^a-zA-Z0-9 -]/g, '')
            .replace(/- /g, '')
            .replace(/ /g, '-')
            .replace(/--/g, '-')
            .toLowerCase()}`)
        },
        cacheTime: 1000 * 60 * 15
      }
    ]

  }
}
