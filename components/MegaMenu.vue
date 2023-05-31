<template>
  <div @mouseover="showMenu" @mouseleave="hideMenu" class="group">
    <div class="flex items-center">
      <NuxtLink to="/categories/كرة-عالمية" class="p-4" active-class="border-b-2 border-red-500">كرة عالمية</NuxtLink>
      <svg
        class="h-5 w-5 flex-none text-white transition group-hover:rotate-180"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <transition name="mega-menu">
    <div
      v-show="isVisible"
      class="absolute md:right-0 lg:right-auto p-2 w-full max-w-3xl h-44 rounded-lg shadow-md bg-primary/90"
    >
      <ul class="flex gap-x-4 font-medium text-xs">
        <li>
          <a
            class="block w-[100px] h-28 pt-28 mb-2 text-center transition hover:opacity-80 hover-text-customgray hover:scale-110 logo-soccer-6 spritesheet"
            href="/الدوري-الإنكليزي-الممتاز/"
            >الدوري الإنجليزي الممتاز - بريميرليج</a
          >
        </li>
        <li>
          <a
            class="block w-[100px] h-28 pt-28 mb-2 text-center transition hover:opacity-80 hover-text-customgray hover:scale-110 logo-soccer-7 spritesheet"
            href="/دوري-أبطال-أوروبا/"
            >دوري أبطال أوروبا - تشامبيونزليج</a
          >
        </li>
        <li class="block w-[100px] h-28 pt-28 mb-2 text-center transition hover:opacity-80 hover-text-customgray hover:scale-110 logo-soccer-8 spritesheet">
          <a
            href="/الدوري-الأوروبي/"
            >الدوري الأوروبي - يوروبا ليج</a
          >
        </li>
        <li class="block w-[100px] h-28 pt-28 mb-2 text-center transition hover:opacity-80 hover-text-customgray hover:scale-110 logo-soccer-10 spritesheet">
          <a
            href="/الدوري-الفرنسي-الدرجة-الأولى/"
            >الدوري الفرنسي الدرجة الأولى - ليج وان</a
          >
        </li>
        <li class="block w-[100px] h-28 pt-28 mb-2 text-center transition hover:opacity-80 hover-text-customgray hover:scale-110 logo-soccer-14 spritesheet">
          <a
            href="/الدوري-الإيطالي-الدرجة-الأولى/"
            >الدوري الإيطالي الدرجة الأولى - سيري آ</a
          >
        </li>
        <li class="block w-[100px] h-28 pt-28 mb-2 text-center transition hover:opacity-80 hover-text-customgray hover:scale-110 logo-soccer-19 spritesheet">
          <a
            href="/الدوري-الاسباني-الدرجة-الأولى/"
            >الدوري الإسباني الدرجة الأولى - الليجا</a
          >
        </li>
      </ul>
    </div>
    </transition>
  </div>
</template>
<script setup>
const isVisible = ref(false);
const showMenu = () => (isVisible.value = true);
const hideMenu = () => (isVisible.value = false);
</script>
<style>
.spritesheet {
    background-image: url('@/assets/spritesheet.png');
    background-repeat: no-repeat;
}
.logo-soccer-6 {
    background-position: -115px -335px;
}

.logo-soccer-7 {
    background-position: -225px -335px
}

.logo-soccer-8 {
    background-position: -446px -335px;
}

.logo-soccer-9 {
    background-position: -5px -445px;
}
.logo-soccer-10 {
    background-position: -116px -5px;
}
.logo-soccer-14 {
    background-position: -5px -115px;
}
.logo-soccer-19 {
    background-position: -5px -225px;
}
.mega-menu-enter-active, .mega-menu-leave-active{
    transition: all .2s ease-in-out;
}
.mega-menu-enter-from,
.mega-menu-leave-to{
   transform: translateY(-2rem);
   opacity: 0;
}
</style>