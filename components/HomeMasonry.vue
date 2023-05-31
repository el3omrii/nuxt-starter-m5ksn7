<template>
  <div v-if="posts" class="masonry">
    <div class="masonry-brick group rounded-xl" v-for="post in posts">
        <div class="flex-shrink-0 relative w-full h-full overflow-hidden before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-950/[.8] before:z-[1] group-hover:scale-125 transition duration-500">
          <img :src="post.image" class="object-cover w-full h-full" :alt="post.title">
        </div>
        <div class="absolute bottom-0 inset-x-0 z-10">
            <div class="flex flex-col h-full p-4 sm:p-6">
              <NuxtLink :to="`/news/${post.slug}`" class="text-lg sm:text-xl font-semibold text-white group-hover:text-white/[.8]">
                {{ post.title }}
              </NuxtLink>
              <div class="flex items-center gap-x-2 mt-2 text-xs text-white/[.8]">
                <a href="#" v-for="category in post.categories" class="border rounded-md p-1 hover:bg-primary/[.6] hover:border-primary transition duration-300"># {{ category.name }}</a>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script setup>
const {data: posts} = await useApi('posts/featured', {key: 'home-featured'})
const { settings } = await useSettings()
</script>
<style>
.masonry {
  display: flex;
  flex-flow: row wrap;
  margin-left: -8px;
  /* Adjustment for the gutter */
  width: 100%;
  counter-reset: brick;
}

.masonry-brick {
  flex: auto;
  height: 250px;
  min-width: 150px;
  margin: 0 8px 8px 0;
  /* Some gutter */
  overflow: hidden;
  margin: 0 0 8px 8px;
  position: relative;
}

.masonry-brick:nth-child(4n+1) {
  width: 250px;
}

.masonry-brick:nth-child(4n+2) {
  width: 325px;
}

.masonry-brick:nth-child(4n+3) {
  width: 180px;
}

.masonry-brick:nth-child(4n+4) {
  width: 380px;
}
</style>
