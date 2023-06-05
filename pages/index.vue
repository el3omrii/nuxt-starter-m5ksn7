<template>
  <nuxt-layout name="withsidebar">
    <template #matchs>
       <!-- Match List -->
      <MatchList />
      <!-- End Match list -->
    </template>
    <template #content>
      <!-- Masonry layout -->
      <HomeMasonry />
      <!-- End Masonry layput -->
      <!-- Home section 1 -->
      <HomeSection :category=1 />
      <!-- End Home Section -->
    </template>
    <template #sidebar>
      <Latest />
    </template>
  </nuxt-layout>
</template>
<script setup>
const { settings } = await useSettings()

useSeoMeta({
  title: settings.value.website_title,
  ogTitle: settings.value.website_title,
  description: settings.value.website_description,
  ogDescription: settings.value.website_description,
  twitterCard: 'summary_large_image',
})
</script>