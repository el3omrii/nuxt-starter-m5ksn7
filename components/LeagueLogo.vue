<template>
  <div class="flex items-center">
    <img :src="league.logo" :alt="league.name" class="ml-4" 
         :class="{'w-24 h-auto': league.id == 202, 'h-14 w-auto -my-2': league.id == 2, 'h-14 w-auto -my-4': league.id == 135, 'w-auto h-16 -my-4': league.id == 12, 'h-16 w-auto -my-4': league.id == 5}"/>
    <span v-if="showName" class="text-lg">{{ league.name }}</span>
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