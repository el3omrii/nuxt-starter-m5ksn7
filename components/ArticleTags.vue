<template>
  <div class="flex gap-x-4 py-2 mt-8 border-y">
    <span v-if="category.parent" class="rounded-full py-2 px-4 bg-primary text-white">
      <NuxtLink :to="`/category/${category.parent.slug}`">{{ category.parent.name }}</NuxtLink>  
    </span>
    <span class="rounded-full py-2 px-4 bg-primary text-white">
      <NuxtLink :to="`/category/${category.slug}`">{{ category.name }}</NuxtLink>  
    </span>
    <template v-if="tags">
      <span v-for="tag in tags" class="flex items-center rounded-full p-2 bg-primary text-white">
        <TagIcon class="w-5 h-5 ml-2" />
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
