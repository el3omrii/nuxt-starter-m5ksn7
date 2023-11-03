<template>
    <nuxt-layout name="withsidebar">
      <template #content>
        <div class="flex flex-col md:flex-row">
          <SharingWidget />
          <article v-if="article" class="w-full md:mr-2">
            <h1 class=" mb-4 text-secondary text-2xl font-bold">{{ article.title }}</h1>
            <div class="flex justify-between items-center py-4 mb-4 border-y">
              <div class="flex items-center gap-x-2">
                <img :src="article.source.logo" class="w-24 h-auto" alt="source" />
                <div class="flex flex-col gap-y-2 text-gray-500">
                  <div>
                    <span class="font-bold ml-2">المصدر:</span>
                    <span>{{ article.source.name }}</span>
                  </div>
                  <div>                
                    <span class="font-bold ml-2">التاريخ:</span>
                    <span>{{ article.date }}</span>
                  </div>
                </div>
              </div>
              <a href="#comments" class="flex items-center shrink text-primary">
                التعليقات<svg class="w-6 h-6 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
            <img class="w-full h-auto shadow-lg shadow-black rounded-lg" :alt="article.title" :src="article.image" />
            <Adsbygoogle />
            <div v-html="article.content" class="mt-4 text-justify lg:text-lg">
            </div>
          </article>
          </div>
          <div class="flex gap-x-4 py-2 mt-8 border-y">
            <span class="rounded-full p-2 bg-primary text-white"><HashtagIcon class="inline w-5 h-5 pl-1 ml-1 border-l" />رياضة عالمية</span>
            <span class="rounded-full p-2 bg-primary text-white">الدوري الاسباني</span>
            <span class="rounded-full p-2 bg-primary text-white">Tag 1</span>
          </div>
          <SectionHead>مقالات ذات صلة</SectionHead>
          <RelatedArticles :articles="article.related" />
      </template>
      <template #sidebar>
        <NextMatch class="mb-4" />
        <Latest />
      </template>
    </nuxt-layout>
  </template>
<script setup>
import { HashtagIcon } from '@heroicons/vue/24/outline'
const route = useRoute()
const {data: article} = await useApi('post/' + route.params.slug)
useSeoMeta({
  title: article.value.title,
  ogTitle: article.value.title,
  description: article.value.description,
  ogDescription: article.value.description,
  ogImage: article.value.image,
  twitterCard: 'summary_large_image',
})
const header = useState('header')
header.value.disposition = 'article'
header.value.meta = {
  title: article.value.title,
  category: article.value.category.name
}
</script>
