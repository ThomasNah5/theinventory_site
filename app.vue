<template>
  <div class="min-h-screen bg-brand-beige flex flex-col">
    <nav
      class="fixed w-full py-10 z-50 transition-all duration-300 bg-brand-beige/90 backdrop-blur-sm"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
      >
        <!-- Logo -->
        <!-- <NuxtLink to="/" class="block">
          <img src="/img/inventory_logo.png" alt="The Inventory" class="w-20" />
        </NuxtLink> -->

        <!-- Centered Links (Tab Style) -->
        <div
          class="hero-text absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-1"
        >
          <NuxtLink
            to="/about"
            class="px-4 py-2 rounded-full text-sm font-medium text-brand-black transition-all"
            active-class=""
            >Manifesto</NuxtLink
          >
          <NuxtLink
            to="/join"
            class="px-4 py-2 rounded-full text-sm font-medium text-brand-black transition-all"
            active-class=""
            >Join Us</NuxtLink
          >
          <NuxtLink
            to="/how-we-work"
            class="px-4 py-2 rounded-full text-sm font-medium text-brand-black transition-all"
            active-class=""
            >How we work</NuxtLink
          >
        </div>

        <!-- Right Side (Empty for balance or Contact later) -->
        <div class="hidden md:block w-20"></div>

        <!-- Mobile Menu Button (Simple) -->
        <button
          class="md:hidden text-brand-black"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="sr-only">Open menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full h-screen bg-white"
      >
        <div class="flex flex-col p-8 space-y-16">
          <NuxtLink
            to="/about"
            class="hero-bold text-brand-black font-bold text-5xl"
            @click="isMobileMenuOpen = false"
            >About Us</NuxtLink
          >
          <NuxtLink
            to="/join"
            class="hero-bold text-brand-black font-bold text-5xl"
            @click="isMobileMenuOpen = false"
            >Join Us</NuxtLink
          >
          <NuxtLink
            to="/how-we-work"
            class="hero-bold text-brand-black font-bold text-5xl"
            @click="isMobileMenuOpen = false"
            >How we work</NuxtLink>

          <NuxtLink
            to="/team"
            class="hero-bold text-brand-black font-bold text-5xl"
            @click="isMobileMenuOpen = false"
            >Team</NuxtLink>
        </div>
      </div>
    </nav>

    <main class="flex-grow pt-28">
      <NuxtPage />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
const isMobileMenuOpen = ref(false);
</script>

<style scoped>
.hero-text {
  font-family: "Agrandir", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-wrap: balance;
  text-decoration: underline;
}

.hero-bold {
  font-family: "Agrandir", sans-serif;
  font-weight: 700;
}
</style>
