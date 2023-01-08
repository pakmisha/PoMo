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
          slidesPerView: 2.3,
          spaceBetween: 30,
          centeredSlides: false,
        }"
      >
        <div class="swiper-slide" v-for="(item, index) in items" :key="index">
          <div
            href=""
            class="category"
            :style="{
              'background-image':
                'url(' + require('~/assets/' + item.image) + ')',
            }"
          >
            <div class="heading-primary py-40 md:py-52 lg:py-60 2xl:py-72">
              {{ item.title }}
            </div>
            <div class="absolute left-1/2 bottom-6 -translate-x-1/2">
              <a href="" class="btn-primary">перейти в каталог </a>
            </div>
          </div>
        </div>
      </UISlider>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss">
.category {
  @apply relative flex items-center justify-center overflow-hidden border border-black bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out;
  &:hover {
  }
}
</style>
