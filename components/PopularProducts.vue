<template>
  <section
    v-if="products.length > 0"
    class="section-container section-distance border-t border-dark"
  >
    <div class="mt-7 flex flex-col justify-between lg:flex-row">
      <div class="w-full lg:w-1/3">
        <p class="heading-sub mb-9 lg:mb-12">[популярные товары]</p>
        <div class="mb-10 text-2xl font-semibold uppercase text-dark lg:mb-20">
          {{ home.popular_title[$i18n.locale] }}
        </div>
        <div class="flex">
          <UILink link="/catalog" class="btn-primary">перейти в каталог</UILink>
        </div>
      </div>
      <div class="swiper relative mt-5 w-full lg:mt-0 lg:w-[65%]">
        <UISlider
          class="slider-popular-products"
          :options="{
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: false,
            centeredSlidesBounds: false,
            centerInsufficientSlides: false,
            navigation: {
              nextEl: '.sw-next',
              prevEl: '.sw-prev',
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1366: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            },
          }"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(product, index) in products"
              :key="index"
            >
              <Product :product="product" />
            </div>
          </div>
        </UISlider>
        <div class="mt-5 flex justify-end">
          <UISwiperButtons class="swiper-buttons-bottom" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    products: [],
  }),
  computed: {
    ...mapGetters({
      home: "home/home",
    }),
  },
  created() {
    this.getPopular();
  },
  methods: {
    async getPopular() {
      const response = await this.$axios.get("products/popular");
      this.products = response.data.data.products;
    },
  },
};
</script>

<style lang="scss">
.slider-popular-products {
  .swiper-wrapper {
    .swiper-slide {
      @apply transition-all duration-300 ease-in-quad;
      // width: 35% !important;
      // &.swiper-slide-next {
      // }
      // &.swiper-slide-active {
      //   width: 60% !important;
      // }
      // &.swiper-slide-prev {
      //   @apply hidden;
      // }
    }
  }
}
</style>
