<template>
    <div class="flex justify-center items-center gap-x-4 py-4 mb-4 border-y border-gray-300">
        <button @click="nextMatch" class="px-4 py-2 bg-primary/90 text-white shadow-md rounded-md cursor">
            <ArrowLongRightIcon class="text-whie w-5 h-5 mr-2" />
        </button>
        <span class="inline-flex items-center text-xl text-secondary font-bold">
    مباريات اليوم</span>
        <button @click="prevMatch" class="px-4 py-2 bg-primary/90 text-white shadow-md rounded-md cursor">
            <ArrowLongLeftIcon class="text-whie w-5 h-5 mr-2" />
        </button>
    </div>
    <carousel ref="mycarousel" :items-to-show="3" :wrap-around="true" dir="rtl" :breakpoints="breakpoints" :navigation="false" :autoplay="5000" class="mb-4">
        <slide v-for="(fixture, index) in fixtures" :key="index">
            <div class="flex bg-slate-200 text-secondary rounded-xl border border-gray-400 p-4 mx-2 hover:bg-secondary/90 hover:text-white transition duration-500">
                <div class="flex flex-col items-center gap-y-2">
                <img :src="fixture.home_logo" class="w-14 h-14" alt="fixture.home" />
                <p class="font-bold whitespace-nowrap">{{ fixture.home }}</p>
            </div>
            <div>
            <p class="text-2xl text-red-500">15:00</p>
            <!--p class="text-sm">{{fixture.venue}}</p-->
            </div>
            <div class="flex flex-col items-center gap-y-2">
                <img :src="fixture.away_logo" class="w-14 h-14" alt="fixture.away" />
                <p class="font-bold whitespace-nowrap">{{ fixture.away }}</p>
            </div>
            </div>
        </slide>
    </carousel>
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'
const {data: fixtures, pending} = await useApi('fixtures')
const mycarousel = ref(null)
const breakpoints = {
    480: {
        itemsToShow: 1.5
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