<template>
  <media-controller class="w-full aspect-video">
    <hls-video id="video2" autoplay
    slot="media"
    ref="videoPlayer"
    :src="props.src.url"
  ></hls-video>
  <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
  <media-control-bar class="flex sm:m-4 m-2 sm:p-2 p-0 bg-black/90 rounded-full">
    <media-play-button ></media-play-button>
    <media-live-button>
      <span slot="text">مباشر</span>
    </media-live-button>
    <div class="flex flex-grow gap-x-8 justify-center text-xl">
      <div class="flex items-center flex-row-reverse gap-x-2"><img :src="meta.away_logo" class="sm:w-8 w-6 h-auto"/> <span class="hidden md:block">{{ meta.away }}</span></div>
      <div class="flex items-center gap-x-2"><img :src="meta.home_logo" class="sm:w-8 w-6 h-auto"/> <span class="hidden md:block">{{ meta.home }}</span></div>
    </div>
    <media-mute-button></media-mute-button>
    <media-volume-range></media-volume-range>
    <media-rendition-selectmenu>
        <media-rendition-listbox slot="listbox">
          <div slot="header">الجودة</div>
        </media-rendition-listbox>
      </media-rendition-selectmenu>
    <media-pip-button></media-pip-button>
    <media-fullscreen-button></media-fullscreen-button>
  </media-control-bar>
</media-controller>

</template>  
<script setup>
import { MediaLoadingIndicator , MediaController, MediaControlBar, MediaFullscreenButton, MediaPipButton, MediaMuteButton, MediaLiveButton, MediaPlayButton } from 'media-chrome'
import 'media-chrome/dist/experimental/media-rendition-selectmenu.js'
import 'hls-video-element'
import { Buffer } from 'buffer';
import process from 'process';
//import videojs from 'video.js'
const props = defineProps({
    src: Object,
    meta: Object
})
onMounted(()=> {
  window.Buffer = Buffer
  window.process = process
})
onUnmounted(() => {
  const video = document.querySelector('hls-video')
  video.api.destroy()
})
const onError = error => console.log('Error code', error.code, 'object', error)
useHead({
  script: [
    { type: 'text/javascript',
      textContent: 'var global = (global === undefined) ? window : global;'
    }
  ]
})
</script>
<style>
media-controller {
  direction: ltr;
  --media-secondary-color: rgba(255, 255, 255, 0);
}
</style>
