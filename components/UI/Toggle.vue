<template>
  <div class="flex">
    <div
      @click.prevent="$emit('onToggle')"
      class="relative flex h-6 w-[45px] cursor-pointer items-center rounded-full border border-dark p-1"
    >
      <div :class="{ active: active }" class="toggle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    default: false,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.toggle {
  @apply h-4 w-4 translate-x-0 rounded-full bg-grey-light transition-all duration-300 ease-in-out;
  &.active {
    @apply translate-x-full bg-dark;
  }
}
</style>
