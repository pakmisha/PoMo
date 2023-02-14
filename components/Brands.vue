<template>
  <div>
    <UISlider
      :options="{
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
        breakpoints: {
          320: {
            slidesPerView: 1.1,
          },
          1024: {
            slidesPerView: 3,
          },
          1680: {
            slidesPerView: 4,
          },
        },
      }"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide h-auto"
          v-for="(brand, index) in brands.slice(0, 4)"
          :key="index"
        >
          <div class="brand-item">
            <div class="brand-item-image">
              <img
                class="h-full w-full object-cover"
                :src="$asset(brand.image)"
                alt=""
              />
              <div class="corner absolute -right-[7px] -bottom-[6px]">
                <img src="~/assets/img/icons/brand-list.png" alt="" />
              </div>
              <div class="brand-logo absolute left-10 bottom-5">
                <img
                  class="w-[100px] object-contain lg:w-[120px] 2xl:w-[200px]"
                  :src="$asset(brand.logo)"
                  alt=""
                />
              </div>
            </div>
            <div class="brand-item-description">
              <p class="brand-title">
                {{ brand.small_description[$i18n.locale] }}
              </p>
              <p
                class="brand-description"
                v-html="brand.description[$i18n.locale]"
              ></p>
              <div class="flex">
                <UILink :link="'/brands/' + brand.slug" class="btn-primary">
                  читать больше
                </UILink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UISlider>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      brands: "brands/brands",
      brand: "brands/brand",
    }),
  },
};
</script>

<style lang="scss" scoped>
.brand-item {
  @apply flex h-[500px] flex-col justify-between transition-all duration-300 ease-in-out md:h-[600px] 2xl:h-[700px];
  &-image {
    @apply relative h-[500px] transition-all duration-300 ease-in-out md:h-[600px] 2xl:h-[700px];
    .corner {
      @apply visible opacity-100 transition-all duration-300 ease-in-out;
    }
    .brand-logo {
      @apply visible opacity-100 transition-all duration-300 ease-in-out;
    }
  }
  &-description {
    @apply invisible h-0 translate-y-20 opacity-0 transition-all duration-500 ease-in-out;
  }
  &:hover {
    .brand-item-image {
      @apply h-[150px] lg:h-[300px] 2xl:h-[400px];
      .corner {
        @apply invisible opacity-0;
      }
      .brand-logo {
        @apply invisible opacity-0;
      }
    }
    .brand-item-description {
      @apply visible h-auto translate-y-0 opacity-100;
      .brand-title {
        @apply mb-3 h-[60px] overflow-hidden text-ellipsis text-sm font-semibold uppercase text-dark;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .brand-description {
        @apply mb-6 h-[200px] overflow-hidden text-ellipsis text-sm text-grey lg:h-[120px] 2xl:h-[100px];
        // @media (min-width: 1536px) {
        //   -webkit-line-clamp: 5;
        // }
        @media (min-width: 1024px) {
          -webkit-line-clamp: 5;
        }
        @media (min-width: 768px) {
          -webkit-line-clamp: 6;
        }
        -webkit-line-clamp: 10;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
