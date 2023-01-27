<template>
  <button @click.prevent="$emit('click')">
    <!-- <img
      v-if="loader"
      class="h-5 w-14"
      src="~/assets/img/icons/loader.svg"
      alt=""
    /> -->
    <svg
      v-if="loader"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
        margin: auto;
        background: none;
        display: block;
        shape-rendering: auto;
      "
      width="56px"
      height="20px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#ffffff"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
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
