<template>
  <section class="section-distance">
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
      <div class="swiper relative">
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
            <div
              class="swiper-slide"
              v-for="(item, index) in categories.slice(1)"
              :key="index"
            >
              <div class="category">
                <img
                  class="h-full w-full object-cover"
                  :src="$asset(item.image)"
                  alt=""
                />
                <div
                  class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div class="heading-primary text-center">
                    {{ item.title[$i18n.locale] }}
                  </div>
                </div>
                <div
                  class="absolute left-1/2 bottom-4 -translate-x-1/2 lg:bottom-6"
                >
                  <UILink :link="'/category/' + item.slug" class="btn-primary"
                    >перейти в каталог
                  </UILink>
                </div>
              </div>
            </div>
          </div>
        </UISlider>
        <UISwiperButtons class="swiper-buttons-centered" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categories: "products/categories",
    }),
  },
};
</script>

<style lang="scss" scoped>
.category {
  @apply relative flex h-[400px] items-center justify-center overflow-hidden border border-black transition-all duration-1000 ease-in-out md:h-[500px] lg:h-[600px] 2xl:h-[800px];
  &:hover {
  }
}
</style>
