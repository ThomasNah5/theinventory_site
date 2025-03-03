<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    
    <section class="pt-44 pb-16 text-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-6xl lg:text-9xl font-bold mb-12">
          HERE'S HOW WE<br />
          CAN ASSIST YOU.<br />
        </h1>
        <div class="max-w-3xl  lg:ml-auto lg:mt-44 lg:mb-64">
          <p class="text-2xl lg:text-5xl leading-relaxed">
            From web applications, to cross-platform
            iOS and Android applications, we know how
            to develop great products.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-6xl lg:text-8xl font-bold mb-32">
          OUR<br />
          SERVICES
        </h2>

        <div class="space-y-32">
          <!-- Product Discovery -->


          <!-- Product Design -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <h3 class="text-4xl font-bold">Product Design</h3>
            <p class="text-xl text-gray-600">
              We focus on clarity and purpose. By analyzing user needs and business objectives, we design interfaces
              that prioritize functionality and ease of use. Our process—research, wireframes, prototypes—ensures
              alignment with your goals before development begins.
            <p>
              <NuxtLink to="/design"
                class="mt-2 inline-flex space-x-2 text-primary font-medium hover:text-primary/80 transition-colors">
                <p class="text-xl lg:text-xl underline">Learn More→</p>
              </NuxtLink>
            </p>
            </p>

          </div>

          <!-- Software Engineering -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <h3 class="text-4xl font-bold">Software Engineering</h3>
            <p class="text-xl text-gray-600">
              We deliver robust, software tailored to your requirements. Specializing in full lifecycle
              development, we build secure mobile apps and custom solutions.
            <p>
              <NuxtLink to="/software"
                class="mt-2 inline-flex space-x-2 text-primary font-medium hover:text-primary/80 transition-colors">
                <p class="text-xl lg:text-xl underline">Learn More→</p>
              </NuxtLink>
            </p>
            </p>
          </div>


        </div>

        <!-- Added Services Link -->
      </div>
    </section>

    <!-- Services Section -->


    <!-- CTA Section -->
    
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-8">Ready to start your project?</h2>
        <div class="relative inline-block">
          <div class="absolute inset-0 bg-black rounded-md transform translate-x-1 translate-y-1"></div>
          <NuxtLink to="/contact"
            class="relative px-8 py-4 rounded-md bg-orange-400 text-white hover:bg-primary/90 transition-colors block">
            Get In Touch
          </NuxtLink>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>