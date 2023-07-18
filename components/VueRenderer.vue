<script setup>
import { h } from 'vue'

const props = defineProps({
  html: String
})
const VNode = () => h('div', { innerHTML: props.html })
</script>
<template>
  <VNode />
</template>