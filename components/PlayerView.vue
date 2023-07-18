<template>
    <div class="player-view relative flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 40" version="1.1"
            class="w-[40px] h-[50px] md:w-16 md:l-16">
        <g>
          <path style="stroke-width:8;stroke-linecap:butt;stroke-linejoin:bevel;"
                :style="{'fill': '#' + colors.primary, 'stroke': '#' + colors.border}"
          d="M 304.969343 4.030258 L 4.984177 351.004464 L 218.992286 495.969742 L 308.022152 393.973214 L 308.022152 995.969742 L 952.974684 995.969742 L 952.974684 393.973214 L 1041.007714 495.969742 L 1255.015823 351.004464 L 956.027492 4.030258 L 849.989122 4.030258 C 811.11254 91.269841 725.509296 148.499504 630 150.979663 C 534.989122 150.979663 452.999407 92.013889 410.010878 4.030258 Z M 304.969343 4.030258" transform="matrix(0.0396825,0,0,0.04,0,0)"/>
        </g>
      </svg>
      <div class="number text-xs md:text-sm" :style="{ color: '#' + colors.number }">
        {{ player.number }}
      </div>
      <div class="hidden md:block name absolute rounded-md bg-amber-950 text-white text-sm px-4">{{ player.name.split(' ').pop() }}</div>
    </div>
</template>
<script setup>
const props = defineProps({
    player: {
      type: Object,
      default: () => {},
    },
    colors: {
      type: Object,
      default: () => {},
    }
})
</script>
