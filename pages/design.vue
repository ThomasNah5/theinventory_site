<template>
      <div class="min-h-screen bg-white">
            <!-- Hero Section -->

            <section class="pt-44 pb-16 text-black">
                  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 class="text-6xl lg:text-9xl font-bold mb-12">
                              PRODUCT DESIGN<br />
                        </h1>
                        <div class="max-w-3xl  lg:ml-auto lg:mt-44 lg:mb-64">
                              <p class="text-2xl lg:text-5xl leading-relaxed">
                                    We believe that a successful software product starts with an intuitive design. Our
                                    team excels in creating user interfaces with effortless usability, ensuring every
                                    interaction is as engaging as it is efficient.
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
                                    <h3 class="text-4xl font-bold">UI/UX</h3>
                                    <p class="text-xl text-gray-600">
                                          After thorough discovery, we design interfaces that captivate—putting user
                                          experience at the heart of every pixel.
                                    </p>

                              </div>

                              <!-- Software Engineering -->
                              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <h3 class="text-4xl font-bold">Design Systems</h3>
                                    <p class="text-xl text-gray-600">
                                          We build design systems that unifies all platforms,
                                          keeping everything consistency and speeding up your workflow.
                                    </p>
                              </div>

                              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <h3 class="text-4xl font-bold">Prototyping</h3>
                                    <p class="text-xl text-gray-600">
                                          From idea to a working product, we help
                                          investors and users alike see your product’s potential.
                                    </p>
                              </div>

                              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <h3 class="text-4xl font-bold">User Testing</h3>
                                    <p class="text-xl text-gray-600">
                                          Validating usability and functionality with real users, we ensure your product
                                          is ready for launch.
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


