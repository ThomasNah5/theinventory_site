<template>
  <div class="min-h-screen bg-white">
    <nav class="fixed w-full h-28 bg-white backdrop-blur-sm z-50">
      <div class="max-w-9xl mx-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="block w-20 lg:w-24  lg: pt-6">
              <img src="./public/img/inventory_logo.png" alt="">
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center justify-center flex-1 px-16">
            <div class="flex items-center space-x-16">
              <NuxtLink to="/services" class="text-gray-700 hover:text-primary font-medium">Services</NuxtLink>
              <NuxtLink to="/work" class="text-gray-700 hover:text-primary font-medium">Our Work</NuxtLink>
              <NuxtLink to="/about" class="text-gray-700 hover:text-primary font-medium">About Us</NuxtLink>
            </div>
          </div>


          <!-- Right Button -->
          <div class="relative hidden md:block">
            <!-- Black background perspective -->

            <NuxtLink to="/contact"
              class="relative px-4 py-2 rounded-md bg-orange-400 text-white hover:bg-primary/90 transition-colors block text-center">
              Get In Touch
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="isOpen = !isOpen" class="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu">
              <div class="relative w-6 h-6">
                <span class="absolute block w-6 h-0.5 bg-current transform transition duration-300" :class="[
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2',
                ]"></span>
                <span class="absolute block w-6 h-0.5 bg-current transform transition duration-300" :class="[
                  isOpen ? '-rotate-45' : 'translate-y-2',
                ]"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Navigation -->
      <div class="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
        :style="{ maxHeight: isOpen ? '400px' : '0px' }">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white">
          <NuxtLink to="/services" class="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Services
          </NuxtLink>
          <NuxtLink to="/work" class="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Work</NuxtLink>
          <NuxtLink to="/about" class="block px-3 py-2 text-gray-700 hover:text-primary font-medium">About Us</NuxtLink>
          <NuxtLink to="/contact" class="block px-3 py-2 text-primary font-medium">Get In Touch</NuxtLink>
        </div>
      </div>
    </nav>

    <main>
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
const isOpen = ref(false)

// Close mobile menu when route changes
watch(() => useRoute().fullPath, () => {
  isOpen.value = false
})
</script>
