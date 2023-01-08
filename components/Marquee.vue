<template>
  <div class="flex overflow-hidden border-t border-dark py-4">
    <div class="marquee">
      <div class="marquee-item" v-for="(item, index) in items" :key="index">
        {{ item.title }}
      </div>
    </div>
    <div aria-hidden="true" class="marquee">
      <div class="marquee-item" v-for="(item, index) in items" :key="index">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "[Не про мебель — а про чувства]",
      },
      {
        title: "[Не про декор — а про детали]",
      },
      {
        title: "[Не про искусство — а про историю]",
      },
      {
        title: "[Не про мебель — а про атмосферу]",
      },
      {
        title: "[Не про рынок — а про возможности]",
      },
      {
        title: "[Не про мебель — а про чувства]",
      },
      {
        title: "[Не про декор — а про детали]",
      },
      {
        title: "[Не про искусство — а про историю]",
      },
      {
        title: "[Не про мебель — а про атмосферу]",
      },
      {
        title: "[Не про рынок — а про возможности]",
      },
    ],
  }),
};
</script>

<style lang="scss">
.marquee {
  @apply flex min-w-full items-center justify-around;
  animation: scroll 10s linear infinite;
  flex-shrink: 0;
  &-item {
    @apply relative whitespace-nowrap px-7 text-xs uppercase text-dark md:text-sm;
    flex: 0 0 auto;
    transition: all 0.1s ease-in-out;
    &:after {
      content: "";
      @apply absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-dark;
    }
  }
}
</style>
