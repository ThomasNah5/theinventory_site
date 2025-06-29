<template>
  <footer class="bg-black text-white py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Reach out section -->
      <div class="space-y-4">
        <p class="text-gray-400 text-xl">Reach out:</p>
        <a href="mailto:hello@theinventory.dev"
          class="text-4xl md:text-5xl lg:text-6xl font-bold hover:text-gray-200 transition-colors inline-flex items-center group">
          info@theinventory.tech
          <span class="ml-4 transform group-hover:translate-x-2 transition-transform">→</span>
        </a>
      </div>

      <!-- Brand description -->
      <div class="py-6">
        <h2 class="text-3xl md:text-4xl lg:text-5xl max-w-3xl">
          Building digital experiences that bring your ideas to life.
        </h2>
      </div>

      <!-- Social Links -->
      <div class="flex space-x-8 text-xl">
        <a href="#" class="text-gray-400 hover:text-white transition-colors underline">Instagram</a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors underline">LinkedIn</a>
      </div>

      <!-- Copyright -->
      <div class="pt-12 border-t border-gray-800">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} The Inventory. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>