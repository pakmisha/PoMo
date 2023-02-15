<template>
  <div class="mobile-nav" :class="{ opened: opened }">
    <div class="relative flex h-full w-full items-end justify-center px-20">
      <div class="flex h-full flex-col justify-center">
        <nav class="flex flex-col items-center" v-if="submenu">
          <ul class="space-y-6">
            <li>
              <UILink
                @click.native="$nuxt.$emit('toggle', 'mobileMenu')"
                link="/about"
                class="mobile-link"
                >О нас</UILink
              >
            </li>
            <li>
              <!-- <button
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
              </button> -->
              <UILink
                @click.native="$nuxt.$emit('toggle', 'mobileMenu')"
                link="/catalog"
                class="mobile-link"
                >Каталог</UILink
              >
            </li>
            <li>
              <UILink
                @click.native="$nuxt.$emit('toggle', 'mobileMenu')"
                link="/brands"
                class="mobile-link"
                >Бренды</UILink
              >
            </li>
            <li>
              <UILink
                @click.native="$nuxt.$emit('toggle', 'mobileMenu')"
                link="/projects"
                class="mobile-link"
                >Реализованные проекты</UILink
              >
            </li>
            <li>
              <UILink
                @click.native="$nuxt.$emit('toggle', 'mobileMenu')"
                link="/compare"
                class="mobile-link"
                >Сравнение товаров</UILink
              >
            </li>
            <li>
              <UILink
                @click.native="$nuxt.$emit('toggle', 'mobileMenu')"
                link="/favorite"
                class="mobile-link"
                >Избранные товары</UILink
              >
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
              <UILink link="/catalog" class="mobile-link mb-1">Мебель</UILink>
              <ul class="space-y-1">
                <li>
                  <UILink link="" class="mobile-sublink">В наличии </UILink>
                </li>
                <li>
                  <UILink link="" class="mobile-sublink">На заказ</UILink>
                </li>
              </ul>
            </li>
            <li>
              <UILink link="" class="mobile-link mb-1">Освещение</UILink>
              <ul class="space-y-1">
                <li>
                  <UILink link="" class="mobile-sublink">Декоративное </UILink>
                </li>
                <li>
                  <UILink link="" class="mobile-sublink">Техническое</UILink>
                </li>
              </ul>
            </li>
            <li>
              <UILink link="" class="mobile-link">Офисные решения</UILink>
            </li>
            <li>
              <UILink link="" class="mobile-link">Текстиль</UILink>
            </li>
            <li>
              <UILink link="" class="mobile-link">Декор</UILink>
            </li>
          </ul>
        </nav>
        <div class="mb-4 mt-10 flex items-center justify-center space-x-4">
          <UILink link="">РУ</UILink>
          <UILink link="">EN</UILink>
          <UILink link="">КЗ</UILink>
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
  @apply invisible fixed z-40 flex h-full w-full scale-95 flex-col items-center justify-end overflow-y-auto bg-white  opacity-0 transition-all duration-300 ease-out-quad;
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
      &:nth-of-type(5) {
        transition-delay: 600ms;
      }
      &:nth-of-type(6) {
        transition-delay: 700ms;
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
