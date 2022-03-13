<template>
  <div>
    <input ref="fileRef" type="file" @change="handleChange" />
  </div>
</template>

<script lang="ts" setup>
import { serviceUploadFile } from "@/service/upload";
import { Ref, ref } from "@vue/runtime-dom";

const fileRef = ref() as Ref<HTMLInputElement>;
// const file = ref();
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files as FileList;
  const form = new FormData();
  form.append("file", file[0]);
  serviceUploadFile(form);
};
</script>
