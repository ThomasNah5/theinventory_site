<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8 bg-[#fafafa] relative overflow-hidden">
    <div class="relative w-full max-w-5xl mx-auto p-4 sm:p-8">
      <!-- Red Decorative Dots -->
      <div class="absolute w-3.5 h-3.5 sm:w-5 sm:h-5 bg-[#d00] rounded-full z-0 top-[5%] left-0"></div>
      <div class="absolute w-3.5 h-3.5 sm:w-5 sm:h-5 bg-[#d00] rounded-full z-0 top-[10%] right-[5%]"></div>
      <div class="absolute w-3.5 h-3.5 sm:w-5 sm:h-5 bg-[#d00] rounded-full z-0 bottom-[5%] left-[10%]"></div>

      <!-- Team Members Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-12 lg:gap-4 justify-items-center items-center relative z-10">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="index" 
          class="relative w-[150px] sm:w-[260px] transition-transform duration-300 ease-in-out cursor-pointer hover:z-50 hover:scale-105 hover:!rotate-0 hover:shadow-2xl group"
          :class="getCardClasses(index)"
        >
          <div class="bg-white pt-2 px-2 pb-10 sm:pt-4 sm:px-4 sm:pb-12 shadow-lg transition-shadow duration-300">
            <img 
              :src="member.image" 
              :alt="member.name" 
              class="w-full aspect-[3/4] object-cover grayscale contrast-[1.1] block" 
            />
          </div>
          <div class="absolute bottom-2 sm:bottom-2 inset-x-0 text-center opacity-90">
            <h3 class="font-bold text-[0.75rem] sm:text-sm text-gray-800 m-0">{{ member.name }}</h3>
            <p class="text-[0.65rem] sm:text-xs text-gray-500 m-0">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Text -->
    <div class="mt-12 sm:mt-20 text-center font-sans text-xs sm:text-sm leading-relaxed text-black font-medium tracking-wider uppercase">
      <p>THE INVENTORY TEAM</p>
      <p>CREATIVE COLLECTIVE</p>
      <p>EST. 2024</p>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    name: "Team Member Name",
    role: "Role / Title",
    image: "/img/team/Image Dithering@2x.png"
  },
  {
    name: "Team Member Name",
    role: "Role / Title",
    image: "/img/team/Image Dithering@2x (1).png"
  },
  {
    name: "Team Member Name",
    role: "Role / Title",
    image: "/img/team/Image Dithering@2x (2).png"
  },
  {
    name: "Team Member Name",
    role: "Role / Title",
    image: "/img/team/Image Dithering@2x (3).png"
  },
  {
    name: "Team Member Name",
    role: "Role / Title",
    image: "/img/team/Image Dithering@2x (4).png"
  }
];

const getCardClasses = (index) => {
  const transforms = [
    'rotate-[-6deg] translate-y-5', // Card 1
    'rotate-[4deg] -translate-y-5 z-20', // Card 2 - added z-20 to match original css z-index: 2
    'rotate-[-3deg] translate-y-2.5', // Card 3
    'rotate-[5deg] -translate-y-2.5 translate-x-2.5 sm:-translate-y-2.5 sm:translate-x-5', // Card 4
    'rotate-[-5deg] translate-y-2.5 -translate-x-2.5 sm:translate-y-2.5 sm:-translate-x-5'  // Card 5
  ];
  return transforms[index] || '';
};
</script>
