<template>
  <section class="section-container section-distance border-t border-dark">
    <div class="mt-7 flex flex-col justify-between lg:flex-row">
      <div class="w-full lg:w-1/3">
        <p class="heading-sub mb-9 lg:mb-12">[популярные товары]</p>
        <div class="mb-10 text-2xl font-semibold uppercase text-dark lg:mb-20">
          предоставляем выбор стильной и эргономичной мебели и элементов декора
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
export default {
  data: () => ({
    products: [
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
    ],
  }),
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
