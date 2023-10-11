<template>
  <media-controller class="w-full aspect-video">
    <videojs-video id="video2" autoplay
    slot="media"
    ref="videoPlayer"
    :src="props.src.url"
  ></videojs-video>
  <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
  <media-control-bar class="flex m-4 p-2 bg-black/90 rounded-full">
    <media-play-button ></media-play-button>
    <media-live-button>
      <span slot="text">مباشر</span>
    </media-live-button>
    <div class="flex flex-grow gap-x-8 justify-center text-xl">
      <div class="flex items-center flex-row-reverse gap-x-2"><img :src="meta.away_logo" class="w-8 h-8"/> <span>{{ meta.away }}</span></div>
      <div class="flex items-center gap-x-2"><img :src="meta.home_logo" class="w-8 h-8"/> <span>{{ meta.home }}</span></div>
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
import 'videojs-video-element'
//import videojs from 'video.js'
const props = defineProps({
    src: Object,
    meta: Object
})
onUnmounted(() => {
  videojs.getAllPlayers()[0].dispose()
})
const onError = error => console.log('Error code', error.code, 'object', error)
</script>
<style>
media-controller {
  direction: ltr;
  --media-secondary-color: rgba(255, 255, 255, 0);
}
</style>
