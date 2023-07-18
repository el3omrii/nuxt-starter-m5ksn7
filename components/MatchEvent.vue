<template>
<div v-if="event.type=='Goal'"
      :class="{'event-away': side =='away', 'event-home': side =='home'}" 
      class="event event-goal flex items-center">
  <span class="event-time inline-flex w-16 text-green-800">{{event.time.elapsed}}
    <span v-if="event.time.extra" class="event-time text-green-800">+ {{event.time.extra}}</span>
  </span>
  <span class="event-player flex items-center before:mx-4">{{event.player.name}}<span v-if="event.detail == 'Penalty'" class="mx-2">(ضربة جزاء)</span></span>
</div>
<div v-else-if="event.type=='Var'"
      :class="{'event-away': side =='away', 'event-home': side =='home'}" 
      class="event event-var-cancel flex items-center">
  <span class="event-time inline-flex w-14 text-green-800">{{event.time.elapsed}}
    <span v-if="event.time.extra" class="event-time text-green-800">+ {{event.time.extra}}</span>
  </span>
  <template v-if="event.detail=='Goal cancelled'">
    <span class="event-player flex items-center text-gray-400 before:mx-4">{{event.player.name}}<span class="mx-2">(هدف ملغى)</span></span>
  </template>
</div>
</template>
<script setup>
defineProps({
    'event': Object,
    'side': String
})
</script>
<style>
.event .event-player:before {
  content: '';
  display: inline-block;
  background-image: url('@/assets/spriterpl-min.png');
  background-size: 146px;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
}
.event-goal .event-player:before {
  background-position: -92px 0;
}
.event-var-cancel .event-player:before {
  background-position: -126px -19px;
}
.event {
  width: calc(50% + 8px);
}
.event-home {
  float: right;
  direction: ltr;
}
.event-away {
  float: left;
}
</style>