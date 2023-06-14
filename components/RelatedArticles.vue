<template>
    <carousel :breakpoints="breakpoints" :autoplay="5000" :wrap-around="true" dir="rtl">
        <slide v-for="(article, index) in articles.data" :key="index">
            <div
                class="h-full m-2 p-4 border border-gray-200 hover:border-gray-500 hover:shadow-xl transition-all duration-300 rounded-xl">
                <NuxtLink :to="`/${articles.category.slug}/${article.slug}`" class="flex flex-col justify-between h-full group">
                    <div><img class="w-full h-40 object-cover rounded-xl" :src="article.image" :alt="article.title">
                        <div class="my-4">
                            <h3 class="text-lg text-secondary group-hover:text-primary">
                                {{ article.title }}
                            </h3>
                            <p class="mt-2 text-sm text-justify text-gray-600">
                                {{ article.excerpt }}
                            </p>
                        </div>
                    </div>
                    <div class="mb-4 flex items-center justify-between">
                        <div class="flex">
                            <ClockIcon class="w-5 h-5 ml-1" />
                            <p class="text-xs text-secondary">{{ article.date }}</p>
                        </div>
                        <p
                            class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:text-white group-hover:bg-primary/80 transition text-sm border rounded-full p-2">
                            تابع القراءة
                            <ChevronLeftIcon class="w-4 h-4" />
                        </p>
                    </div>
                </NuxtLink>
            </div>
        </slide>
        <template #addons>
            <navigation />
        </template>
    </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ClockIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
defineProps({
    articles: Object
})
const breakpoints = {
    480: {
        itemsToShow: 1.5
    },
    768: {
        itemsToShow: 2
    },
    1024: {
        itemsToShow: 3
    }
}
</script>