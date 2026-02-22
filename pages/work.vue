<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Background Globe -->
    <div class="fixed inset-0 pointer-events-none flex items-center justify-center -z-10 opacity-20 animate-slow-spin">
      <img src="/globe.png" alt="" class="w-full max-w-[1200px] object-contain" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">


      <div class="max-w-xl mx-auto flex justify-center">
        <NuxtLink to="/" class="block">
          <img src="/img/inventory_logo.png" alt="The Inventory" class="w-25" />
        </NuxtLink>
      </div>
      <!-- Hero Intro -->
      <div class="max-w-2xl mx-auto pt-10 md:pt-8 mb-20">
        <p class="hero-bold text-bold py-6">Our work</p>
        <p class="text-xl md:text-2xl leading-relaxed text-brand-black hero-text">
           
          We set out to build tools that solve everyday problems. A company where people thrive and have ownership of the products that they build.
          A place where real work gets done. The kind that builds, solves, design and shapes the future uninterrupted.

          In an ever changing world, we believe that adaptability and innovation are the keys to success. 
        </p>
    
        
      </div>
      
    
     
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>


.hero-text {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-wrap: balance;
}

.animate-slow-spin {
  animation: slow-spin 60s linear infinite;
}

@keyframes slow-spin {
  from {
    transform: translate(25%, 25%) scale(1.5) rotate(0deg);
  }
  to {
    transform: translate(25%, 25%) scale(1.5) rotate(360deg);
  }
}

.hero-text-links {
    font-family: 'Agrandir', sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-wrap: balance;
    text-decoration: underline;
}

.hero-bold {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
}
</style>