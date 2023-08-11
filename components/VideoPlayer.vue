<template>
  <media-controller class="w-full aspect-video">
    <video
    slot="media"
    ref="videoPlayer"
  ></video>
  <media-loading-indicator slot="centered-chrome"></media-loading-indicator>n
  <media-control-bar class="flex m-4 p-2 bg-black/90 rounded-full">
    <media-play-button ></media-play-button>
    <media-live-button>
      <span slot="text">مباشر</span>
    </media-live-button>
    <div class="flex flex-grow gap-x-8 justify-center text-xl">
      <div class="flex items-center flex-row-reverse gap-x-2"><img :src="options.away_logo" class="w-8 h-8"/> <span>{{ options.away }}</span></div>
      <div class="flex items-center gap-x-2"><img :src="options.home_logo" class="w-8 h-8"/> <span>{{ options.home }}</span></div>
    </div>
    <media-mute-button></media-mute-button>
    <media-volume-range></media-volume-range>
    <media-rendition-selectmenu></media-rendition-selectmenu>
    <media-pip-button></media-pip-button>
    <media-fullscreen-button></media-fullscreen-button>
  </media-control-bar>
</media-controller>

</template>  
<script setup>
import Hls from 'hls.js'
import { MediaLoadingIndicator , MediaController, MediaControlBar, MediaFullscreenButton, MediaPipButton, MediaMuteButton, MediaLiveButton, MediaPlayButton } from 'media-chrome'
import 'media-chrome/dist/experimental/media-rendition-selectmenu.js'
const props = defineProps({
    url: String,
    options: Object
})
const videoPlayer = ref()
var hls = null
onMounted(() => {
    hls = new Hls({
      debug: false,
    })

    hls.loadSource(props.url)
    hls.attachMedia(videoPlayer.value)
    hls.on(Hls.Events.MANIFEST_PARSED, () => videoPlayer.value.play() )
})
onUnmounted(() => {
  hls.destroy()
})
</script>
<style>
media-controller {
  direction: ltr;
  --media-secondary-color: rgba(255, 255, 255, 0);
}
</style>
