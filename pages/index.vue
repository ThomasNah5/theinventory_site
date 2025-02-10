<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div class="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 order-1 lg:order-none">
            <h1 class="text-6xl font-bold leading-tight max-w-lg mx-auto lg:mx-0 text-center lg:text-left lg:text-8xl">
              <span class="block">Your Dreams.</span>
              <span class="block">Our Code.</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              We transform innovative ideas into powerful digital solutions that drive business growth and user
              satisfaction.
            </p>
            <div class="flex space-x-4 justify-center lg:justify-start">
              <div class="relative">

                <NuxtLink to="/contact"
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
    <section class="bg-gray-100 text-black py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-12">
          <div class="text-center">
            <h2 class="text-[8rem] sm:text-[10rem] font-bold leading-none tracking-tight text-primary">
              2,598,122
            </h2>
          </div>
          <div class="max-w-4xl mx-auto text-center">
            <p class="text-2xl sm:text-3xl lg:text-4xl leading-relaxed">
              We're a team of passionate developers dedicated to transforming businesses through innovative digital
              solutions and exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Some Section -->
    <section class="py-32 bg-white ">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <!-- Discover -->

            <!-- Design -->
            <div class="space-y-4">
              <div class="text-4xl">🎨</div>
              <h3 class="text-2xl font-bold">Design</h3>
              <p class="text-gray-600">
                We are focused on delivering a user-centric experirnce that drives results.
              </p>
            </div>

            <!-- Develop -->
            <div class="space-y-4">
              <div class="text-4xl">💻</div>
              <h3 class="text-2xl font-bold">Develop</h3>
              <p class="text-gray-600">
                Our collaborative team of developers and creatives ensures quality code for each project.
              </p>
            </div>

            <!-- Deploy -->
            <div class="space-y-4">
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


    <!-- Story Section -->

    <section class="py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <!-- Decorative tape -->
            <div class="absolute -top-4 left-8 w-24 h-6 bg-primary/20 transform -rotate-6"></div>
            <!-- Image container with shadow -->
            <div class="relative bg-white p-4 shadow-lg transform rotate-2">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team collaboration"
                class="w-full h-auto" />
            </div>
          </div>
          <div class="space-y-8">
            <h2 class="text-4xl sm:text-5xl font-bold">THE STORY</h2>
            <div class="space-y-6 text-lg text-gray-600">
              <p>
                the inventory was first conceived in 2021, sparked by frustration with inefficient processes in the
                systems around us and inspired by the transformative potential of technology to tackle real-world
                challenges.

              </p>
              <p>
                the inventory was born—not just as a company, but as a mission.

              </p>
              <p>
                We noticed a common thread among many software solutions: while they aimed to solve problems, they often
                lacked one vital element—context. These products were developed without fully understanding the societal
                and local realities of the people they served.
              </p>
              <p>
                Our aim is to develop systems that, from the outset, incorporate local user and societal contexts,
                producing solutions that genuinely speak to the needs of the communities for which they are intended.
                By placing context at the forefront, we are reimagining what it means to create meaningful
                technology—tools that are not only functional but transformative, fostering growth and opening new
                possibilities.
              </p>
            </div>
            <NuxtLink to="/about"
              class=" text-xl underline inline-flex items-center space-x-2 text-primary font-medium hover:text-primary/80 transition-colors">
              <span class="text-black">Learn more about our journey</span>
              <span class="text-black">→</span>
            </NuxtLink>
          </div>
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




          <NuxtLink to="/services"
            class="inline-flex space-x-2 text-primary font-medium hover:text-primary/80 transition-colors">

            <p class=" text-xl lg:text-2xl underline">Explore our services→</p>


          </NuxtLink>

        </div>

        <!-- Added Services Link -->

      </div>

    
    </section>

    
    
    <!-- Contact Section -->
    <section class="pt-32 pb-16">
      <div class="max-w-auto mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold mb-4">WE'D LOVE TO HEAR FROM YOU</h1>
          <p class="text-xl text-gray-600">Have a project in mind? Reach out—we're here
            to help.</p>
        </div>

        <div class="grid lg:grid-cols-5 gap-8">
          <!-- Contact Form -->
          <div class="lg:col-span-3 space-y-6">
            <h2 class="text-2xl font-bold mb-6">Drop us a line</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm mb-1">
                  <span class="text-red-500">*</span>
                  Email
                </label>
                <input type="email" v-model="formData.email" required
                  class="w-full px-3 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
              </div>

              <div>
                <label class="block text-sm mb-1">
                  <span class="text-red-500">*</span>
                  First name
                </label>
                <input type="text" v-model="formData.firstName" required
                  class="w-full px-3 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
              </div>

              <div>
                <label class="block text-sm mb-1">
                  <span class="text-red-500">*</span>
                  Last name
                </label>
                <input type="text" v-model="formData.lastName" required
                  class="w-full px-3 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
              </div>

              <div>
                <label class="block text-sm mb-1">Budget</label>
                <select v-model="formData.budget"
                  class="w-full px-3 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm">
                  <option value="">Please Select</option>
                  <option value="10-25k">$10,000 - $25,000</option>
                  <option value="25-50k">$25,000 - $50,000</option>
                  <option value="50-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              <div>
                <label class="block text-sm mb-1">How can we help you?</label>
                <textarea v-model="formData.message" rows="4"
                  class="w-full px-3 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm"></textarea>
              </div>

              <div class="flex items-center">
                <input type="checkbox" id="nda" v-model="formData.sendNda"
                  class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label for="nda" class="ml-2 text-sm text-gray-700">Send me an NDA</label>
              </div>

              <div class="pt-2">
                <div class="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
              </div>

              <!-- Submit Button -->

              <div class="pt-1">
                <div class="relative inline-block">
                  <!-- Black background perspective -->
                  <button type="submit"
                    class="relative px-8 py-3 rounded-md bg-black text-white hover:bg-primary/90 transition-colors font-medium block">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <!-- CTO Section -->
          <div class="lg:col-span-2">
            <div class="bg-gray-200 rounded-xl overflow-hidden">
              <div class="p-12">
                <h2 class="text-6xl font-bold text-gray-800 leading-tight">
                  Let's Build Something
                  <span class="text-orange-400">Amazing</span>
                  Together
                </h2>
                <p class="mt-6 text-xl text-gray-600">
                  Transform your vision into reality with our expert development team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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