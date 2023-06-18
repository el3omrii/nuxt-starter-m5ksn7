<template>
    <nuxt-layout name="category">
        <template #header>
            <div class="page-title relative w-full flex flex-col justify-center items-center p-8 bg-secondary before:absolute before:inset-0 before:w-full before:h-full">
                <h1 class="text-2xl text-primary font-bold border-b border-primary">مباريات اليوم</h1>
                <p class="mt-2 text-white text-lg">آخر اخبار العالم زالموضة</p>
            </div>
        </template>
        <template #content>
          <div class="w-full relative flex flex-col justify-center mb-12 p-4 border text-secondary rounded-md shadow-lg shadow-gray-500 hover:bg-secondary/90 hover:text-white transition group"
               v-for="fixture in fixtures">
              <div class="w-full flex flex-col">
                <div class="flex items-center justify-between">
                  <div class="p-2 bg-gray-300 rounded-md group-hover:bg-gray-600" v-tooltip.arrow="'فعل الإشعارات لهذه المباراة'">
                    <BellAlertIcon class="w-5 h-5"/>
                  </div>
                  <LeagueLogo :league="{'id': fixture.fixture_data.league.id, 'logo': fixture.league_logo, 'name':fixture.league}" />
                  <div class="flex items-center px-4 py-2 bg-red-200 text-red-700 text-sm rounded-md"><span class="w-2 h-2 block bg-red-500 rounded-full ml-2"></span>مباشر</div>
                </div>
                <hr class="h-[2px] my-4 bg-gray-400" />
                <div class="flex items-center justify-between mx-8">
                  <div class="flex flex-col items-center">
                    <div class="rounded-full bg-gray-100 group-hover:bg-secondary p-4 transition">
                      <img :src="fixture.home_logo" :alt="fixture.home"
                            class="w-28 h-28 object-contain p-2 rounded-full shadow-md shadow-black/90" />
                    </div>
                    <span class="text-xl font-bold">{{fixture.home}}</span>
                  </div>
                  <!-- Match Info -->
                  <div v-if="fixture.fixture_data.fixture.status.short == 'FT'" 
                       class="flex flex-col items-center">
                    <span class="inline-flex items-center text-2xl text-red-600 font-bold"><ClockIcon class="w-5 h-5 ml-2" />{{ dt.fromISO(fixture.date).toFormat('HH:mm') }}</span>
                    <span class="text-lg text-secondary font-bold group-hover:text-white">{{ dt.fromISO(fixture.date).toFormat('dd/MM/yyyy') }}</span>
                    <!-- SCORE -->
                    <div class="flex gap-x-4 text-7xl font-bold">
                      <span class="">{{fixture.fixture_data.goals.home}}</span>
                      <span>:</span>
                      <span class="">{{fixture.fixture_data.goals.away}}</span>
                    </div>
                    <span class="text-red-600 font-bold my-2">إنتهت المباراة</span>
                    <!-- END SCORE -->
                    <!-- LOCATION -->
                    <div class="flex items-center">
                      <MapPinIcon class="w-4 h-4 ml-2" />
                      <span class="text-gray-400">{{ fixture.venue }}</span>
                    </div>
                    <!-- END LOCATION -->
                    <NuxtLink :to="`/live/${fixture.fixture_id}-${fixture.home}-${fixture.away}`" class="relative -bottom-12 -mt-4 px-8 py-4 bg-primary rounded-md text-white text-2xl">تابع المباراة</NuxtLink>
                  </div>
                  <div v-else-if="fixture.fixture_data.fixture.status.short == 'NS'" 
                       class="flex flex-col items-center">
                    <span class="inline-flex items-center text-3xl text-red-600 font-bold"><ClockIcon class="w-6 h-6 ml-2" />{{ dt.fromISO(fixture.date).toFormat('HH:mm') }}</span>
                    <span class="text-lg text-secondary font-bold group-hover:text-white">{{ dt.fromISO(fixture.date).toFormat('dd/MM/yyyy') }}</span>
                    <span class="text-green-600 font-bold my-2">لم تبدأ بعد</span>
                    <!-- END SCORE -->
                    <!-- LOCATION -->
                    <div class="flex items-center">
                      <MapPinIcon class="w-4 h-4 ml-2" />
                      <span class="text-gray-400">{{ fixture.venue }}</span>
                    </div>
                    <!-- END LOCATION -->
                    <NuxtLink :to="`/live/${fixture.fixture_id}-${fixture.home}-${fixture.away}`" class="relative -bottom-12 -mt-4 px-8 py-4 bg-primary rounded-md text-white text-2xl">تابع المباراة</NuxtLink>
                  </div>
                  <!-- END MATCH INFO -->
                  <div class="flex flex-col items-center">
                    <div class="rounded-full bg-gray-100 group-hover:bg-secondary p-4 transition">
                      <img :src="fixture.away_logo" :alt="fixture.away"
                            class="w-28 h-28 object-contain p-2 rounded-full shadow-md shadow-black/90" />
                    </div>
                    <span class="text-xl font-bold">{{fixture.away}}</span>
                  </div>
                </div>
              </div>
            </div>
        </template>
        <template #sidebar>
        <Latest />
      </template>
    </nuxt-layout>
  </template>
<script setup>
import { TagIcon, BellAlertIcon, MapPinIcon, ClockIcon } from '@heroicons/vue/24/outline'
import { DateTime as dt } from 'luxon'
const {data: fixtures, pending} = await useApi('fixtures')

</script>
<style scoped>
.page-title::before {
    background-image: url("@/assets/bg-banner.jpg");
    background-position: center center
}
</style>
