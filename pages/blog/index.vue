<template>
  <div class="min-h-screen bg-brand-beige">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Header -->
      <div class="mb-16">
        <h1 class="page-title mb-4">Blog</h1>
        <p class="page-subtitle">Thinking out loud. Building in the open.</p>
      </div>

      <!-- Post List -->
      <div v-if="posts.length" class="space-y-16">
        <article v-for="post in posts" :key="post.path" class="group">
          <NuxtLink :to="post.path" class="block">
            <p class="post-date mb-2">{{ formatDate(post.date) }}</p>
            <h2 class="post-title mb-3 group-hover:opacity-70 transition-opacity">
              {{ post.title }}
            </h2>
            <p class="post-description">{{ post.description }}</p>
            <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="post-tag"
              >{{ tag }}</span>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-24">
        <p class="page-subtitle">No posts yet. Check back soon.</p>
      </div>

    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

useSeoMeta({
  title: 'Blog — The Inventory',
  description: 'Thinking out loud. Building in the open.',
})
</script>

<style scoped>
.page-title {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #000;
}
.page-subtitle {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #555;
}
.post-date {
  font-family: 'Agrandir', sans-serif;
  font-size: 0.8rem;
  color: #888;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.post-title {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000;
  line-height: 1.3;
}
.post-description {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.7;
}
.post-tag {
  font-family: 'Agrandir', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #555;
  border: 1px solid #ccc;
  padding: 2px 10px;
  border-radius: 999px;
}
</style>
