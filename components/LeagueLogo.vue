<template>
  <div class="flex items-center">
    <img :src="league.logo" :alt="league.name" class="ml-4 w-24 h-auto max-h-20 object-contain" />
    <span v-if="showName" class="sm:text-lg text-base">{{ league.name }}</span>
  </div>
</template>
<script setup>
defineProps({
    league: Object,
    showName: {
      type: Boolean,
      default: true,
    }
})
</script>