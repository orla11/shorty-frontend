export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Shorty - The shortest urls ever seen!",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  publicRuntimeConfig: {
    axios: {
      baseUrl: "http://localhost:8081/api/v1/shorty"
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://mdbootstrap.com/docs/vue
    "mdbvue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
