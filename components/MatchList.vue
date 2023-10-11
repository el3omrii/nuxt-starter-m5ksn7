<template>
    <div class="flex justify-center items-center gap-x-4 py-4 mb-4 border-y border-gray-300">
        <button @click="nextMatch" class="px-4 py-2 bg-primary/90 text-white shadow-md rounded-md cursor" aria-label="التالي">
            <ArrowLongRightIcon class="text-whie w-5 h-5 mr-2" />
            <span class="sr-only">التالي</span>
        </button>
        <h1 class="inline-flex items-center text-xl text-secondary font-bold">
    مباريات اليوم</h1>
        <button @click="prevMatch" class="px-4 py-2 bg-primary/90 text-white shadow-md rounded-md cursor" aria-label="السابق">
            <ArrowLongLeftIcon class="text-whie w-5 h-5 mr-2" />
            <span class="sr-only">السابق</span>
        </button>
    </div>
    <carousel ref="mycarousel" :wrap-around="true" dir="rtl" :breakpoints="breakpoints" :navigation="false" :autoplay="5000" class="mb-4">
        <slide v-for="(fixture, index) in fixtures" :key="index">
            <NuxtLink :to="`/live/${fixture.fixture_id}-${fixture.home}-${fixture.away}`">
            <div class="w-72 flex items-center justify-center bg-slate-200 text-secondary rounded-xl border border-gray-400 p-2 mx-0.5 hover:bg-secondary/90 hover:text-white transition duration-500">
                <div class="w-1/3 flex flex-col items-center gap-y-2">
                <img :src="fixture.home_logo" class="w-14 h-14" alt="fixture.home" />
                <p class="w-full font-bold whitespace-nowrap text-clip overflow-hidden sm:text-base text-sm">{{ fixture.home }}</p>
            </div>
            <div class="w-1/3">
                <span class="text-lg font-bold">{{
              dt.fromISO(fixture.date).toFormat('dd/MM/yyyy') }}</span>
                <span class="inline-flex items-center text-2xl text-red-600 font-bold">
              <ClockIcon class="w-5 h-5 ml-2" />{{ dt.fromISO(fixture.date).toFormat('HH:mm') }}
            </span>
            </div>
            <div class="w-1/3 flex flex-col items-center gap-y-2">
                <img :src="fixture.away_logo" class="w-14 h-14" alt="fixture.away" />
                <p class="w-full font-bold whitespace-nowrap text-clip overflow-hidden sm:text-base text-sm">{{ fixture.away }}</p>
            </div>
            </div>
            </NuxtLink>
        </slide>
    </carousel>
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ArrowLongLeftIcon, ArrowLongRightIcon, ClockIcon } from '@heroicons/vue/24/outline'
import { DateTime as dt } from 'luxon'
const {data: fixtures, pending} = await useApi('fixtures')
const mycarousel = ref(null)
const breakpoints = {
    480: {
        itemsToShow: 2
    },
    768: {
        itemsToShow: 3
    },
    1024: {
        itemsToShow: 4
    }
}
const nextMatch = () => mycarousel.value.next()
const prevMatch = () => mycarousel.value.prev()
</script>