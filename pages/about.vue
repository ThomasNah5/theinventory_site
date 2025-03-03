<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->


    <section class="pt-44 pb-16 bg-transparent text-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-6xl lg:text-8xl font-bold mb-12">
          GET TO KNOW <br />
          ABOUT US
        </h1>
        <div class="max-w-3xl">
          <p class="text-2xl lg:text-4xl leading-relaxed">
            the inventory is a company committed to shaping the future of technology in Africa.
            We combine creativity and innovation to deliver solutions that drive change.
            Our mission is to develop digital tools and products that improve efficiency
            and create lasting impacts across industries.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-2 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-end">
          <div class="max-w-3xl lg:w-1/2 lg:ml-auto">
            <p class="text-2xl lg:text-3xl leading-relaxed">
              Our mission at the inventory is to shape Africa's technological future by creating innovative solutions
              that transform industries, enhance efficiency, and empower communities.
            </p>
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
            <div class="space-y-6 text-2xl text-gray-600">
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
          </div>
        </div>
      </div>
    </section>

    <!-- Principles Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl lg:text-7xl font-bold mb-16">Our Principles</h2>
        <div class="max-w-3xl mb-16">
          <p class="text-xl lg:text-2xl leading-relaxed">
            In building great products, we place the way they impact users at the forefront.<br />
            We prioritize understanding their needs, considering their context, and designing solutions that empower and
            resonate with their
            everyday lives.
          </p>
        </div>
        <div class="grid lg:grid-cols-2 gap-16">
          <div class="space-y-12">
            <div>
              <h3 class="text-2xl font-bold mb-4">Design with Context</h3>
              <p class="text-xl text-gray-600">
                We prioritize understanding the societal and local realities of our users, ensuring every product we
                build is relevant, impactful, and meaningful.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4">Create Opportunities</h3>
              <p class="text-xl text-gray-600">
                Our work is guided by the mission to enable individuals and businesses to thrive in their environments.
              </p>
            </div>
          </div>
          <div class="space-y-12">
            <div>
              <h3 class="text-2xl font-bold mb-4">Build for Trust and Safety</h3>
              <p class="text-xl text-gray-600">
                We hold the responsibility to build products that are secure and reliable, and uphold trust at every
                step of the way.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-4">Innovate for Impact</h3>
              <p class="text-xl text-gray-600">
                Driven by a vision to address real-world challenges, we focus on crafting solutions that make a
                difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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