// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "modules": [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-swiper"
  ],
  "app": {
    "head": {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      "link": [],
      "style": [],
      "script": [],
      "noscript": []
    }
  },
  "css": [
    "@/assets/scss/main.scss",
    "@/node_modules/video.js/dist/video-js.css"
  ],
})
