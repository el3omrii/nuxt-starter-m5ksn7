<template>
<div id="video2"></div>
</template>  
<script setup>
import { MediaLoadingIndicator , MediaController, MediaControlBar, MediaFullscreenButton, MediaPipButton, MediaMuteButton, MediaLiveButton, MediaPlayButton } from 'media-chrome'
import 'media-chrome/dist/experimental/media-rendition-selectmenu.js'
import 'https://cdn.radiantmediatechs.com/rmp/9.8.1/js/rmp.min.js'
//let rmp = await loadScript(scriptUrl, 'rmp')

const src = {
  dash: 'https://ssc-1-on-prem-ak.akamaized.net/out/v1/ec938957da2849879f0cfac7e309ff38/index.mpd' //props.src.url
}

const settings = {
  licenseKey: 'dmJ0bWJ4YmRqaUAxNTQ3ODA1',
  src: src,
  // The player will automatically resize itself based on context and those reference width/height values
  width: 640,
  height: 360,
  // Let us select a skin
  skin: 's1',
  shakaDrm: { clearKeys: { 'e76ae17d861546be9c238e6582509c2c':'de1a91e2306bf8442236a80477f526e1' }
 }
}
  
const props = defineProps({
    src: Object,
    meta: Object
})
const videoPlayer = ref()
let player = null
onMounted(() => {
    setTimeout(() => {
        player = new RadiantMP('video2')
        player.init(settings)
    }, 2000);
})
onUnmounted(() => {
  player.unload()
})
const onError = error => console.log('Error code', error.code, 'object', error)
</script>
<style>
media-controller {
  direction: ltr;
  --media-secondary-color: rgba(255, 255, 255, 0);
}
</style>
