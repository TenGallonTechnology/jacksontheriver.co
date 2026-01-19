// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/image'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: "Jack's On The River",
      meta: [
        {
          name: 'description',
          content:
            "Jack's on the River is considered by many, in and around the Laurens county area to be a hidden gem. The rustic restaurant originated in 1967 serving BBQ and later introducing fried catfish to the menu, which became a hit. Jack's is now known for their delicious Catfish, Steak & Seafood, as well as many other famous menu options."
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      link: [
        { rel: 'canonical', href: 'https://jacksontheriver.co' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light'
  }
})
