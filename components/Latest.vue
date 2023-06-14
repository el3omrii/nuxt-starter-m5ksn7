<template>
    <div class="w-full p-5 rounded-xl shadow border divide-y divide-gray-300">
        <h3 class="text-xl font-bold mb-4">أحدث المقالات</h3>
        <div v-for="post in posts" class="flex items-center py-4 text-sm">
            <img :src="post.image" alt="" class="w-18 h-20 lg:w-14 lg:h-16 object-cover ml-4 rounded-md object-cover" />
            <div class="flex flex-col">
            <NuxtLink :to="`/${post.category.slug}/${post.slug}`">
                <h5 class="text-lg lg:text-sm">{{ post.title }}</h5>
            </NuxtLink>
            <span class="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-xs text-secondary">{{ post.date }}</p>
            </span>
            </div>
        </div>
    </div>
</template>
<script setup>
const { data: posts } = await useApi('posts/latest')
</script>