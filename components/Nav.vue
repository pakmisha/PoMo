<template>
  <div id="stick" class="top-panel" :class="{ stick: stick }">
    <div class="nav-panel section-container relative">
      <a href="/" class="logo block">
        <img src="~/assets/img/icons/logo.png" alt="" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/about" class="link text-sm uppercase text-dark">О нас</a>
          </li>
          <li class="has-submenu">
            <a
              href="javascript:void(0)"
              class="link text-sm uppercase text-dark"
              >Каталог</a
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
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <a href="" class="submenu-item">
                      <div class="submenu-item-image mb-2">
                        <img
                          :src="require(`~/assets/img/${item.image}`)"
                          alt=""
                        />
                      </div>
                      <div>
                        <p class="text-sm font-semibold uppercase text-dark">
                          {{ item.title }}
                        </p>
                        <div class="mt-2">
                          <p class="text-sm text-grey">
                            {{ item.subCategoryOne }}
                          </p>
                          <p class="text-sm text-grey">
                            {{ item.subCategoryTwo }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </UISlider>
            </div>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="link text-sm uppercase text-dark"
              >Бренды</a
            >
          </li>
          <li>
            <a
              href="javascript:void(0)"
              class="link text-sm uppercase text-dark"
              >Реализованные проекты</a
            >
          </li>
        </ul>
      </nav>
      <div class="navigation">
        <div class="navigation-left">
          <a href="" class="lang-btn active">РУ</a>
          <a href="" class="lang-btn">EN</a>
          <a href="" class="lang-btn">КЗ</a>
        </div>
        <div class="navigation-right">
          <button @click.prevent="$nuxt.$emit('toggle', 'search')">
            <img src="~/assets/img/icons/search.svg" alt="" />
          </button>
          <div class="has-dialog has-dialog-compare z-30 hidden lg:block">
            <img src="~/assets/img/icons/compare.svg" alt="" />
            <DialogCompare />
          </div>
          <a href="">
            <img src="~/assets/img/icons/person.svg" alt="" />
          </a>
          <a href="" class="hidden lg:block">
            <img src="~/assets/img/icons/favorite.svg" alt="" />
          </a>
          <button @click.prevent="$nuxt.$emit('toggle', 'sidebarCart')">
            <img src="~/assets/img/icons/bag.svg" alt="" />
          </button>
        </div>
        <button
          class="hamburger z-50 ml-3 block lg:hidden"
          :class="{ 'is-active': opened }"
          @click.prevent="$nuxt.$emit('toggle', 'mobileMenu')"
        ></button>
      </div>
      <UISearch />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    opened: false,
    stick: false,
    scrollPosition: 0,
    items: [
      {
        title: "Мебель",
        image: "bg/category-card-1.png",
        subCategoryOne: "В наличии",
        subCategoryTwo: "На заказ",
      },
      {
        title: "освещение",
        image: "bg/category-card-2.png",
        subCategoryOne: "Декоративное",
        subCategoryTwo: "Техническое",
      },
      {
        title: "Офисные решения",
        image: "bg/category-card-3.png",
      },
      {
        title: "Текстиль",
        image: "bg/category-card-1.png",
      },
      {
        title: "Декор",
        image: "bg/category-card-2.png",
      },
      {
        title: "Текстиль",
        image: "bg/category-card-1.png",
      },
      {
        title: "Декор",
        image: "bg/category-card-2.png",
      },
    ],
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
  @apply border-b border-dark;
  .nav-panel {
    @apply relative flex items-center justify-between bg-white py-3;
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
