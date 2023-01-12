<template>
  <div class="mobile-nav" :class="{ opened: opened }">
    <div class="relative flex h-full w-full items-end justify-center px-20">
      <div class="flex h-full flex-col justify-between">
        <nav class="flex flex-col items-center pt-44" v-if="submenu">
          <ul class="space-y-6">
            <li>
              <a href="" class="mobile-link">О нас</a>
            </li>
            <li>
              <button
                class="has-menu mobile-link flex items-center"
                @click.prevent="submenu = false"
              >
                <span class="relative inline-block"
                  >Каталог
                  <div class="absolute -right-4 top-1/2 -translate-y-1/2">
                    <svg
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 9.5L5.25 5L0.75 0.500001"
                        stroke="#101820"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </li>
            <li>
              <a href="" class="mobile-link">Бренды</a>
            </li>
            <li>
              <a href="" class="mobile-link">Реализованные проекты</a>
            </li>
          </ul>
        </nav>
        <nav class="flex flex-col items-center pt-36" v-else>
          <button
            class="mb-10 text-xl font-medium uppercase"
            @click.prevent="submenu = true"
          >
            <span class="relative inline-block"
              >Каталог
              <div class="absolute -left-4 top-1/2 -translate-y-1/2">
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 0.5L1.25 5L5.75 9.5"
                    stroke="#101820"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </span>
          </button>
          <ul class="space-y-6">
            <li>
              <a href="" class="mobile-link mb-1">Мебель</a>
              <ul class="space-y-1">
                <li>
                  <a href="" class="mobile-sublink">В наличии </a>
                </li>
                <li>
                  <a href="" class="mobile-sublink">На заказ</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" class="mobile-link mb-1">Освещение</a>
              <ul class="space-y-1">
                <li>
                  <a href="" class="mobile-sublink">Декоративное </a>
                </li>
                <li>
                  <a href="" class="mobile-sublink">Техническое</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" class="mobile-link">Офисные решения</a>
            </li>
            <li>
              <a href="" class="mobile-link">Текстиль</a>
            </li>
            <li>
              <a href="" class="mobile-link">Декор</a>
            </li>
          </ul>
        </nav>
        <div class="mb-4 mt-10 flex items-center justify-center space-x-4">
          <a href="">РУ</a>
          <a href="">EN</a>
          <a href="">КЗ</a>
        </div>
      </div>
      <div class="page-icon m -left-12 top-10">
        <img src="~/assets/img/icons/m.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    opened: false,
    submenu: true,
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
  @apply invisible fixed z-40 flex h-full w-full scale-95 flex-col items-center justify-end overflow-y-auto bg-light  opacity-0 transition-all duration-300 ease-out-quad;
  nav {
    ul {
      @apply flex flex-col items-center justify-center  text-center;
      li {
        @apply invisible translate-y-10 transform opacity-0 transition duration-500 ease-in-out;

        a {
          @apply inline-block;
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
.mobile-link {
  @apply text-lg font-medium uppercase text-dark;
}
.mobile-sublink {
  @apply text-sm text-grey;
}
</style>
