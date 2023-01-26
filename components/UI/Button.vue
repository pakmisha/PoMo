<template>
  <button @click.prevent="$emit('click')">
    <img
      v-if="loader"
      class="h-5 w-14"
      src="~/assets/img/icons/loader.svg"
      alt=""
    />
    <span v-else> <slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    loader: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
