<template>
  <div
    class="sticky w-full max-h-full h-screen md:h-[600px] justify-center items-center bg-purple-700">
    <div
      v-if="isGuest"
      class="p-4">
      <p class="my-4 text-white">اختر اسما لتشارك في المحادثة:</p>
      <div class="flex items-center">
        <input
          @keydown.enter="login"
          v-model="username"
          class="px-4 py-2 rounded-r-md text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="اسم مستعار" />
        <button
          @click="login"
          class="p-3 rounded-l-md bg-indigo-500">
          دخول
        </button>
      </div>
    </div>
    <div
      v-else
      class="p-4 border-b border-white flex items-center text-sm text-white">
      <div class="flex flex-grow justify-start items-center gap-2">
        <span
          class="w-12 h-12 rounded-full border-2 border-green-600 overflow-auto"
          v-html="avatar"></span>
        <div class="flex flex-col">
          <span class="mb-2 text-white">مرحبا بك {{ username }}</span>
          <button
            @click="logout"
            class="px-6 py-1 rounded-full cursor-pointer text-white bg-indigo-500 hover:bg-indigo-800">
            خروج
          </button>
        </div>
      </div>
      <div class="relative py-4">
        <div class="top-1 absolute left-4">
          <p
            class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-white">
            3
          </p>
        </div>
        <ChatBubbleLeftEllipsisIcon class="w-8 h-8" />
      </div>
    </div>
    <div class="w-full h-full md:h-[500px] flex flex-col p-4">
      <div
        id="messages"
        class="flex flex-col flex-grow space-y-2 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        <div
          v-for="conversation in conversations"
          class="chat-message">
          <div class="flex items-end">
            <div
              class="flex flex-col space-y-2 text-xs mx-2 order-2 items-start">
                <div
                  class="w-full p-2 rounded-lg inline-block rounded-br-none bg-gray-300 text-gray-600"
                  >
                  <div class="flex justify-between text-white mb-2">
                <span class="font-bold">{{  username }}</span>
                <span class="mr-2">{{ conversation.created_at }}</span>
              </div>
              <span>{{ conversation.message }}</span>
            </div>
            </div>
            <span
              class="w-6 h-6 flex-shrink-0 rounded-md order-1"
              v-html="
                createAvatar(funEmoji, {
                  seed: conversation.username,
                }).toString()
              "></span>
          </div>
        </div>
      </div>
      <div
        v-if="!isGuest"
        class="w-full flex items-center mt-4">
        <input
          v-model="message"
          @keydown.enter="send"
          class="flex-grow px-4 py-2 rounded-r-md text-gray-700 border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="اكتب رسالة" />
        <button
          @click="send"
          class="p-3 rounded-l-md bg-indigo-500">
          إرسال
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/outline";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
const config = useRuntimeConfig();
const {
  username,
  avatar,
  isGuest,
  message,
  conversations,
  login,
  logout,
  send,
  initPusher,
} = usePusher();

onMounted(() => {
  isGuest.value = localStorage.getItem("user") == null;
  if (!isGuest.value) {
    username.value = JSON.parse(localStorage.getItem("user")).username;
    avatar.value = createAvatar(funEmoji, {
      seed: username.value,
      // ... other options
    }).toString();
  }
  //Initialize pusher
  var pusher = initPusher();
  //subscribe to channel
  var channel = pusher.subscribe("ch");
  channel.bind("App\\Events\\NewMessage", (data) => {
    conversations.value.push({
      username: data.conversation.username,
      message: data.conversation.message,
      created_at: data.conversation.created_at
    });
  });
});
</script>
