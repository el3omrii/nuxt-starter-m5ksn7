<template>
    <media-controller class="w-full aspect-video" id="myctrl">
      <video autoplay
      slot="media"
      ref="videoPlayer"
      crossorigin
    ></video>
    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-control-bar class="flex m-4 p-2 bg-black/90 rounded-full">
      <media-play-button ></media-play-button>
      <media-live-button>
        <span slot="text">مباشر</span>
      </media-live-button>
      <div class="flex flex-grow gap-x-8 justify-center text-xl">
        <div class="flex items-center flex-row-reverse gap-x-2"><img :src="meta.away_logo" class="w-8 h-8"/> <span class="sm:block hidden">{{ meta.away }}</span></div>
        <div class="flex items-center gap-x-2"><img :src="meta.home_logo" class="w-8 h-8"/> <span class="sm:block hidden">{{ meta.home }}</span></div>
      </div>
      <media-mute-button></media-mute-button>
      <media-volume-range></media-volume-range>
      <media-rendition-selectmenu media-controller="myctrl">
          <media-rendition-listbox slot="listbox" media-controller="myctrl">
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
  
  const shaka = import ('shaka-player')
  const props = defineProps({
      src: Object,
      meta: Object
  })
  const config = useRuntimeConfig()
  const videoPlayer = ref()
  let player = null
  onMounted(() => {
    var m_url = ''
    switch (props.src.url) {
    case 'ssc1':
        m_url = 'https://ssc-1-on-prem-ak.akamaized.net/out/v1/ec938957da2849879f0cfac7e309ff38/index.mpd'
      break;
    case 'ssc2':
        m_url = 'https://ssc-2-on-prem-ak.akamaized.net/out/v1/d9a2acf5f809461ca47714440fcbc0f4/index.mpd'
      break;
    case 'ssc3':
        m_url = 'https://ssc-3-on-prem-ak.akamaized.net/out/v1/ad2b1abef05c419aa6a4e6aee6d269a2/index.mpd'
      break;
    case 'ssc4':
        m_url = 'https://ssc-4-on-prem-ak.akamaized.net/out/v1/3e442c7dad1b44b6a0914aa26b62a892/index.mpd'
      break;
    case 'ssc_extra':
        m_url = 'https://ssc-extra1-on-prem-cw-ak.akamaized.net/out/v1/d309ac98b822425d9435cca654211498/index.mpd'
      break;
      default:
        m_url = props.src.url;
        break;
  }
    shaka.then((shaka) => {
      //console.log(decrypt(config.public.KEY.toString(), config.public.KEY1.toString()))
       shaka.polyfill.installAll();
      if (shaka.Player.isBrowserSupported()) {
        player = new shaka.Player(videoPlayer.value)
        //if(props.src.toString().startsWith('ssc'))
          player.configure({
                drm: {
                    servers : {'org.w3.clearkey': 'https://m.dtv.fi/dash/laurl_ck.php'},
                    //clearKeys: /*JSON.parse(JSON.stringify(config.public.KEY1))*/{'0bf5a32868224a6f9f3a749a9ea20eb2':'0ace749c97932aa44434da3a88c1ee69'}
                }
            })
            window.player = player
        player.load(m_url).then(function() {
          console.log('The video has now been loaded!');
        }).catch(onError);  
      } else {
        console.error('Browser not supported!');
      }
    })
  })
  onUnmounted(() => {
    player.unload()
  })
  const crypt = (salt, text) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

const decrypt = (salt, encoded) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};
  const onError = error => console.log('Error code', error.code, 'object', error)
  </script>
  <style>
  media-controller {
    direction: ltr;
    --media-secondary-color: rgba(255, 255, 255, 0);
  }
  </style>
  