<template>
  <div>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const header = useState("header", () => {
  return { disposition: 'homepage', meta: {}}
});
const { setSettings } = useSettings()

useAsyncData('settings', async () => {
  const response = await $fetch('http://api.koratv.com/v1/settings')
  setSettings(response)
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
