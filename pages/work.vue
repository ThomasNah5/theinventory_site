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
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title" class="group">
          <div class="relative overflow-hidden rounded-lg">
            <img :src="project.image" :alt="project.title"
              class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105" />
            <div
              class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-white text-center p-6">
                <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                <p class="text-sm mb-4">{{ project.description }}</p>
                <span class="inline-flex items-center text-orange-300">
                  View Case Study
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3'
  },
  {
    title: 'FinTech Dashboard',
    description: 'Advanced financial analytics platform with real-time data visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3'
  },
  {
    title: 'Healthcare App',
    description: 'Mobile application for patient management and telemedicine',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3'
  },
  {
    title: 'IoT Dashboard',
    description: 'Real-time monitoring system for industrial IoT devices',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3'
  },
  {
    title: 'Social Platform',
    description: 'Community platform with real-time messaging and content sharing',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3'
  },
  {
    title: 'AI Analytics Tool',
    description: 'Machine learning powered analytics for business intelligence',
    image: 'https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-4.0.3'
  }
];
</script>