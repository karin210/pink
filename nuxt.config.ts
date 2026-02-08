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
        '258a-2806-103e-c-f9a1-4104-75f3-3fc-ecee.ngrok-free.app'
      ]
    }
  }
})
