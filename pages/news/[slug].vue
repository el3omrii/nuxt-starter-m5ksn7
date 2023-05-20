<template>
    <nuxt-layout name="home">
      <template #content>
        <div class="flex flex-col md:flex-row">
          <SharingWidget />
          <article class="w-full md:mr-2">
            <h1 class=" mb-4 text-secondary text-2xl font-bold">{{ article.title }}</h1>
            <div class="flex justify-between items-center p-4 mb-4 border-y">
              <div class="flex items-center gap-x-2">
                <span>المصدر: {{ article.source.name }}</span>
                <img :src="article.source.image" class="w-8 h-8 bg-green-800" alt="source" />
                <span>التاريخ:</span>
                <span>{{ article.date }}</span>
              </div>
              <a href="#comments" class="flex items-center shrink text-primary">
                التعليقات<svg class="w-6 h-6 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
            <img class="md:w-3/4 lg:w-full h-auto shadow-lg shadow-black rounded-lg" :alt="article.title" :src="article.image" />
            <div class="mt-4 text-justify lg:text-lg">
              {{ article.content }}
            </div>
          </article>
          </div>
          <RelatedArticles :articles="article.related" />
      </template>
      <template #sidebar>
        <Latest />
      </template>
    </nuxt-layout>
  </template>
<script setup>
import article from "@/assets/article.json"
useSeoMeta({
  title: article.title,
  ogTitle: article.title,
  description: article.description,
  ogDescription: article.description,
  ogImage: article.image,
  twitterCard: 'summary_large_image',
})
</script>