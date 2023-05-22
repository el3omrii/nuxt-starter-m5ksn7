<template>
    <nuxt-layout name="category">
        <template #header>
            <div class="page-title relative w-full flex justify-center items-center p-12 bg-secondary before:absolute before:inset-0 before:w-full before:h-full">
                <h1 class="text-2xl text-primary font-bold border-b border-primary">{{ slug }}</h1>
            </div>
        </template>
        <template #content>
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
<script setup>
const route = useRoute()
const slug = route.params.slug
</script>
<style scoped>
.page-title::before {
    background-image: url("@/assets/page-title-lights.png");
    background-position: center center
}
</style>