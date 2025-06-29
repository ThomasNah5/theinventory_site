<template>
  <div class="flex items-center justify-center py-12 bg-gray-100 px-4">
    <div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
      <!-- Contact Form -->
      <h2 class="text-2xl font-bold mb-6">Drop us a line</h2>
      <form action="https://formspree.io/f/movjorrj" method="POST" class="space-y-4">
        <div>
          <label class="block text-sm mb-1">
            <span class="text-red-500">*</span> Email
          </label>
          <input type="email" name="email" required
            class="w-full py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
        </div>

        <div>
          <label class="block text-sm mb-1">
            <span class="text-red-500">*</span> First name
          </label>
          <input type="text" name="firstName" required
            class="w-full py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
        </div>

        <div>
          <label class="block text-sm mb-1">
            <span class="text-red-500">*</span> Last name
          </label>
          <input type="text" name="lastName" required
            class="w-full py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
        </div>

        <div>
          <label class="block text-sm mb-1">Budget</label>
          <select name="budget"
            class="w-full py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm">
            <option value="">Please Select</option>
            <option value="0-1k">$0 - $1,000</option>
            <option value="1-5k">$1,000 - $5,000</option>
            <option value="5-10k">$5,000 - $10,000</option>
            <option value="10-25k">$10,000 - $25,000</option>
            <option value="25-50k">$25,000 - $50,000</option>
            <option value="50-100k">$50,000 - $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
        </div>

        <div>
          <label class="block text-sm mb-1">How can we help you?</label>
          <textarea name="message" rows="4"
            class="w-full py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm"></textarea>
        </div>

        <div class="flex items-center">
          <input type="checkbox" id="nda" name="sendNda"
            class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <label for="nda" class="ml-2 text-sm text-gray-700">Send me an NDA</label>
        </div>

        <div class="pt-2">
          <div class="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
        </div>

        <!-- Submit Button -->
        <div class="pt-1 text-center">
          <button type="submit"
            class="px-8 py-3 rounded-md bg-black text-white hover:bg-gray-900 transition-colors font-medium">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>

</template>

<script setup>
import { AppFooter } from '#components'

const formData = ref({
  email: '',
  firstName: '',
  lastName: '',
  budget: '',
  message: '',
  sendNda: false
});

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value);
};
</script>
