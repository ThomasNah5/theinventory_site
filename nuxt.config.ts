// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxt/content", 
    "@nuxt/fonts", 
    "v-gsap-nuxt", 
    "nuxt-anchorscroll", 
    "nuxt-studio"
  ],

  studio: {
  repository: {
    provider: 'github', // 'github' or 'gitlab'
    owner: 'theinventorylib',
    repo: 'theinventory_site',
    branch: 'main'
  }
},

  css: ["~/assets/css/main.css"],
  
  app: {
    head: {
      title: "The Inventory",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "description",
          content: "The Inventory is a creative agency specializing in building, designing, and developing digital products. We create exceptional user experiences that drive results.",
        },
        {
          name: "keywords",
          content: "the inventory, liberia, software company, creative agency, digital products, web design, app development, user experience, UI/UX design, branding, digital marketing",
        },
        {
          name: "author",
          content: "The Inventory Team",
        },
      ],
    },
  },
  
  vite: { plugins: [tailwindcss()] },
  
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  
  compatibilityDate: "2024-11-01",
});