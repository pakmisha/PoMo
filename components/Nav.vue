<template>
  <div id="stick" class="top-panel" :class="{ stick: stick }">
    <UISearch />
    <div class="nav-panel section-container relative">
      <div class="logo">
        <UILink link="/" class="inline-block w-auto">
          <img src="~/assets/img/icons/logo.png" alt="" />
        </UILink>
      </div>

      <nav>
        <ul>
          <li>
            <UILink link="/about" class="link text-sm uppercase text-dark"
              >О нас</UILink
            >
          </li>
          <li class="has-submenu">
            <UILink link="/catalog" class="link text-sm uppercase text-dark"
              >Каталог</UILink
            >
            <div class="submenu section-container">
              <UISlider
                :options="{
                  slidesPerView: 5,
                  spaceBetween: 10,
                }"
              >
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(item, index) in categories"
                    :key="index"
                  >
                    <UILink link="" class="submenu-item">
                      <div class="submenu-item-image mb-2">
                        <img :src="$asset(item.image)" alt="" />
                      </div>
                      <p class="text-sm font-semibold uppercase text-dark">
                        {{ item.title[$i18n.locale] }}
                      </p>
                    </UILink>
                    <div>
                      <div class="mt-2">
                        <UILink link="" class="block text-sm text-grey">
                          {{ item.subCategoryOne }}
                        </UILink>
                        <UILink link="" class="block text-sm text-grey">
                          {{ item.subCategoryTwo }}
                        </UILink>
                      </div>
                    </div>
                  </div>
                </div>
              </UISlider>
            </div>
          </li>
          <li>
            <UILink link="/brands" class="link text-sm uppercase text-dark"
              >Бренды</UILink
            >
          </li>
          <li>
            <UILink link="/projects" class="link text-sm uppercase text-dark"
              >Реализованные проекты</UILink
            >
          </li>
        </ul>
      </nav>
      <div class="navigation">
        <div class="navigation-left">
          <nuxt-link
            class="lang-btn active"
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            >{{ locale.name }}</nuxt-link
          >
        </div>
        <div class="navigation-right">
          <button @click.prevent="$nuxt.$emit('toggle', 'search')">
            <img src="~/assets/img/icons/search.svg" alt="" />
          </button>
          <UILink
            link="/compare"
            class="has-dialog has-dialog-compare z-30 hidden lg:block"
          >
            <img src="~/assets/img/icons/compare.svg" alt="" />
            <DialogCompare />
          </UILink>
          <UILink :link="$auth.state.loggedIn ? '/cabinet' : '/login'">
            <img src="~/assets/img/icons/person.svg" alt="" />
          </UILink>
          <UILink link="/favorite" class="hidden lg:block">
            <img src="~/assets/img/icons/favorite.svg" alt="" />
          </UILink>
          <button
            class="relative"
            @click.prevent="$nuxt.$emit('toggle', 'sidebarCart')"
          >
            <img src="~/assets/img/icons/bag.svg" alt="" />
            <div
              class="absolute -right-2 -bottom-2 flex h-5 w-5 items-center justify-center rounded-full bg-dark text-xs text-white"
            >
              {{ cart.length > 0 ? cart.length : "0" }}
            </div>
          </button>
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
import { mapGetters } from "vuex";
export default {
  data: () => ({
    opened: false,
    stick: false,
    scrollPosition: 0,
  }),
  created() {
    this.$nuxt.$on("toggle", (name) => {
      if (name == "mobileMenu") {
        this.opened = !this.opened;
      }
    });
    // this.$nuxt.$on("toggle", (name) => {
    //   if (name == "sidebarCart") {
    //     this.activeCart = true;
    //   }
    // });
  },
  computed: {
    ...mapGetters({
      categories: "products/categories",
      cart: "cart/items",
    }),
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    handleScroll() {
      const st = document.getElementById("stick");
      const topPos = st.offsetTop;
      if (topPos > 10) {
        this.stick = true;
      }
    },
  },
};
</script>

<style lang="scss">
.top-panel {
  // @apply fixed top-0 left-0 right-0 z-50;
  @apply relative border-b border-dark;
  .nav-panel {
    @apply relative z-40 flex items-center justify-between bg-white py-3;
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
          &.has-submenu {
            &:hover {
              .link {
                &:after {
                  @apply h-px w-full;
                }
              }
              .submenu {
                @apply visible translate-y-0 opacity-100;
              }
            }

            .submenu {
              @apply invisible absolute left-0 top-[101%] right-0 z-50 w-full translate-y-10 bg-white pt-11 pb-16 opacity-0 shadow-md transition-all duration-500 ease-in-expo;
              &-item {
                @apply inline-block;
                &-image {
                  @apply aspect-square;
                  img {
                    @apply h-full w-full object-cover;
                  }
                }
              }
            }
          }
        }
      }
    }
    .navigation {
      @apply flex items-center justify-end lg:w-1/4;
      &-left {
        @apply mr-10 hidden items-center space-x-4 text-sm  lg:flex;
        .lang-btn {
          @apply text-grey-light;
          &.active {
            @apply text-dark;
          }
        }
      }
      &-right {
        @apply flex items-center space-x-2;
        a {
          img {
            @apply h-[24px] w-[24px];
          }
        }
        .has-dialog {
          @apply relative;
          .dialog-compare {
            @apply invisible translate-y-10 scale-95 opacity-0 transition-all duration-300 ease-out-quad;
          }
          &:hover {
            .dialog-compare {
              @apply visible translate-y-0 scale-100 opacity-100;
            }
          }
        }
      }
    }
  }
}
</style>
