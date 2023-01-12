<template>
  <div class="section-distance">
    <div
      class="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center lg:mb-24"
    >
      <p class="heading-sub">[категории товаров]</p>
      <div class="my-3 h-16 w-px bg-dark-blue"></div>
      <h2 class="heading-primary mb-6 lg:mb-10">
        все, чтобы дарить эмоции и приятные ощущения
      </h2>
      <p class="plaintext lg:mx-32">
        Предоставляем выбор товаров, которые сочетают в себе интересные текстуры
        и приятные цвета, натуральные материалы, особенное настроение
        и уникальные истории
      </p>
    </div>
    <div class="pl-5 md:pl-10 lg:pl-14 2xl:pl-16">
      <UISlider
        :options="{
          slidesPerView: 1.1,
          centeredSlides: false,
          navigation: {
            nextEl: '.sw-next',
            prevEl: '.sw-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.1,
              spaceBetween: 10,
            },
            1350: {
              slidesPerView: 2.1,
              spaceBetween: 10,
            },
          },
        }"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div
              href=""
              class="category"
              :style="{
                'background-image':
                  'url(' + require('~/assets/' + item.image) + ')',
              }"
            >
              <div class="heading-primary">
                {{ item.title }}
              </div>
              <div
                class="absolute left-1/2 bottom-4 -translate-x-1/2 lg:bottom-6"
              >
                <a href="" class="btn-primary">перейти в каталог </a>
              </div>
            </div>
          </div>
        </div>
        <SwiperButtons class="swiper-buttons-centered" />
      </UISlider>
    </div>
  </div>
</template>

<script>
import SwiperButtons from "./UI/SwiperButtons.vue";

export default {
  data: () => ({
    items: [
      {
        image: "img/bg/category-card-1.png",
        title: "Мебель",
      },
      {
        image: "img/bg/category-card-2.png",
        title: "освещение",
      },
      {
        image: "img/bg/category-card-3.png",
        title: "паркет",
      },
      {
        image: "img/bg/category-card-1.png",
        title: "кухня",
      },
    ],
  }),
  components: { SwiperButtons },
};
</script>

<style lang="scss">
.category {
  @apply relative flex h-[450px] items-center justify-center overflow-hidden border border-black bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out md:h-[500px] lg:h-[600px] 2xl:h-[800px];
  &:hover {
  }
}
</style>
