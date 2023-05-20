<template>
  <!-- Grid -->
  <div class="mt-4 grid lg:grid-cols-2 gap-8">
    <!-- Card -->
    <div v-for="post in data.posts" class="group rounded-xl overflow-hidden">
    <NuxtLink :to='"/news/"+post.slug'>
      <div class="sm:flex">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-52">
          <img class="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl" :src="post.image" alt="Image Description">
        </div>

        <div class="grow mt-4 sm:mt-0 sm:mr-6 px-4 sm:px-0">
          <h3 class="text-md font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
            {{ post.title }}
          </h3>
          <p class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
            {{ post.description }}
          </p>
          <p class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:bg-primary/80 text-sm border rounded-full p-2">
            تابع القراءة
            <svg class="w-2.5 h-2.5 rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </p>
        </div>
      </div>
    </NuxtLink>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</template>
<script setup>
import data from "@/assets/dummy.json"
defineProps({category: Number})
</script>