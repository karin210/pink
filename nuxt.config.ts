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
        'e35c-2806-103e-c-fd87-b466-ed57-7f6f-3481.ngrok-free.app'
      ]
    }
  }
})
