<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-hero relative min-h-screen flex items-center bg-[url(./img/bg-hero.png)]">
      <div class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-20">
        <div class="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 order-1 lg:order-none">
            <h1 class="text-6xl font-bold leading-tight max-w-lg mx-auto lg:mx-0 text-center lg:text-left lg:text-8xl">
              <span class="block">Building experiences that bring your ideas to life.</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              We transform innovative ideas into powerful digital solutions that drive business growth and user
              satisfaction.
            </p>
            <div class="flex space-x-4 justify-center lg:justify-start">
              <div class="relative">
                <NuxtLink v-gsap.whenVisible.stagger to="/contact"
                  class="relative px-8 py-4 rounded-md bg-orange-400 text-xl text-white hover:bg-primary/90 transition-colors font-medium block">
                  Start Your Project
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="relative order-2 py-8 lg:order-none">
            <img src="../public/img/website_art.png" alt="Hero Image"
              class="w-[600px] h-auto rounded-2xl object-cover relative mx-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gray-100 text-black py-80 ">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-12">
          <div class="max-w-4xl mx-auto text-center">
            <div class="flex lg:ml-40 md:ml-32">
              <img class="sm:w-20 md:w-32 lg:w-32 h-40" src="../public/img/avatars/guy1.png" alt="">
              <img class="sm:w-20 lg:w-32 h-40 md:hidden" src=" ../public/img/avatars/guy2.png" alt="">
              <img class="sm:w-20 lg:w-32 md:w-32 h-40 " src=" ../public/img/avatars/guy2.png" alt="">
              <img class="hidden sm:block   lg:w-32 h-40" src=" ../public/img/avatars/guy4.png" alt="">
              <img class="hidden sm:block  lg:w-32 h-40" src=" ../public/img/avatars/guy5.png" alt="">
            </div>
            <p v-gsap.whenVisible.from="{ opacity: 0, y: -100, duration: 10 }"
              class="text-2xl sm:text-4xl lg:text-5xl leading-relaxed">
              We're a team of <span class="text-orange-400">passionate developers</span> and
              designers dedicated to transforming businesses through <span class="text-orange-400">innovative digital
                solutions</span>
              and exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-32 bg-white ">
      <div class="max-w-5xl mx-auto px-4 sm:px-12 lg:px-8">
        <div class="space-y-16">
          <div>
            <h2 class="text-6xl lg:text-7xl font-bold">
              The sauce is in our process.
            </h2>
            <p class="mt-8 text-xl lg:text-2xl text-gray-600 max-w-3xl">
              We focus on efficiency, ensuring every stage is carefully
              executed for optimal results.
            </p>
          </div>

          <div class="gap-12 lg:flex md:flex sm:flex-row-reverse">
            <!-- Design -->
            <div class="pb-12 space-y-2">
              <div class="text-4xl">🎨</div>
              <h3 class="text-2xl font-bold">Design</h3>
              <p class="text-gray-600">
                We are focused on delivering a user-centric experirnce that drives results.
              </p>
            </div>

            <!-- Develop -->
            <div class="pb-12 space-y-2">
              <div class="text-4xl">💻</div>
              <h3 class="text-2xl font-bold">Develop</h3>
              <p class="text-gray-600">
                Our collaborative team of developers and creatives ensures quality code for each project.
              </p>
            </div>

            <!-- Deploy -->
            <div class="pb-12 space-y-2">
              <div class="text-4xl">🚀</div>
              <h3 class="text-2xl font-bold">Deploy</h3>
              <p class="text-gray-600">
                We work alongside you to launch and deliver, ensuring product-market fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Services Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="space-y-32">

          <section class="pt-44 pb-16 text-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 v-gsap.whenVisible.from="{
                 opacity: 0, 
                 //x: -100,
                 start:'top 50%',
                 end: 'bottom 50%',
                 }" class="text-6xl lg:text-9xl font-bold mb-12">
                HERE'S HOW WE<br />
                CAN ASSIST YOU.<br />
              </h1>
              <div class="max-w-3xl  lg:ml-auto lg:mt-44 lg:mb-64">
                <p v-gsap.whenVisible.from="{ opacity: 0, x: 100 }" class=" text-2xl lg:text-5xl leading-relaxed">
                  From web applications, to cross-platform
                  iOS and Android applications, we know how
                  to develop great products.
                </p>
              </div>
            </div>
          </section>

          <div v-gsap.whenVisible.from="{ opacity: 0, y: 100 }">
            <h2 class="text-6xl lg:text-8xl font-bold mb-32">
              OUR<br />
              SERVICES
            </h2>
            <!-- Product Design -->
            <div>
              <div class="pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <h3 class="text-4xl font-bold">Product Design</h3>
                <p class="text-xl text-gray-600">
                  We focus on clarity and purpose. By analyzing user needs and business objectives, we design interfaces
                  that prioritize functionality and ease of use. Our process—research, wireframes, prototypes—ensures
                  alignment with your goals before development begins.
                </p>
              </div>

              <!-- Software Engineering -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <h3 class="text-4xl font-bold">Software Engineering</h3>
                <p class="text-xl text-gray-600">
                  We deliver robust, software tailored to your requirements. Specializing in full lifecycle
                  development, we build secure mobile apps and custom solutions.
                </p>
              </div>
            </div>

            <NuxtLink to="/services"
              class="inline-flex py-32 space-x-2 text-primary font-medium hover:text-primary/80 transition-colors">
              <p class=" text-xl lg:text-2xl underline">Explore our services→</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <HitUs />
    <AppFooter />
  </div>
</template>

<script setup>
import { AppFooter } from '#components'

const formData = ref({
  email: '',
  firstName: '',
  lastName: '',
  budget: '',
  message: '',
  sendNda: false
});

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value);
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.bg-hero{
  background-image: ;
}


</style>