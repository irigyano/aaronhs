// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  content: {
    navigation: {
      fields: ["publishedAt"],
    },
    highlight: {
      theme: "github-dark",
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
