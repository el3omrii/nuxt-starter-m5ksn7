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
                class="w-28 h-28 object-contain p-2 rounded-full shadow-md shadow-black/90" />
            </div>
            <span class="text-xl font-bold">{{ fixture.fixture.home }}</span>
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
            <div class="flex gap-x-4 text-6xl font-bold">
              <span class="px-4 py-1 rounded-md bg-secondary text-white">{{ fixture.data.goals.home }}</span>
              <span>:</span>
              <span class="px-4 py-1 rounded-md bg-secondary text-white">{{ fixture.data.goals.away }}</span>
            </div>
            <span v-if="fixture.data.fixture.status.short == 'FT'" class="text-red-600 font-bold my-2">إنتهت
              المباراة</span>
            <span v-if="fixture.data.fixture.status.short == 'AET'" class="text-red-600 font-bold my-2">إنتهت المباراة
              أشواط
              إضافية</span>
            <!-- END SCORE -->
          </div>
          <div class="flex flex-col items-center">
            <div class="rounded-full bg-gray-100 group-hover:bg-secondary p-4 transition">
              <img :src="fixture.fixture.away_logo" :alt="fixture.fixture.away"
                class="w-28 h-28 object-contain p-2 rounded-full shadow-md shadow-black/90" />
            </div>
            <span class="text-xl font-bold">{{ fixture.fixture.away }}</span>
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
      <!-- TABS -->

      <div class="w-full px-4 -mt-2 sm:px-0">
        <TabGroup>
          <TabList class="flex space-x-1 rounded-xl bg-primary/80 p-2">
            <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
              <button :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]">
                {{ category }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="mt-2">
            <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="[
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]">
              <ul>
                <li v-for="post in posts" :key="post.id" class="relative rounded-md p-3 hover:bg-gray-100">
                  <h3 class="text-sm font-medium leading-5">
                    {{ post.title }}
                  </h3>

                  <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                    <li>{{ post.date }}</li>
                    <li>&middot;</li>
                    <li>{{ post.commentCount }} comments</li>
                    <li>&middot;</li>
                    <li>{{ post.shareCount }} shares</li>
                  </ul>

                  <a href="#" :class="[
                    'absolute inset-0 rounded-md',
                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                  ]" />
                </li>
              </ul>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
      <!-- END TABS -->
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
const header = useState('header')
header.value.disposition = 'match'
header.value.meta = {
  home: fixture.value.fixture.home_logo,
  home_score: fixture.value.data.goals.home,
  away: fixture.value.fixture.away_logo,
  away_score: fixture.value.data.goals.away,
  status: fixture.value.data.fixture.status.short
}

const categories = ref({
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
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
