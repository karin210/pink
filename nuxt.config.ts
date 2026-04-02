// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  // High Priority: Set this to your repository name
  app: {
    baseURL: "/pink/",
    buildAssetsDir: "assets", // Optional: cleans up the underscore in _nuxt if GH Pages struggles
  },

  // Nitro preset for GitHub Pages handles .nojekyll automatically
  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true, // Automatically finds all your routes
      // This tells Nuxt to create a physical /reservar/index.html file
      routes: ["/reservar"],
    },
  },

  css: ["~/assets/css/global.css", "~/assets/css/fonts.css"],

  vite: {
    server: {
      allowedHosts: ["8e94-206-85-11-81.ngrok-free.app"],
    },
  },
});
