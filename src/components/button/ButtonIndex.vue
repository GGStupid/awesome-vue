<template>
  <button @click="onClick">
    <slot name="left"></slot>
    {{ props.text }}
    <slot name="right"></slot>
  </button>
</template>

<script lang="ts" setup>
import { ButtonProps } from "./type";

const props = defineProps<ButtonProps>();

const emit = defineEmits(["click"]);
const onClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<style lang="scss"></style>
