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
    ul {
      li {
        .tab-toggle {
        }
      }
    }
  }
  &__wrapper {
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
      @apply flex overflow-x-auto border-b border-dark pl-5 md:pl-24 lg:pl-32 2xl:pl-48;
      ul {
        @apply flex;
        li {
          .tab-toggle {
            @apply block whitespace-nowrap rounded-t-3xl border-t border-l border-r border-dark bg-white py-4 px-7 text-sm uppercase text-dark lg:px-9 lg:py-5;
            &.active-tab {
              @apply bg-dark text-white;
            }
          }
        }
      }
    }
    .tabs__wrapper {
      @apply mt-10 px-5 md:px-24 lg:mt-20 lg:px-32 2xl:px-48;
      .services {
        @apply flex flex-col justify-between lg:flex-row;
        &__left {
          @apply w-full lg:w-1/2 2xl:w-1/3;
        }
        &__right {
          @apply w-full lg:w-2/5;
        }
      }
    }
  }
  &.vertical {
    @apply flex flex-col lg:flex-row;
    .tabs__nav {
      @apply w-full overflow-x-auto whitespace-nowrap lg:w-[20%] 2xl:w-1/5;
      ul {
        @apply flex lg:flex-col;
        li {
          .tab-toggle {
            @apply block whitespace-nowrap rounded-t-2xl border border-grey-light px-10 py-4 text-sm uppercase lg:rounded-t-none lg:px-6;
            &.active-tab {
              @apply border-transparent bg-dark text-white;
            }
          }
        }
      }
    }
    .tabs__wrapper {
      @apply mt-10 w-full lg:mt-0 lg:w-[80%] 2xl:w-4/5;
      .cabinet {
        @apply border-grey-light lg:border;
        .cabinet-wrapper {
          @apply lg:px-20 lg:py-20 2xl:px-32 2xl:py-32;
        }
      }
    }
  }
}
</style>
