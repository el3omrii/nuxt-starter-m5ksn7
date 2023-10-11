<template>
<nav class="flex text-gray-800 py-3 rounded-lg" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3 sm:text-sm text-xs">
    <li class="inline-flex items-center">
      <NuxtLink to="/" class="hover:text-black inline-flex items-center">
        <HomeIcon class="w-4 h-4 ml-1 md:ml-2" />
        الرئيسية
      </NuxtLink>
    </li>
    <li v-for="link in links" :key="link">
      <div v-if="link.slug" class="flex items-center">
        <ChevronLeftIcon class="w-4 h-4" />
        <NuxtLink :to="`/category/${link.slug}`" class="hover:text-black mr-1 md:mr-2 font-medium whitespace-nowrap">{{ link.text }}</NuxtLink>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <ChevronLeftIcon class="w-4 h-4" />
        <span class="text-gray-400 mr-1 md:mr-2 font-medium">{{ title }}</span>
      </div>
    </li>
  </ol>
</nav>
</template>
<script setup>
import { HomeIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
const props = defineProps({
    category: Object,
    title: String
})
const links = {
    1: {
      text: props.category?.parent ? props.category.parent.name : null, 
      slug: props.category?.parent ? props.category.parent.slug : null, 
    },
    2: {
      text: props.category?.name,
      slug: props.category?.slug
    }
  }
</script>