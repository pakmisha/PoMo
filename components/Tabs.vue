<template>
  <div class="tabs">
    <div class="tabs__nav">
      <ul>
        <li class="" v-for="(item, index) in titles.split(',')" :key="index">
          <a
            :href="'.tab-' + index"
            :class="{ 'active-tab': index === activeTab }"
            @click.prevent="activeTab = index"
            class="tab-toggle"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
    <div class="tabs__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: String,
    },
  },
  data: () => ({
    activeTab: 0,
  }),
  mounted() {
    document
      .querySelectorAll(".tabs__wrapper > div")[0]
      .classList.add("active");
  },
  watch: {
    activeTab(value) {
      const active = document.querySelector(".tabs__wrapper > .active");
      if (active) {
        active.classList.remove("active");
      }
      document
        .querySelectorAll(".tabs__wrapper > div")
        [value].classList.add("active");
    },
  },
};
</script>

<style lang="scss">
.tabs {
  &__nav {
  }
  &__wrapper {
    @apply mt-20 px-5 md:px-24 lg:px-32 2xl:px-48;
    > div {
      @apply invisible h-0 translate-y-20 overflow-hidden opacity-0 transition-all duration-300 ease-in-quad;
      &.active {
        @apply visible h-auto translate-y-0 opacity-100;
      }
    }
  }
  &.horizontal {
    @apply flex flex-col;
    .tabs__nav {
      @apply flex border-b border-dark pl-5 md:pl-24 lg:pl-32 2xl:pl-48;
      ul {
        @apply flex;
        li {
          .tab-toggle {
            @apply block rounded-t-3xl border-t border-l border-r border-dark bg-white px-9 py-5 text-sm uppercase text-dark;
            &.active-tab {
              @apply bg-dark text-white;
            }
          }
        }
      }
    }
    .tabs__wrapper {
      .services {
        @apply flex justify-between;
        &__left {
          @apply w-1/3;
        }
        &__right {
          @apply w-2/5;
        }
      }
    }
  }
  &__nav {
  }
}
</style>
