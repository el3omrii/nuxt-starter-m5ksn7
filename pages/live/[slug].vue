<template>
    <nuxt-layout name="category">
        <template #header>
            <div class="page-title relative w-full flex flex-col justify-center items-center p-8 bg-secondary before:absolute before:inset-0 before:w-full before:h-full">
                <h1 class="text-2xl text-primary font-bold border-b border-primary z-10">hh</h1>
                <p class="mt-2 text-white text-lg z-10">بث مباشر ومتابعة لأحداث المباراة</p>
            </div>
        </template>
        <template #content>
        <h2>Just a test</h2>
        </template>
    </nuxt-layout>
  </template>
<script setup>
import { TagIcon, BellAlertIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/outline'
import { DateTime as dt } from 'luxon'

</script>
<style scoped>
.page-title::before {
    background-image: url("@/assets/bg-banner.jpg");
    background-position: center center
}
</style>
