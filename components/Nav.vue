<template>
  <div class="top-panel">
    <div class="nav-panel section-container">
      <div class="logo">
        <img src="~/assets/img/icons/logo.png" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="javascript:void(0)"
              class="link text-sm font-medium uppercase text-dark"
              >О нас</a
            >
          </li>
          <li class="has-submenu">
            <a
              href="javascript:void(0)"
              class="link text-sm font-medium uppercase text-dark"
              >Каталог</a
            >
            <div class="submenu"></div>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="link text-sm font-medium uppercase text-dark"
              >Бренды</a
            >
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="link text-sm font-medium uppercase text-dark"
              >Реализованные проекты</a
            >
          </li>
        </ul>
      </nav>
      <div class="navigation">
        <div class="navigation-left">
          <a href="">РУ</a>
          <a href="">EN</a>
          <a href="">КЗ</a>
        </div>
        <div class="navigation-right">
          <a href="">
            <img src="~/assets/img/icons/search.svg" alt="" />
          </a>
          <a href="">
            <img src="~/assets/img/icons/compare.svg" alt="" />
          </a>
          <a href="">
            <img src="~/assets/img/icons/person.svg" alt="" />
          </a>
          <a href="">
            <img src="~/assets/img/icons/favorite.svg" alt="" />
          </a>
          <a href="">
            <img src="~/assets/img/icons/bag.svg" alt="" />
          </a>
        </div>
        <button
          class="hamburger z-50 ml-3 block lg:hidden"
          :class="{ 'is-active': opened }"
          @click.prevent="$nuxt.$emit('toggle', 'mobileMenu')"
        ></button>
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
        class: "has-submenu",
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
      }
    });
  },
};
</script>

<style lang="scss">
.top-panel {
  // @apply fixed left-0 top-0;
  @apply border-b border-dark;
  .nav-panel {
    @apply flex items-center justify-between py-3;
    .logo {
      @apply lg:w-1/4;
      img {
        @apply w-10 md:w-12 lg:w-16;
      }
    }
    nav {
      @apply hidden lg:block;
      ul {
        @apply flex items-center space-x-5;
        li {
        }
      }
    }
    .navigation {
      @apply flex items-center justify-end lg:w-1/4;
      &-left {
        @apply mr-10 hidden items-center space-x-4 text-sm text-dark lg:flex;
      }
      &-right {
        @apply flex items-center space-x-2;
        a {
          img {
            @apply h-[24px] w-[24px];
          }
        }
      }
    }
  }
}
</style>
