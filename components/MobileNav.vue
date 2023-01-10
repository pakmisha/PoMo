<template>
  <div class="mobile-nav" :class="{ opened: opened }">
    <div class="flex h-[70%] flex-col justify-between">
      <nav>
        <ul>
          <li
            v-for="(item, index) in items"
            :key="index"
            :style="'transition-delay:' + (index + 2) * 90 + 'ms;'"
          >
            <a
              :href="item.link"
              class="block text-lg font-medium uppercase text-dark"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </nav>
      <div class="mb-4 flex items-center justify-center space-x-4">
        <a href="">РУ</a>
        <a href="">EN</a>
        <a href="">КЗ</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    opened: false,
    items: [
      {
        title: "О нас",
        link: "",
      },
      {
        title: "Каталог",
        link: "",
      },
      {
        title: "Бренды",
        link: "",
      },
      {
        title: "Реализованные проекты",
        link: "",
      },
    ],
  }),
  created() {
    this.$nuxt.$on("toggle", (name) => {
      if (name == "mobileMenu") {
        this.opened = !this.opened;
        document.querySelector("html").classList.toggle("no-scroll");
      }
    });
  },
};
</script>

<style lang="scss">
.mobile-nav {
  @apply invisible fixed z-40 flex h-full w-full scale-95 flex-col items-center justify-end bg-light px-28 opacity-0 transition-all duration-300 ease-out-quad;
  nav {
    ul {
      @apply space-y-6 text-center;
      li {
        @apply invisible translate-y-10 transform opacity-0 transition duration-500 ease-in-out;
        a {
        }
      }
    }
  }
  &.opened {
    @apply visible scale-100 opacity-100;
    li {
      @apply visible translate-y-0 opacity-100;
      &:nth-of-type(1) {
        transition-delay: 200ms;
      }
      &:nth-of-type(2) {
        transition-delay: 300ms;
      }
      &:nth-of-type(3) {
        transition-delay: 400ms;
      }
      &:nth-of-type(4) {
        transition-delay: 500ms;
      }
    }
  }
}
</style>
