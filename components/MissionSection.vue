<template>
    <div class="max-w-3xl mx-auto py-32">
      <h1 class="text-center hero-bold">Join the mission</h1>
      <p class="text-center hero-text">We're are looking for builders, designers, thinkers and creatives who want to create impactful products with Africa in mind.</p>
      <div class="flex justify-center space-x-8 py-4 hero-text-links">
          <NuxtLink to="/team" class="">meet the team</NuxtLink>
          <NuxtLink to="/blog" class="">read updates</NuxtLink>
          <NuxtLink to="/contact" class="">join us</NuxtLink>
        </div>
    </div>
</template>


<script setup>
</script>

<style scoped>


.hero-text {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-wrap: balance;
}
.hero-text-links {
    font-family: 'Agrandir', sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-wrap: balance;
    text-decoration: underline;
}

.hero-bold {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 40px;
}
</style>