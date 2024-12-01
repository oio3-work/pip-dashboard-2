// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  app: {
    head: {
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      //   },
      // ],
      // script: [
      //   {
      //     src: "https://cdn.jsdelivr.net/npm/chart.js",
      //     type: "text/javascript",
      //   },
      // ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  plugins: [
    "~/plugins/preline.client.ts",
    { src: "~/plugins/chartjs.ts", mode: "client" },
  ],
  css: ['@/assets/fonts.css'],
});
