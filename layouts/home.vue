<template>
  <div dir="rtl" :class="{ 'overflow-hidden': isOpen }">
    <AppHeader />
    <main id="content" role="main">
      <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div
          class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12"
        >
          <!-- Content -->
          <slot name="content" />
        </div>
        <!-- End Content -->

        <!-- Sidebar -->
        <div
          class="
            lg:col-span-1
            lg:w-full
            lg:h-full
            lg:bg-gradient-to-r
            lg:from-gray-50
            lg:via-transparent
            lg:to-transparent
            dark:from-slate-800
          "
        >
          <slot name="sidebar" />
        </div>
        <!-- end sidebar -->
      </div>
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
const isOpen = useState('isOpen');
</script>
