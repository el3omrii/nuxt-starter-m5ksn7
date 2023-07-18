<template>
    <div class="w-5/6 h-full inline" :class="{ 'rtl:mr-auto ltr:ml-auto': away }">
      <div class="w-1/4 h-full flex flex-col items-center justify-evenly" :class="[away ? 'float-left' : 'float-right']">
        <PlayerView :player="players[0].player" :colors="colors.goalkeeper" />
      </div>
      <div class="w-3/4 h-full flex" :class="[away ? 'float-right flex-row-reverse' : 'float-left']">
        <div v-for="(line, index) in lines"
            class="w-full h-full flex flex-col items-center justify-evenly"
            :class="[away? 'flex-col-reverse': '']">
          <template v-for="player in players.splice(1, line)">
            <PlayerView :player="player.player" :colors="colors.player" />
          </template>
        </div>
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
    formation: {
      type: String,
      default: "4-3-3",
    },
    away: {
      type: Boolean,
      default: false,
    },
    players: {
      type: Array,
      default: () => [],
    },
    colors: {
      type: Object,
      default: () => {},
    }
})

const lines = props.formation.split("-");
</script>