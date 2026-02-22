<template>
  <div class="min-h-screen bg-brand-beige">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Not found -->
      <div v-if="!post" class="text-center py-32">
        <p class="page-subtitle mb-6">This post doesn't exist.</p>
        <NuxtLink to="/blog" class="back-link">← Back to blog</NuxtLink>
      </div>

      <!-- Post -->
      <article v-else>
        <!-- Meta -->
        <div class="mb-12">
          <NuxtLink to="/blog" class="back-link block mb-8">← Blog</NuxtLink>
          <p class="post-date mb-3">{{ formatDate(post.date) }}</p>
          <h1 class="post-title mb-4">{{ post.title }}</h1>
          <p class="post-description mb-6">{{ post.description }}</p>
          <div v-if="post.tags?.length" class="flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
          </div>
        </div>

        <!-- Divider -->
        <hr class="border-black/10 mb-12" />

        <!-- Body -->
        <div class="prose-content">
          <ContentRenderer :value="post" />
        </div>
      </article>

    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: post.value ? `${post.value.title} — The Inventory` : 'Post Not Found',
  description: post.value?.description,
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.back-link {
  font-family: 'Agrandir', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #555;
  text-decoration: underline;
  transition: opacity 0.15s;
}
.back-link:hover { opacity: 0.6; }

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
  font-size: 2rem;
  color: #000;
  line-height: 1.25;
}
.post-description {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #555;
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
.page-subtitle {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #555;
}

/* Prose styling for ContentRenderer output */
.prose-content :deep(h1),
.prose-content :deep(h2),
.prose-content :deep(h3) {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  color: #000;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.25;
}
.prose-content :deep(h2) { font-size: 1.35rem; }
.prose-content :deep(h3) { font-size: 1.1rem; }
.prose-content :deep(p) {
  font-family: 'Agrandir', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}
.prose-content :deep(strong) { font-weight: 700; }
.prose-content :deep(em) { font-style: italic; }
.prose-content :deep(ul),
.prose-content :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}
.prose-content :deep(li) {
  font-family: 'Agrandir', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.7;
  margin-bottom: 0.35rem;
}
.prose-content :deep(blockquote) {
  border-left: 3px solid #000;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #555;
  font-style: italic;
}
.prose-content :deep(code) {
  background: #f0ede8;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.875rem;
}
.prose-content :deep(pre) {
  background: #1a1a1a;
  color: #e8e3da;
  padding: 1.25rem;
  border-radius: 6px;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}
</style>
