<template>
  <div class="min-h-screen bg-white">
    <section class="pt-16 pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 class="page-title mb-12">
          PRODUCT<br />DESIGN
        </h1>

        <div class="max-w-3xl lg:ml-auto lg:mt-32 lg:mb-48">
          <p class="page-intro">
            Clarity before aesthetics. Purpose before polish.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-24">

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 class="section-heading">Research & Discovery</h2>
            <p class="section-text">
              Before any wireframe is drawn, we spend time understanding who we're designing for and what they actually need — not what they say they need. We interview, observe, and map real workflows to find the gaps worth solving.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 class="section-heading">Wireframing & Prototyping</h2>
            <p class="section-text">
              We move quickly from discovery to lo-fi. Wireframes communicate structure and flow before visual decisions get in the way. Prototypes get into users' hands early — when changes are cheap.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 class="section-heading">UI Design</h2>
            <p class="section-text">
              Visual design that earns its elegance. We create interfaces that are coherent, accessible, and fast to navigate — optimized for how people actually read and interact with software, not how screens look in portfolio shots.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 class="section-heading">Design Systems</h2>
            <p class="section-text">
              Well-designed products need a shared language behind them. We build component libraries and design systems that unify the product experience and make future work faster.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-brand-beige">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-8" style="font-family: 'Agrandir', sans-serif;">Ready to start?</h2>
        <NuxtLink
          to="/contact"
          class="inline-block px-8 py-4 bg-black text-white font-semibold transition-opacity hover:opacity-75"
          style="font-family: 'Agrandir', sans-serif;"
        >
          Get In Touch →
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Product Design — The Inventory',
  description: 'Research-led product design: discovery, wireframing, UI design, and design systems.',
})
</script>

<style scoped>
.page-title {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: clamp(3rem, 8vw, 8rem);
  color: #000;
  line-height: 1;
}
.page-intro {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: clamp(1.25rem, 3vw, 2.5rem);
  line-height: 1.5;
  color: #1a1a1a;
}
.section-heading {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000;
}
.section-text {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
}
</style>
