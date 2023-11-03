<template>
    <nuxt-layout name="withsidebar">
      <template #content>
        <div class="fixed flex items-center justify-center w-full h-16 top-0 bg-white/90 shadow-md transition duration-300"
             :class="[!sticky ? '-translate-y-full' : 'translate-y-0']"
      >
        <div class="rounded-full bg-primary sm:w-auto sm:py-2 sm:px-4 px-2 py-1 sm:ml-8 ml-2 sm:text-base text-sm text-white whitespace-nowrap">
          <NuxtLink :to="`/category/${article.category.slug}`" >{{ article.category.name }}</NuxtLink>
        </div>
        <h2 class="text-secondary sm:text-xl text-lg">{{ article.title }}</h2>
      </div>  
        <div class="flex flex-col md:flex-row">
          <SharingWidget @fontChanged="size => fontSize = size"/>
          <article v-if="article" class="w-full md:mr-2">
            <h1 class=" mb-4 text-secondary text-2xl font-bold">{{ article.title }}</h1>
            <div class="flex justify-between items-center py-4 mb-4 border-y">
              <div class="flex items-center gap-x-2">
                <img :src="article.source.logo" class="w-24 h-auto" alt="source" />
                <div class="flex flex-col gap-y-2 text-gray-500 sm:text-base text-sm">
                  <div>
                    <span class="font-bold sm:ml-2 ml-1">المصدر:</span>
                    <span>{{ article.source.name }}</span>
                  </div>
                  <div>                
                    <span class="font-bold sm:ml-2 ml-1">التاريخ:</span>
                    <span>{{ article.date }}</span>
                  </div>
                </div>
              </div>
              <a href="#comments" class="flex items-center shrink text-primary">
                التعليقات<svg class="w-6 h-6 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
            <BreadCrumb :category="article.category" :title="article.title" />
            <img class="w-full h-auto mt-2 shadow-lg shadow-black rounded-lg" :alt="article.title" :src="article.image" />
            <Adsbygoogle />
            <div class="mt-8 text-justify" :class="fontSize">
              <VueRenderer :html="article.content" />
            </div>
          </article>
          </div>
          <ArticleTags :category="article.category" :tags="article.tags" />
          <SectionHead>مقالات ذات صلة</SectionHead>
          <RelatedArticles :articles="{data: article.related, category:article.category}" />
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
  description: article.value.excerpt,
  ogDescription: article.value.excerpt,
  ogImage: article.value.image,
  twitterCard: 'summary_large_image',
})

const fontSize = ref('text-lg')
const sticky = ref(false)

onMounted(() => {
  convertOEmbed(article.value.content)
  article.value.tags.forEach(tag => {
    article.value.content = article.value.content.replace(new RegExp(tag.name, 'g'), `<NuxtLink to="/tag/${tag.slug}">${tag.name}</NuxtLink>`)
  })
  window.addEventListener('scroll', () => {
    sticky.value = window.scrollY > 200 ? true: false
  })
})

const getYouTubeID = (url) => {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/u)
  /* eslint-disable no-useless-escape */
  return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/iu)[0] : url[0]
}
const convertOEmbed = (content) => {
  var parsedHtml = new DOMParser().parseFromString(content, 'text/html')
  parsedHtml.querySelectorAll('.media').forEach((media) => {
    var url = getYouTubeID(/oembed\surl=\"(.*)\"/gm.exec(media.innerHTML)[1])
    media.innerHTML = '<div class="w-full h-auto">' +
        '<iframe src="https://www.youtube.com/embed/'+url+'?rel=0" class="w-full aspect-video" allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe>' +
      '</div>'
  })
  article.value.content = String(parsedHtml.body.innerHTML)
}
</script>
<style>
blockquote::before {
  content: open-quote;
}

blockquote::after {
  content: close-quote;
}

blockquote::before, blockquote::after {
  opacity: 0.25;
  padding: 0 10px;
  font-size: 3em;
}

blockquote {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #e5ddcb;
}
</style>
