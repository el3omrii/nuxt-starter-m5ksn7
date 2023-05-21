<template>
  <nuxt-layout name="home">
    <template #content>
      <!-- Masonry layout -->
      <HomeMasonry />
      <!-- End Masonry layput -->
      <!-- Home section 1 -->
      <SectionHead>أخبار الكرة العالمية</SectionHead>
      <HomeSection :category=1 />
      <!-- End Home Section -->
    </template>
    <template #sidebar>
      <Latest />
    </template>
  </nuxt-layout>
</template>