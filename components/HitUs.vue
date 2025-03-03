<template>
      <div>
            <section class="pt-32 pb-16">
                  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                        <div class="text-center mb-12">
                              <h1 class="text-6xl font-bold mb-4">WE'D LOVE TO HEAR FROM YOU</h1>
                              <p class="text-xl text-gray-600">Have a project in mind? Reach out—we're here
                                    to help.</p>
                        </div>
                              <!-- Contact Form -->
                              <div class="space-y-6">
                                    <h2 class="text-2xl font-bold mb-6">Drop us a line</h2>
                                    <form action="https://formspree.io/f/movjorrj" method="POST" class="space-y-4">
                                          <div>
                                                <label class="block text-sm mb-1">
                                                      <span class="text-red-500">*</span>
                                                      Email
                                                </label>
                                                <input type="email" name="email" v-model="formData.email" required
                                                      class="w-2/4 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
                                          </div>

                                          <div>
                                                <label class="block text-sm mb-1">
                                                      <span class="text-red-500">*</span>
                                                      First name
                                                </label>
                                                <input type="text" name="firstName" v-model="formData.firstName"
                                                      required
                                                      class="w-2/4 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
                                          </div>

                                          <div>
                                                <label class="block text-sm mb-1">
                                                      <span class="text-red-500">*</span>
                                                      Last name
                                                </label>
                                                <input type="text" name="firstName" v-model="formData.lastName" required
                                                      class="w-2/4 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm" />
                                          </div>

                                          <div>
                                                <label class="block text-sm mb-1">Budget</label>
                                                <select name="budget" v-model="formData.value"
                                                      class="w-2/4 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm">
                                                      <option value="">Please Select</option>
                                                      <option value="10-25k">$10,000 - $25,000</option>
                                                      <option value="25-50k">$25,000 - $50,000</option>
                                                      <option value="50-100k">$50,000 - $100,000</option>
                                                      <option value="100k+">$100,000+</option>
                                                </select>
                                          </div>

                                          <div>
                                                <label class="block text-sm mb-1">How can we help you?</label>
                                                <textarea type="text" name="message" rows="4"
                                                      class="w-2/4 py-2 rounded border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-sm"></textarea>
                                          </div>

                                          <div class="flex items-center">
                                                <input type="checkbox" id="nda" name="sendNda" v-model="formData.value"
                                                      class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                                <label for="nda" class="ml-2 text-sm text-gray-700">Send me an
                                                      NDA</label>
                                          </div>

                                          <div class="pt-2">
                                                <div class="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
                                          </div>

                                          <!-- Submit Button -->
                                          <div class="pt-1">
                                                <div class="relative inline-block">
                                                      <button type="submit"
                                                            class="relative px-8 py-3 rounded-md bg-black text-white hover:bg-primary/90 transition-colors font-medium block">
                                                            Send Message
                                                      </button>
                                                </div>
                                          </div>
                                    </form>
                              </div>
                  </div>
            </section>
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