<template>
  <div class="min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

      <!-- Hero Intro -->
      <div class="max-w-2xl mx-auto pt-10 md:pt-8 mb-20">
        <p class="text-xl md:text-2xl leading-relaxed text-brand-black hero-text">
          <span class="hero-bold">the inventory</span> 
          is creating a suite of digital products built with Africa in mind. We're a small, purpose-driven team on a mission to solve everyday problems with tech that actually fits the way people live and work. By putting local context first, we're creating tools that empower, uplift, and make life a little easier, one product at a time.
        </p>
        <div class="flex space-x-8 py-4 hero-text-links">
          <NuxtLink to="/team" class="">meet the team</NuxtLink>
          <NuxtLink to="/blog" class="">blog</NuxtLink>
        </div>
        <!-- Product List -->
        <ProductList />
        <!-- Join the Mission -->
         <MissionSection />
        
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
.hero-text-links {
    font-family: 'Agrandir', sans-serif;
    font-weight: 500;
    font-size: 20px;
    text-wrap: balance;
    text-decoration: underline;
}

.hero-bold {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
}
</style>