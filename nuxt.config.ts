// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    baseURL: "/"
  },
  css: ['~/assets/css/global.css', '~/assets/css/fonts.css'],
  vite: {
    server: {
      allowedHosts: [
        'a3da-2806-103e-c-f9a1-7829-55e1-89c8-3a27.ngrok-free.app'
      ]
    }
  }
})
