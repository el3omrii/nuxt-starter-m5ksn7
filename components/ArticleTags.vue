<template>
  <div class="flex flex-wrap sm:justify-start justify-center gap-4 py-2 mt-8 border-y sm:text-base text-xs">
    <span v-if="category.parent" class="rounded-full py-2 sm:px-4 px-2 bg-primary text-white whitespace-nowrap">
      <NuxtLink :to="`/category/${category.parent.slug}`">{{ category.parent.name }}</NuxtLink>  
    </span>
    <span class="rounded-full py-2 sm:px-4 px-2 bg-primary text-white whitespace-nowrap">
      <NuxtLink :to="`/category/${category.slug}`">{{ category.name }}</NuxtLink>  
    </span>
    <template v-if="tags">
      <span v-for="tag in tags" class="flex items-center rounded-full p-2 bg-primary text-white whitespace-nowrap">
        <TagIcon class="sm:w-5 w-4 sm:h-5 h-4 sm:ml-2 ml-1" />
        <NuxtLink :to="`/tag/${tag.slug}`">{{ tag.name }}</NuxtLink>  
      </span>
    </template>
  </div>
</template>
<script setup>
import { TagIcon } from '@heroicons/vue/24/outline';
defineProps({
  category: Object,
  tags: Object,
});
</script>
