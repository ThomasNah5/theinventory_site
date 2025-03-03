<template>
      <div class="min-h-screen bg-white">
            <!-- Hero Section -->

            <section class="pt-44 pb-16 text-black">
                  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p class="text-5xl md:text-6xl lg:text-9xl font-bold mb-12">
                              SOFTWARE<br />
                              DEVELOPMENT
                        </p>
                        <div class="max-w-3xl  lg:ml-auto lg:mt-44 lg:mb-64">
                              <p class="text-2xl lg:text-5xl leading-relaxed">
                                    Through a collaborative approach, we ensure quality software
                                    that meets the highest standards, every time.
                              </p>
                        </div>
                  </div>
            </section>

            <!-- Services Section -->
            <section class="py-24 bg-white">
                  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-6xl lg:text-8xl font-bold mb-32">
                              What this<br />
                              includes
                        </h2>

                        <div class="space-y-32">
                              <!-- Product Discovery -->


                              <!-- Product Design -->
                              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <nuxt-link to="">
                                          <h3 class="text-4xl font-bold">Mobile App development</h3>
                                    </nuxt-link>
                                    <p class="text-xl text-gray-600">
                                          We create mobile application that are tailored for your needs,
                                          for iOS and Android.
                                    </p>

                              </div>

                              <!-- Software Engineering -->
                              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <nuxt-link to="">
                                          <h3 class="text-4xl font-bold">Web App Development</h3>
                                    </nuxt-link>
                                    <p class="text-xl text-gray-600">
                                          We create seamless web applications by designing great user interfaces
                                          and backend functionalities.
                                    </p>
                              </div>

                        </div>

                        <!-- Added Services Link -->
                  </div>
            </section>


            <section class="py-24 bg-white">
                  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 class="text-4xl font-bold mb-8">Ready to start your project?</h2>
                        <div class="relative inline-block">
                              <div class="absolute inset-0 bg-black rounded-md transform translate-x-1 translate-y-1">
                              </div>
                              <NuxtLink to="/contact"
                                    class="relative px-8 py-4 rounded-md bg-orange-400 text-white hover:bg-primary/90 transition-colors block">
                                    Get In Touch
                              </NuxtLink>
                        </div>
                  </div>
            </section>


      </div>
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

</template>
