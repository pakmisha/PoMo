<template>
  <div :class="{ active: opened }" @click.self="opened = false">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
  data: () => ({
    opened: false,
  }),
  created() {
    this.$nuxt.$on("open-modal", (name) => {
      if (this.name == name) {
        this.opened = true;
      }
    });

    this.$nuxt.$on("close-modal", (name) => {
      if (this.name == name) {
        this.opened = false;
      }
    });
  },
};
</script>

<style></style>
