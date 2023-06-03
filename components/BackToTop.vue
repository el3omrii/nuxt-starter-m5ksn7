<template>
  <button @click="scrollToTop" 
          v-if="show"
          title="إلى الأعلى"
          class="fixed z-10 p-3 bg-primary rounded-full shadow-lg bottom-10 right-10 animate-bounce">

    <ArrowUpIcon class="w-6 h-6 text-white" />
  </button>
</template>
<script setup>
import { ArrowUpIcon } from '@heroicons/vue/24/outline'
const show = ref(false)
const scrollToTop = () => document.body.scrollIntoView({ behavior: 'smooth'})
onMounted(() => {
    window.addEventListener('scroll', () => {
        show.value = window.scrollY > 200 ? true: false
    })
})
</script>