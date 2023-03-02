<template>
  <ul class="section-container mt-9 hidden items-center md:flex">
    <li class="text-sm uppercase">
      <NuxtLink to="/">Главная</NuxtLink>
    </li>
    <li class="text-sm uppercase" v-for="(item, index) in path" :key="index">
      <span class="mx-1">/</span>
      <NuxtLink :to="item.link" v-tr="$i18n">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    path: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
