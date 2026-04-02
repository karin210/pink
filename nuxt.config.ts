// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false, // Set to false for static hosting on GitHub Pages
  app: {
    baseURL: "/pink/", // Updated for your GitHub repository name
    buildAssetsDir: "assets", // Avoids the default _nuxt folder which GH Pages can sometimes block
  },
  css: ["~/assets/css/global.css", "~/assets/css/fonts.css"],
  vite: {
    server: {
      allowedHosts: ["8e94-206-85-11-81.ngrok-free.app"],
    },
  },
});
