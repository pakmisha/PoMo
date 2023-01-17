<template>
  <NuxtLink :to="link">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
