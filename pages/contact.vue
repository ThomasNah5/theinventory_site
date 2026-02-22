<template>
  <div class="min-h-screen bg-brand-beige">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Header -->
      <div class="mb-16">
        <h1 class="page-title mb-4">Let's talk.</h1>
        <p class="page-text">
          We don't do inquiry forms.<br />
          Just send us a direct email and we'll respond within two business days.
        </p>
      </div>

      <!-- Email CTA -->
      <div class="mb-20">
        <a href="mailto:hello@theinventory.studios" class="email-link">
          hello@theinventory.studios
        </a>
      </div>

      <!-- What to include -->
      <div class="border-t border-black/10 pt-12 space-y-8">
        <h2 class="section-heading">What to include</h2>

        <div class="space-y-6">
          <div>
            <h3 class="item-heading">What you're building</h3>
            <p class="page-text">A sentence or two. No pitch deck needed yet.</p>
          </div>
          <div>
            <h3 class="item-heading">Where you are now</h3>
            <p class="page-text">Idea, in progress, in production — we don't mind any of these.</p>
          </div>
          <div>
            <h3 class="item-heading">What kind of help you need</h3>
            <p class="page-text">Design, engineering, both, or you're not sure. Any of those is fine.</p>
          </div>
        </div>
      </div>

      <!-- Location note -->
      <div class="mt-20 pt-12 border-t border-black/10">
        <p class="page-text text-sm text-gray-500">
          Based in Monrovia, Liberia. Working across the continent and beyond.
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact — The Inventory',
  description: 'Reach out to The Inventory. No forms — just a direct email.',
})
</script>

<style scoped>
.page-title {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #000;
}
.email-link {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: clamp(1.1rem, 3vw, 1.75rem);
  color: #000;
  text-decoration: underline;
  word-break: break-all;
  transition: opacity 0.15s;
}
.email-link:hover { opacity: 0.55; }
.section-heading {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #000;
}
.item-heading {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #000;
  margin-bottom: 4px;
}
.page-text {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.8;
}
</style>
