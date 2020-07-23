import dotenv from "dotenv"; dotenv.config();
const client = require("contentful");

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */

 env: {
    CONTENTFUL_SPACE: process.env.CTF_SPACE_ID,
    CONTENTFUL_ACCESSTOKEN: process.env.CTF_ACCESS_TOKEN
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: '/images/favicon-16x16.png' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: { color: '#FFC25C' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    "~/plugins/contentful",
    "~/plugins/posts",
    '~/plugins/day',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],
  
  markdownit:{
    injected: true
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: 'post',
          order: '-sys.createdAt',
        })
      ]).then(([blogEntries]) => {
        return [...blogEntries.items.map(entry => entry.fields.slug)];
      });
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
