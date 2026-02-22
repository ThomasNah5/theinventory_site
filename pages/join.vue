<template>
  <div class="min-h-screen bg-brand-beige">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Header -->
      <div class="mb-16">
        <h1 class="page-title mb-4">Join Us</h1>
        <p class="page-text">
          We're a small team. That's intentional.<br />
          We hire slowly, carefully, and only when the fit is right.
        </p>
      </div>

      <!-- What we look for -->
      <section class="mb-16 space-y-6">
        <p class="page-text">
          We don't have a list of open roles. What we have is a belief: the right people are always welcome.
        </p>
        <p class="page-text">
          If you're a builder — engineer, designer, or otherwise — who cares deeply about the African tech ecosystem and wants to work on problems that actually matter, we want to hear from you.
        </p>
        <p class="page-text">
          We care more about how you think than what your CV says.
        </p>
      </section>

      <!-- Principles -->
      <section class="mb-16 space-y-8">
        <div class="space-y-2">
          <h3 class="page-heading">What we value</h3>
          <p class="page-text">Clarity of thought. Ownership. Craft. Speed without shortcuts. Honesty about what you don't know.</p>
        </div>
        <div class="space-y-2">
          <h3 class="page-heading">What we don't value</h3>
          <p class="page-text">Titles. Pedigree. People who wait to be told what to do.</p>
        </div>
      </section>

      <!-- CTA -->
      <div class="border-t border-black/10 pt-12">
        <p class="page-text mb-6">Send us a short note about yourself and what you've built. No formal application needed.</p>
        <a
          href="mailto:hello@theinventory.studios"
          class="cta-link"
        >
          hello@theinventory.studios →
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Join Us — The Inventory',
  description: 'We hire slowly and carefully. If you care about building things that matter, reach out.',
})
</script>

<style scoped>
.page-title {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #000;
}
.page-heading {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
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
