<template>
  <div class="section-container section-distance border-t border-dark">
    <div class="mt-7 flex flex-col justify-between lg:flex-row">
      <div class="w-full lg:w-1/3">
        <p class="heading-sub mb-9 lg:mb-12">[популярные товары]</p>
        <div class="mb-10 text-2xl font-semibold uppercase text-dark lg:mb-20">
          предоставляем выбор стильной и эргономичной мебели и элементов декора
        </div>
        <div class="flex">
          <a href="" class="btn-primary">перейти в каталог</a>
        </div>
      </div>
      <UISlider
        class="slider-popular-products mt-5 w-full lg:mt-0 lg:w-[65%]"
        :options="{
          slidesPerView: 2,
          spaceBetween: 15,
          loop: true,
          centeredSlides: false,
          centeredSlidesBounds: false,
          centerInsufficientSlides: false,
          autoHeight: false,
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
        <div class="swiper-wrapper pb-16">
          <div class="swiper-slide">
            <Product :image="require('~/assets/img/products/product-2.jpeg')" />
          </div>
          <div class="swiper-slide">
            <Product :image="require('~/assets/img/products/product-1.jpeg')" />
          </div>
          <div class="swiper-slide">
            <Product :image="require('~/assets/img/products/product-2.jpeg')" />
          </div>
          <div class="swiper-slide">
            <Product :image="require('~/assets/img/products/product-1.jpeg')" />
          </div>
        </div>
        <SwiperButtons class="swiper-buttons-bottom" />
      </UISlider>
    </div>
  </div>
</template>

<script>
import SwiperButtons from "./UI/SwiperButtons.vue";
export default {
  components: { SwiperButtons },
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
