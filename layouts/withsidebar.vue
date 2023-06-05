<template>
  <div dir="rtl" :class="{ 'overflow-hidden': isOpen }">
    <AppHeader />
    <main class="content" role="main">
      <div class="max-w-[85rem] my-8 px-4 sm:px-6 lg:px-8 mx-auto">
        <!-- Matchs -->
        <slot name="matchs" />
        <!-- End Matchs -->
        <div
          class="grid lg:grid-cols-4 lg:gap-x-12"
        >
          <div class="lg:col-span-3">
            <!-- Content -->
            <slot name="content" />
            <!-- End Content -->
          </div>
          <!-- Sidebar -->
          <aside
            class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800"
          >
            <slot name="sidebar" />
        </aside>
          <!-- end sidebar -->
        </div>
      </div>
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>
<script setup>
const isOpen = useState("isOpen");
</script>
