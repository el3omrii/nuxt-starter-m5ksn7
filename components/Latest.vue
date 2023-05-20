<template>
    <div class="w-full p-5 rounded-xl shadow border divide-y divide-gray-300">
        <h3 class="font-bold mb-4">أحدث المقالات</h3>
        <div v-for="post in data.posts" class="flex items-center py-4 text-sm">
            <img :src="post.image" alt="" class="w-12 h-12 ml-4 rounded-md object-cover" />
            <a href="#">
                <h5>{{ post.title }}</h5>
            </a>
        </div>
    </div>
</template>
<script setup>
import data from "@/assets/dummy.json";
</script>