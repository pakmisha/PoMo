<template>
  <div class="swiper" :ref="'slider' + _uid">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: {},
    },
  },

  mounted() {
    this.$swiper(this.$refs["slider" + this._uid], this.options);
  },
};
</script>

<style></style>
