<template>
  <div class="pt-32 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-20">
        <h1 class="text-6xl font-bold mb-6">Our Work</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We've helped companies of all sizes turn their ideas into reality. Here are some of our recent projects that
          showcase our expertise and commitment to excellence.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title" class="group">
          <div class="relative overflow-hidden rounded-lg">
            <img v-if="project.image" :src="project.image"
              :alt="project.title"
              class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105" />
            <img v-else src="/img/project_placeholder.png"
              :alt="project.title"
              class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105" />
            <!-- Overlay with project details -->
            <div
              class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-white text-center p-6">
                <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                <p class="text-sm mb-4">{{ project.description }}</p>
                <span v-if="project.caseStudyLink"
                  class="inline-flex items-center text-orange-300 mb-2">
                  <a :href="project.caseStudyLink" target="_blank" rel="noopener noreferrer">View Case Study</a>
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span v-if="project.link"
                 class="inline-flex items-center text-orange-300">
                  <a :href="project.link" target="_blank" rel="noopener noreferrer">Visit {{ project.title }}</a>
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HitUs />
</template>

<script setup>
const projects = [
  {
    title: 'Cavalla',
    description: 'A Fintech platform with the goal of unifying the African financial ecosystem.',
    image: "",
    link: 'https://usecavalla.com',
    caseStudyLink: ''
  },

];
</script>