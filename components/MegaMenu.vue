<template>
  <div @mouseover="showMenu" @mouseleave="hideMenu">
    <div class="flex items-center group">
      <a href="#" class="p-4">كرة عالمية</a>
      <svg class="h-5 w-5 flex-none text-gray-400 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
          </div>
    <div
      v-show="isVisible"
      class="absolute mt-4 p-4 w-full max-w-2xl rounded-lg shadow-md bg-teal"
    >
     <ul class="flex font-medium text-xs"><li><a class="competitions-logo logo-soccer-6 spritesheet" href="/الدوري-الإنكليزي-الممتاز/">الدوري الإنجليزي الممتاز - بريميرليج</a></li><li><a class="competitions-logo logo-soccer-7 spritesheet" href="/دوري-أبطال-أوروبا/">دوري أبطال أوروبا - تشامبيونزليج</a></li><li><a class="competitions-logo logo-soccer-8 spritesheet" href="/الدوري-الأوروبي/">الدوري الأوروبي - يوروبا ليج</a></li><li><a class="competitions-logo logo-soccer-10 spritesheet" href="/الدوري-الفرنسي-الدرجة-الأولى/">الدوري الفرنسي الدرجة الأولى - ليج وان</a></li><li><a class="competitions-logo logo-soccer-11 spritesheet" href="/الدوري-الألماني-الدرجة-الأولى/">الدوري الألماني الدرجة الأولى - بوندسليجا</a></li><li><a class="competitions-logo logo-soccer-14 spritesheet" href="/الدوري-الإيطالي-الدرجة-الأولى/">الدوري الإيطالي الدرجة الأولى - سيري آ</a></li><li><a class="competitions-logo logo-soccer-19 spritesheet" href="/الدوري-الاسباني-الدرجة-الأولى/">الدوري الإسباني الدرجة الأولى - الليجا</a></li></ul>
    </div>
  </div>
</template>
<script setup>
const isVisible = ref(false);
const showMenu = () => (isVisible.value = true);
const hideMenu = () => (isVisible.value = false);
</script>
