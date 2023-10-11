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
      <HomeSection :category=1 category_name="كرة عالمية" />
      <div class="w-full flex justify-center my-2"><img src="https://images.placeholders.dev/?width=728&height=90&text=Ads%20placeholder&bgColor=%23f7f6f6&textColor=%236d6e71" alt="ads and announcements" width="728" height="90" /></div>
      <HomeSection :category=6 category_name="كرة عربية" />
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

const header = useState('header')
header.value.disposition = 'homepage'
header.value.meta = {}
</script>