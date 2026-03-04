<template>
    <div class="py-20">
      <h2 class="hero-text text-xl md:text-2xl font-sans text-brand-black mb-10 py-2 border-b border-brand-black">
        What we are building
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        <a v-for="product in products" :key="product.name" :href="product.url" target="_blank" rel="noopener noreferrer" class="group block">
          <h3 class="text-orange-500 hero-bold text-4xl md:text-5xl font-display font-bold text-brand-orange mb-4 group-hover:opacity-80 transition-opacity">
            {{ product.name }}
          </h3>
          <div class="hero-text-description space-y-1 text-brand-black font-sans text-sm md:text-base leading-relaxed">
            <p v-for="line in product.description" :key="line">{{ line }}</p>
          </div>
        </a>
      </div>
    </div>
</template>

<script setup>
const products = [
  { 
    name: 'Aether', 
    url: 'https://github.com/theinventorylib/Aether',
    description: ['AI powered notetaking app to manage your thoughts.']
  },
  { 
    name: 'Aegis', 
    url: 'https://example.com/dakae',
    description: ['A lightweight authentication framework for Go with a modular plugin architecture inspired by better-auth.']
  },
  // { 
  //   name: 'LinkPage', 
  //   url: 'https://example.com/linkpage',
  //   description: ['Your digital identity.', 'One link for everything.', 'Share with the world.']
  // },
  // { 
  //   name: 'Cavalla', 
  //   url: 'https://example.com/cavalla',
  //   description: ['Seamless collaboration.', 'Real-time teamwork.', 'Build together, faster.']
  // },
  // { 
  //   name: 'Localman', 
  //   url: 'https://example.com/localman',
  //   description: ['Discover your city.', 'Local recommendations.', 'Hidden gems revealed.']
  // },
  // { 
  //   name: 'Kue', 
  //   url: 'https://example.com/kue',
  //   description: ['Task management reimagined.', 'Stay organized effortlessly.', 'Get things done.']
  // },
]
</script>

<style scoped>
.hero-text {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-wrap: balance;
}

.hero-text-description {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-wrap: balance;
}

.hero-bold {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 20px;
}
</style>
