<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model="msg" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/runtime-dom";

const msg = ref<string>("Hello World");
</script>
