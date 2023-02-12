<template>
  <UILink
    :link="'/brands/' + brand.slug"
    class="block bg-light transition-all duration-300 ease-in-out"
  >
    <img :src="$asset(brand.logo)" alt="" />
  </UILink>
</template>

<script>
export default {
  props: {
    brand: {
      type: Object,
    },
  },
};
</script>

<style></style>
