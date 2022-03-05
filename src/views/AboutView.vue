<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="msg" />
    <a>{{ a }}</a>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "@vue/runtime-dom";
import { useStore } from "vuex";

const store = useStore();
const msg = ref<string>("Hello World");
const a = computed(() => {
  return store.state.test;
});
setTimeout(() => {
  msg.value = "Hello Vue!";
  store.dispatch("setTest", "Hello Vue!");
}, 2000);
</script>
