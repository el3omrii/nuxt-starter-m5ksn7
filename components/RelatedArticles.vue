<template>
    <Swiper :modules="[SwiperAutoplay, SwiperNavigation]" :slides-per-view="3"
    :space-between="50" :rewind="true" :navigation="true" :loop="true" :autoplay="{
        delay: 4000,
    }">
        <SwiperSlide v-for="article in articles" :key="article.id">
            <div class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]">
                <NuxtLink :to="`/news/${article.slug}`">
                <div class="aspect-w-16 aspect-h-11">
                    <img class="w-full object-cover rounded-xl"
                        :src="article.image"
                        :alt="article.title">
                </div>
                <div class="my-4">
                    <h3 class="text-lg text-secondary">
                        {{ article.title }}
                    </h3>
                    <p class="mt-2 text-sm text-gray-600">
                        {{ article.description }}
                    </p>
                </div>
                <div class="mt-auto flex items-center gap-x-3">
                    <img class="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=320&amp;h=320&amp;q=80"
                        alt="Image Description">
                    <div>
                        <h5 class="text-sm text-gray-800 dark:text-gray-200">By Lauren Waller</h5>
                    </div>
                </div>
                </NuxtLink>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/navigation';

defineProps({
    articles: Object
})
</script>