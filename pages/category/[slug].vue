<template>
    <nuxt-layout name="category">
        <template #header>
            <div class="page-title relative w-full flex flex-col justify-center items-center p-8 bg-secondary before:absolute before:inset-0 before:w-full before:h-full">
                <h1 class="text-2xl text-primary font-bold border-b border-primary">{{ posts.category.name }}</h1>
                <p class="mt-2 text-white text-lg">آخر اخبار العالم زالموضة{{posts.category.description}}</p>
            </div>
        </template>
        <template #content>
        <div class="flex justify-between items-center py-4 mb-4 border-y">
        <span class="inline-flex items-center text-secondary font-bold"><TagIcon class="w-5 h-5 ml-2" />{{ posts?.category.name }} : {{ posts?.meta.total }} منشور</span>
        <span>
          <CategorySort @selected="(value)=>sort=value"/>
      </span>
        </div>
         <!-- Grid -->
  <div v-if="posts?.data" class="relative mt-4 grid lg:grid-cols-2 gap-8">
    <!-- Loader -->
    <FootballLoader v-if="pending"/>
    <!-- Card -->
    <div v-for="post in posts.data" class="group rounded-xl overflow-hidden hover:shadow-md transition">
    <NuxtLink :to="`/${slug}/${post.slug}`">
      <div class="sm:flex">
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-52">
          <img class="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl shadow-lg shadow-black" :src="post.image" alt="Image Description">
        </div>

        <div class="grow mt-4 sm:mt-0 sm:mr-6 px-4 sm:px-0">
          <h3 class="text-md font-semibold text-gray-800 group-hover:text-primary">
            {{ post.title }}
          </h3>
          <p class="mt-3 text-gray-600 text-sm text-justify">
            {{ post.excerpt }}
          </p>
          <div class="flex justify-between items-center">
          <p class="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:text-white group-hover:bg-primary/80 transition text-sm border rounded-full p-2">
            تابع القراءة
            <ChevronLeftIcon class="w-5 h-5" />
          </p>
          <span class="inline-flex items-center mt-4 text-sm" v-tooltip.arrow="'عدد المشاهدات'"><EyeIcon class="w-4 h-4 ml-2" />{{ post.views }}</span>
          </div>
        </div>
      </div>
    </NuxtLink>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
        <pagination @update-page="(value) => page = value" :current="page" :pages="posts.meta.last_page" :navigationLabels="labels"/>
        </template>
        <template #sidebar>
        <Latest />
      </template>
    </nuxt-layout>
  </template>
<script setup>
import { TagIcon, ChevronLeftIcon, EyeIcon } from '@heroicons/vue/24/outline'
const runtimeConfigs = useRuntimeConfig()
const slug = useRoute().params.slug
const page = ref(1)
const sort = ref('created_at')
const {data: posts, pending} = await useFetch(() => `${runtimeConfigs.public.API_URL}category/${slug}/posts?page=${page.value}&orderBy=${sort.value}`, { key: `${slug}-list-${page.value}`})
useSeoMeta({
  title: posts.value.category.name,
  ogTitle: posts.value.category.name,
  description: posts.value.category.description,
  ogDescription: posts.value.category.description,
  twitterCard: 'summary_large_image',
})
const labels = {
  first: 'الصفحة الاولى',
  last: 'الصفحة الأخيرة',
  next: 'الصفحة التالية',
  previous: 'الصفحة السابقة'
}
const header = useState('header')
header.value.disposition = 'categorypage'
header.value.meta = {}
</script>
<style scoped>
.page-title::before {
    background-image: url("@/assets/page-title-lights.png");
    background-position: center center
}
</style>
