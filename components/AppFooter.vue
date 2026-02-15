<template>
  <footer
    class="w-full py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 bg-brand-beige"
  >
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center"
    >
      <div class="mb-8 md:mb-0">
        <img
          src="/img/inventory_logo.png"
          alt="The Inventory"
          class="w-16 mb-4 grayscale opacity-80"
        />
        <p class="hero-text text-gray-600 max-w-xs leading-relaxed">
          Building products that make people's lives better through thoughtful
          design and exceptional craftsmanship.
        </p>
      </div>

      <div class="flex space-x-8 text-sm text-gray-600 font-sans">
        <NuxtLink to="/about" class="hover:text-brand-black transition-colors"
          >About Us</NuxtLink
        >
        <NuxtLink to="/join" class="hover:text-brand-black transition-colors"
          >Join Us</NuxtLink
        >
        <NuxtLink
          to="/how-we-work"
          class="hover:text-brand-black transition-colors"
          >How we work</NuxtLink
        >
      </div>

      <div class="mt-8 md:mt-0 text-sm text-gray-500">
        <a
          href="mailto:hello@theinventory.studios"
          class="hover:text-brand-black transition-colors"
          >theinventory.studios</a
        >
      </div>
    </div>
  </footer>
</template>


<script setup>
</script>

<style scoped>


.hero-text {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 14px;
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
  font-weight: 700;
  font-size: 40px;
}
</style>