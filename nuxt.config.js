export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "POMO",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/helpers.js" },
    { src: "~/plugins/axios.js" },
    { src: "~/plugins/swiper.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/i18n"],

  // API
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    assetURL: process.env.ASSET_URL,
    imageURL: process.env.PRODUCT_IMAGE_URL,
  },
  // i18n
  i18n: {
    locales: [
      {
        code: "ru",
        name: "РУ",
        // file: "ru.js",
      },
      {
        code: "en",
        name: "EN",
        // file: "kz.js",
      },
      {
        code: "kz",
        name: "КЗ",
        // file: "en.js",
      },
    ],
    // langDir: "~/lang/",
    differentDomains: true,
  },
  // axios
  axios: {
    host: process.env.API_HOST, // http://172.17.0.1:8000
    prefix: process.env.API_PREFIX, // /api
    browserBaseURL: process.env.API_URL, // http://172.17.0.1:8000/api
    baseURL: process.env.API_URL,
    port: process.env.API_PORT,
    proxy: true,
    credentials: true,
    debug: true,
  },

  // proxy
  proxy: {
    "/api": {
      target: process.env.API_HOST,
      changeOrigin: true,
      pathRewrite: { "^/api": "/" },
    },
  },

  router: {
    base: "/",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
