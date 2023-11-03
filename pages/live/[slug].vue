<template>
  <nuxt-layout name="category">
    <template #header>
      <div
        class="page-title relative w-full flex flex-col justify-center items-center p-8 bg-secondary before:absolute before:inset-0 before:w-full before:h-full">
        <h1 class="text-2xl text-primary font-bold border-b border-primary z-10">{{ fixture.fixture.home }} - {{
          fixture.fixture.away }}</h1>
        <p class="mt-2 text-white text-lg z-10">بث مباشر ومتابعة لأحداث المباراة</p>
      </div>
    </template>
    <template #content>
      <div class="border rounded-md shadow-lg p-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <LeagueLogo :league="fixture.data.league" :show-name="false" />
            <div class="flex flex-col">
              <span>{{ fixture.fixture.league }}</span>
              <span class="text-xl font-bold">{{ fixture.fixture.home }} ضد {{ fixture.fixture.away }}</span>
              <span>متابعة ونتائج مباشرة</span>
            </div>
          </div>
          <div class="notification-alert" v-tooltip.arrow="'فعل الإشعارات'">
            <Switch v-model="enabled" :class="enabled ? 'bg-primary/80' : 'bg-gray-200'"
              class="relative inline-flex h-10 w-16 items-center rounded-full">
              <span class="sr-only">Enable notifications</span>
              <span :class="enabled ? '-translate-x-6' : '-translate-x-1'"
                class="inline-flex items-center justify-center h-8 w-8 transform rounded-full bg-white transition">
                <BellAlertIcon class="w-4 h-4 text-gray-600" />
              </span>
            </Switch>
          </div>
        </div>
        <div class="flex items-center justify-between mt-8 lg:mx-12 md:mx-8">
          <div class="flex flex-col items-center">
            <div class="rounded-full bg-gray-100 group-hover:bg-secondary p-4 transition">
              <img :src="fixture.fixture.home_logo" :alt="fixture.fixture.home"
                class="sm:w-28 w-20 sm:h-28 h-20 object-contain p-2 rounded-full shadow-md shadow-black/90" />
            </div>
            <span class="sm:text-xl text-base font-bold">{{ fixture.fixture.home }}</span>
          </div>
          <!-- Match Info -->
          <div v-if="fixture.data.fixture.status.short == 'FT' || fixture.data.fixture.status.short == 'AET'"
            class="flex flex-col items-center">
            <span class="inline-flex items-center text-2xl text-red-600 font-bold">
              <ClockIcon class="w-5 h-5 ml-2" />{{ dt.fromISO(fixture.fixture.date).toFormat('HH:mm') }}
            </span>
            <span class="text-lg text-secondary font-bold group-hover:text-white">{{
              dt.fromISO(fixture.fixture.date).toFormat('dd/MM/yyyy') }}</span>
            <!-- SCORE -->
            <div class="flex gap-x-4 sm:text-6xl text-4xl font-bold">
              <span class="sm:px-4 px-2 py-1 rounded-md bg-secondary text-white">{{ fixture.data.goals.home }}</span>
              <span>:</span>
              <span class="sm:px-4 px-2 py-1 rounded-md bg-secondary text-white">{{ fixture.data.goals.away }}</span>
            </div>
            <span v-if="fixture.data.fixture.status.short == 'FT'" class="text-red-600 font-bold my-2">إنتهت
              المباراة</span>
            <span v-if="fixture.data.fixture.status.short == 'AET'" class="text-red-600 font-bold my-2">إنتهت المباراة
              أشواط
              إضافية</span>
            <!-- END SCORE -->
          </div>
          <div v-if="fixture.data.fixture.status.short == '1H' || fixture.data.fixture.status.short == '2H' || fixture.data.fixture.status.short == 'HT'"
            class="flex flex-col items-center">
            <span class="inline-flex items-center text-2xl text-red-600 font-bold">
              <ClockIcon class="w-5 h-5 ml-2" />{{ dt.fromISO(fixture.fixture.date).toFormat('HH:mm') }}
            </span>
            <span class="text-lg text-secondary font-bold group-hover:text-white">{{
              dt.fromISO(fixture.fixture.date).toFormat('dd/MM/yyyy') }}</span>
            <!-- SCORE -->
            <div class="flex gap-x-4 text-6xl font-bold">
              <span class="px-4 py-1 rounded-md bg-secondary text-white">{{ fixture.data.goals.home }}</span>
              <span>:</span>
              <span class="px-4 py-1 rounded-md bg-secondary text-white">{{ fixture.data.goals.away }}</span>
            </div>
            <span v-if="fixture.data.fixture.status.short == '1H'" class="text-green-600 font-bold my-2">الشوط الأول</span>
            <span v-if="fixture.data.fixture.status.short == '2H'" class="text-green-600 font-bold my-2">الشوط الثاني</span>
            <span v-if="fixture.data.fixture.status.short == 'HT'" class="text-green-600 font-bold my-2">استراحة</span>
            <!-- END SCORE -->
          </div>
          <div v-else-if="fixture.data.fixture.status.short == 'NS'" 
                class="flex flex-col items-center">
            <span class="inline-flex items-center sm:text-3xl text-xl text-red-600 font-bold"><ClockIcon class="w-6 h-6 ml-2" />{{ dt.fromISO(fixture.fixture.date).toFormat('HH:mm') }}</span>
            <span class="sm:text-lg text-base text-secondary font-bold group-hover:text-white">{{ dt.fromISO(fixture.fixture.date).toFormat('dd/MM/yyyy') }}</span>
            <span class="text-green-600 font-bold my-2">لم تبدأ بعد</span>
            <!-- END SCORE -->
            <!-- LOCATION -->
            <div class="flex items-center">
              <MapPinIcon class="w-4 h-4 sm:ml-2 ml-0" />
              <span class="text-gray-400">{{ fixture.fixture.venue }}</span>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="rounded-full bg-gray-100 group-hover:bg-secondary p-4 transition">
              <img :src="fixture.fixture.away_logo" :alt="fixture.fixture.away"
                class="sm:w-28 w-20 sm:h-28 h-20 object-contain p-2 rounded-full shadow-md shadow-black/90" />
            </div>
            <span class="sm:text-xl text-base font-bold">{{ fixture.fixture.away }}</span>
          </div>
        </div>
        <!-- EVENTSN -->
        <div class="relative clearfix">
          <template v-for="event in fixture.data.events">
            <MatchEvent :event="event" :side="determineSide(event)" />
          </template>
        </div>
        <!-- END EVENTS -->
      </div>
      <!-- STICKY HEADER -->
      <div ref="sticky" class="stickyheader flex items-center justify-center w-full h-16 top-0 bg-white/90 shadow-md z-10">
        <div class="w-full mx-20 flex justify-between iitems-center">
          <div class="flex items-center">
            <img :src="fixture.fixture.home_logo" class="w-14 h-14">
            <span class="text-2xl">{{ fixture.data.goals.home }}</span>
          </div>
          <span v-if="fixture.data.fixture.status.short == 'FT'" class="text-red-600 text-2xl font-bold my-2">إنتهت المباراة</span>
          <span v-if="fixture.data.fixture.status.short == 'AET'" class="text-red-600 text-2xl font-bold my-2">إنتهت المباراة أشواط
            إضافية</span>
          <div class="flex flex-row-reverse items-center">
            <img :src="fixture.fixture.away_logo" class="w-14 h-14">
            <span class="text-2xl">{{ fixture.data.goals.away }}</span>
          </div>
        </div>
        
      </div>  
      <!-- END STICKY -->
      <!-- TABS -->
      <div class="w-full">
        <TabGroup>
          <TabList class="flex sticky top-16 space-x-1 rounded-b-xl bg-primary/90 p-2 z-10">
            <Tab v-for="tab in tabs" as="template" :key="tab" v-slot="{ selected }">
              <button :class="[
                tab.class,
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]">
                {{ tab.name }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="mt-2">
            <TabPanel :class="[
              'rounded-xl bg-white py-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]">
                <LazyVideoPlayerShaka v-if="fixture.fixture.live_url?.startsWith('ssc')" :meta="videoMeta" :src="videoSrc"></LazyVideoPlayerShaka>
                <LazyVideoPlayer v-else :meta="videoMeta" :src="videoSrc" />
            </TabPanel>
            <TabPanel :class="[
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]">
              <LazyLineUp :fixture="fixture_id" />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
      <!-- END TABS -->
    </template>
    <template #sidebar>
      <LazyClientOnly>
        <ChatWidget />
      </LazyClientOnly>
    </template>
  </nuxt-layout>
</template>
<script setup>
import { TagIcon, BellAlertIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/outline'
import { TabGroup, TabList, Tab, TabPanels, TabPanel, Switch } from '@headlessui/vue'

import { DateTime as dt } from 'luxon'
const fixture_id = useRoute().params.slug.split("-")[0]
const { data: fixture, pending } = await useApi('fixtures/' + fixture_id)
const determineSide = e => e.team.name == fixture.value.data.teams.home.name ? 'home' : 'away'
const enabled = ref(false)
const sticky = ref()
onMounted(() => {
  let offset = 0
  setTimeout(() => {
  //get offset 
  offset = sticky.value.offsetTop - 30
  //then hide it
  sticky.value.classList.add('hidden')
  console.log(offset)
  }, 1000)
  window.addEventListener('scroll', () => {
    if(window.scrollY >= offset) {
      sticky.value.classList.remove('hidden')
      sticky.value.classList.add('sticky')
    }
    else {
      sticky.value.classList.add('hidden')
      sticky.value.classList.remove('sticky')
    }
  })
})
const tabs = ref([
  { name: 'الرئيسية', class: 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' },
  { name: 'التشكيلة', class: 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' },
  { name: 'إحصائيات', class: 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' }
  ])

  const videoMeta = ref({
        home: fixture.value.fixture.home,
        home_logo: fixture.value.fixture.home_logo,
        away: fixture.value.fixture.away,
        away_logo: fixture.value.fixture.away_logo
      })
  const videoSrc = ref({
    url: fixture.value.fixture.live_url,
    type: 'hls'
  })
  useSeoMeta({
  title: videoMeta.value.home + ' ضد ' + videoMeta.value.away + ' - بث مباشر',
  ogTitle: videoMeta.value.home + ' ضد ' + videoMeta.value.away + ' - بث مباشر',
  description: 'تابع أحداث ومجريات مباراة ' + videoMeta.value.home + ' ضد فريق ' + videoMeta.value.away + ' مع بث مباشر وتغطية حية. تعرف على التشكيلة وشاهد المباراة مباشرة وبجودة عالية',
  ogDescription: 'تابع أحداث ومجريات مباراة ' + videoMeta.value.home + ' ضد فريق ' + videoMeta.value.away + ' مع بث مباشر وتغطية حية. تعرف على التشكيلة وشاهد المباراة مباشرة وبجودة عالية',
  twitterCard: 'summary_large_image',
})
</script>
<style scoped>
.page-title::before {
  background-image: url("@/assets/bg-banner.jpg");
  background-position: center center
}

.clearfix:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}
</style>
