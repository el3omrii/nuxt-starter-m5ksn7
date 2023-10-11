<template>
    <aside class="hidden md:block relative mr-auto">
            <div class="sticky top-16 rounded-md border border-gray-300 bg-gray-100 p-2">
                <button class="block p-2 mb-2 rounded-md hover:bg-gray-200" v-tooltip.arrow="'غرد على تويتر'">
                  <a :href="twUrl" target="_blank">
                    <svg class="w-5 h-5" aria-hidden="true" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979" fill="#1DA1F2"></path>
                  </svg>
                  </a>
                </button>
                <button class="block p-2 mb-2 rounded-md hover:bg-gray-200" v-tooltip.arrow="'شارك على فايسبوك'">
                  <a :href="fbUrl" target="_blank">
                    <svg class="w-5 h-5" aria-hidden="true" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g><path d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z" fill="#1877F2"></path><path d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z" fill="white"></path></g><defs><clipPath id="clip0_13664_80011"><rect width="16" height="16" fill="white" transform="translate(0 0.443604)"></rect></clipPath></defs>
                  </svg>
                  </a>
                </button>
                <button class="block p-2 mb-2 rounded-md hover:bg-gray-200" v-tooltip.arrow="'انشر على لينكد'">
                  <svg class="w-5 h-5" aria-hidden="true" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g><path d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z" fill="#0A66C2"></path></g><defs><clipPath id="clip0_13664_80017"><rect width="16" height="16" fill="white" transform="translate(0 0.443604)"></rect></clipPath></defs>
                  </svg>
                </button>
                <button class="block p-1 mb-2 rounded-md hover:bg-gray-200" v-tooltip.arrow="'انشر على تلغرام'">
                  <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <g>
                      <path fill="#29b6f6" d="M128 21.333C69.09 21.333 21.333 69.09 21.333 128c0 58.91 47.757 106.667 106.667 106.667 58.91 0 106.667-47.757 106.667-106.667 0-58.91-47.757-106.667-106.667-106.667z"/>
                      <path fill="#fff" d="m181.067 80-19.98 102.005s-.858 4.662-6.64 4.662c-3.071 0-4.655-1.462-4.655-1.462l-43.275-35.91-21.173-10.671-27.173-7.227S53.333 130 53.333 126c0-3.333 4.976-4.923 4.976-4.923l113.686-45.162c-.006-.006 3.472-1.254 6.005-1.248 1.557 0 3.333.666 3.333 2.666 0 1.334-.266 2.667-.266 2.667z"/>
                      <path fill="#b0bec5" d="m122.667 162.693-18.272 17.995s-.795.613-1.856.64a2.635 2.635 0 0 1-1.168-.23l5.14-31.813z"/>
                      <path fill="#cfd8dc" d="M159.45 97.045a2.668 2.668 0 0 0-3.738-.496l-70.379 42.118s11.232 31.424 12.944 36.864c1.718 5.445 3.094 5.573 3.094 5.573l5.14-31.813 52.438-48.512a2.66 2.66 0 0 0 .502-3.734z"/>
                    </g>
                  </svg>
                </button>
                <hr>
                <button @click="increaseSize" class="block p-2 rounded-md hover:bg-gray-200" v-tooltip.arrow="'تكبير الخط'">
                  <ChevronUpIcon class="w-5 h-5" />
                </button>
                <button @click="$emit('fontChanged', 'text-lg')" class="block p-2 rounded-md hover:bg-gray-200">
                  <LanguageIcon class="w-5 h-5" />
                </button>
                <button @click="decreaseSize" class="block p-2 rounded-md hover:bg-gray-200" v-tooltip.arrow="'تصغير الخط'">
                  <ChevronDownIcon class="w-5 h-5" />
                </button>
            </div>
        </aside>
</template>
<script setup>
import { ChevronUpIcon, ChevronDownIcon, LanguageIcon } from '@heroicons/vue/24/outline'

const config = useRuntimeConfig()
const route = useRoute()
const emit = defineEmits(['fontChanged'])
const fontSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl']
const size = ref('text-lg')
const increaseSize = () => {
  let idx = fontSizes.indexOf(size.value)
  if (fontSizes[++idx]) {
    size.value = fontSizes[idx]
    emit('fontChanged', size.value)
  }
  else
    return
}
const decreaseSize = () => {
  let idx = fontSizes.indexOf(size.value)
  if (fontSizes[--idx]) {
    size.value = fontSizes[idx]
    emit('fontChanged', size.value)
  }
  else
    return
}
// social icons
const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${config.public.BASE_URL}${route.fullPath}`
const twUrl = `http://www.twitter.com/share?url=${config.public.BASE_URL}${route.fullPath}`
</script>