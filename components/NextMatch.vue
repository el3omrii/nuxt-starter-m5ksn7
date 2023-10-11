<template>
    <div class="text-white text-center bg-secondary/90 rounded-xl p-4">
        <h2 class="text-xl text-center">المباراة القادمة</h2>
        <template v-if="fixture">
        <hr class="border-gray-500 my-4">
        <h4 class="text-lg">{{ fixture.league }}</h4>
        <div class="flex justify-center items-center my-4">
            <div class="flex flex-col items-center gap-y-2">
                <img :src="fixture.home_logo" class="w-20 h-20" alt="Real Madrid" />
                <p class="font-bold">{{ fixture.home }}</p>
            </div>
            <div>
            <p class="text-2xl text-red-500">{{ dt.fromISO(fixture.date).toFormat('HH:mm') }}</p>
            <p class="font-bold">{{ dt.fromISO(fixture.date).toFormat('dd/MM/yyyy') }}</p>
            <p class="text-sm">{{ fixture.venue }}</p>
            </div>
            <div class="flex flex-col items-center gap-y-2">
                <img :src="fixture.away_logo" class="w-20 h-20" alt="Real Madrid" />
                <p class="font-bold">{{ fixture.away }}</p>
            </div>
        </div>
        </template>
        <template v-else>
            <p class="text-2xl">لا يوجد الآن</p>
        </template>
    </div>
</template>
<script setup>
import { DateTime as dt } from 'luxon'

const {data: fixtures} = await useApi('fixtures')
const fixture = fixtures.value.filter((f) => f.fixture_data.fixture.status.short === 'NS')[0]
</script>