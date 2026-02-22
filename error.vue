<template>
  <div class="min-h-screen bg-brand-beige flex flex-col items-center justify-center px-4">
    
    <div class="text-center max-w-md">
      
      <!-- Error code -->
      <p class="error-code mb-2">{{ error.statusCode }}</p>

      <!-- Title -->
      <h1 class="error-title mb-6">
        {{ title }}
      </h1>

      <!-- Message -->
      <p class="error-text mb-12">{{ message }}</p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/" class="btn-primary" @click="handleError">
          Go home
        </NuxtLink>
        <button class="btn-secondary" @click="handleError">
          Go back
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})

const title = computed(() => {
  if (props.error.statusCode === 404) return 'Page not found.'
  if (props.error.statusCode === 403) return 'Access denied.'
  if (props.error.statusCode >= 500) return 'Something went wrong.'
  return 'An error occurred.'
})

const message = computed(() => {
  if (props.error.statusCode === 404)
    return "The page you're looking for doesn't exist or may have moved."
  if (props.error.statusCode >= 500)
    return "We're aware of the problem and working on it. Try again in a moment."
  return props.error.statusMessage || 'An unexpected error occurred.'
})

function handleError() {
  clearError({ redirect: '/' })
}

useSeoMeta({
  title: `${props.error.statusCode} — The Inventory`,
})
</script>

<style scoped>
.error-code {
  font-family: 'Agrandir', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #999;
}
.error-title {
  font-family: 'Agrandir', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #000;
  line-height: 1.2;
}
.error-text {
  font-family: 'Agrandir', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
}
.btn-primary {
  font-family: 'Agrandir', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  background: #000;
  color: #fff;
  padding: 0.65rem 1.5rem;
  transition: opacity 0.15s;
  text-align: center;
}
.btn-primary:hover { opacity: 0.75; }
.btn-secondary {
  font-family: 'Agrandir', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #000;
  border: 1px solid #000;
  padding: 0.65rem 1.5rem;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  text-align: center;
}
.btn-secondary:hover {
  background: #000;
  color: #fff;
}
</style>
