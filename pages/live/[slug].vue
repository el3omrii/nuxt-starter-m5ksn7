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
      <!-- STICKY HEADER -->
      <div class="stickyheader flex items-center justify-center w-full h-16 top-0 bg-white/90 shadow-md"
      >
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
      <div class="w-full px-4 sm:px-0">
        <TabGroup>
          <TabList class="flex sticky top-16 space-x-1 rounded-b-xl bg-primary/80 p-2">
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
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]">
              Video should be here !
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
onMounted(() => {
  let sticky = document.getElementsByClassName('stickyheader')[0]
  console.log(sticky)
  let offset = sticky.offsetTop - 35
  window.addEventListener('scroll', () => {
    if(window.scrollY >= offset) {
      sticky.classList.remove('hidden')
      sticky.classList.add('sticky')
    }
    else {
      sticky.classList.add('hidden')
      sticky.classList.remove('sticky')
    }
  })
})
const tabs = ref([
  { name: 'الرئيسية', class: 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' },
  { name: 'التشكيلة', class: 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' },
  { name: 'إحصائيات', class: 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2' }
  ])
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
