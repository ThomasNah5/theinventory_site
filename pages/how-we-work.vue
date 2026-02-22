<template>
  <div class="min-h-screen bg-brand-beige">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Header -->
      <div class="mb-16">
        <h1 class="page-title mb-4">How We Work</h1>
        <p class="page-text">
          A concise process. No mystery, no bloat.
        </p>
      </div>

      <!-- Steps -->
      <section class="space-y-16">
        
        <div class="space-y-3">
          <p class="step-number">01</p>
          <h2 class="step-title">Understand the problem</h2>
          <p class="page-text">
            We start by listening — to the user, the context, the constraints. We ask uncomfortable questions early so we don't build the wrong thing beautifully. This phase ends with a shared understanding, not a pitch deck.
          </p>
        </div>

        <div class="space-y-3">
          <p class="step-number">02</p>
          <h2 class="step-title">Define scope ruthlessly</h2>
          <p class="page-text">
            Scope creep is the silent killer of good products. We define what the first version does — and what it intentionally does not. Every decision gets pressure-tested against usefulness.
          </p>
        </div>

        <div class="space-y-3">
          <p class="step-number">03</p>
          <h2 class="step-title">Design with context</h2>
          <p class="page-text">
            Design isn't decoration. We prototype fast, test with real users in real environments, and revise without ego. The goal is a clear, functional experience — not winning awards.
          </p>
        </div>

        <div class="space-y-3">
          <p class="step-number">04</p>
          <h2 class="step-title">Build carefully, ship fast</h2>
          <p class="page-text">
            We favour iteration over perfection. Code that ships and gets feedback beats code that waits in a review queue. We build with maintainability in mind — systems others can understand and extend.
          </p>
        </div>

        <div class="space-y-3">
          <p class="step-number">05</p>
          <h2 class="step-title">Measure and improve</h2>
          <p class="page-text">
            Launch is not the end. We track what matters, ignore what doesn't, and keep improving based on what users actually do — not what they say they'll do.
          </p>
        </div>

      </section>

      <!-- CTA -->
      <div class="border-t border-black/10 mt-20 pt-12">
        <p class="page-text mb-6">Want to work with us?</p>
        <NuxtLink to="/contact" class="cta-link">Get in touch →</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'How We Work — The Inventory',
  description: 'A concise, honest overview of how The Inventory approaches product design and development.',
})
</script>

<style scoped>
.page-title {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #000;
}
.step-number {
  font-family: 'Agrandir', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #999;
}
.step-title {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 1.35rem;
  color: #000;
}
.page-text {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.8;
}
.cta-link {
  font-family: 'Agrandir', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #000;
  text-decoration: underline;
  transition: opacity 0.15s;
}
.cta-link:hover { opacity: 0.6; }
</style>
