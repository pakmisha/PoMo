<template>
  <div class="section-container section-distance border-t border-dark">
    <div class="mt-7 flex justify-between">
      <div class="w-1/3">
        <p class="heading-sub mb-12">[популярные товары]</p>
        <div class="mb-20 text-2xl font-semibold uppercase text-dark">
          предоставляем выбор стильной и эргономичной мебели и элементов декора
        </div>
        <div class="flex">
          <a href="" class="btn-primary">перейти в каталог</a>
        </div>
      </div>
      <div class="flex w-[65%]">
        <UISlider
          class="slider-popular-products w-[60%]"
          :options="options"
          v-if="inited"
        >
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
        </UISlider>
        <UISliderThumbs
          class="w-[35%]"
          ref="swiper_thumbs"
          :options="{
            slidesPerView: 1,
            spaceBetween: 5,
          }"
        >
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
        </UISliderThumbs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data: () => ({
    options: {
      slidesPerView: 1,
      spaceBetween: 5,
      centeredSlides: false,
    },
    inited: false,
  }),
  mounted() {
    this.options.swiper_thumbs = this.$refs.swiper_thumbs.getInstance();
    this.inited = true;
  },
};
</script>

<style lang="scss">
.slider-popular-products {
  .swiper-wrapper {
    .swiper-slide {
      &.swiper-slide-active {
        .product {
          &-image {
          }
        }
      }
      .product {
        &-image {
        }
      }
    }
  }
}
</style>
