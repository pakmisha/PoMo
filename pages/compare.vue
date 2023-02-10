<template>
  <div>
    <div v-if="compare.length > 0">
      <div class="section-container">
        <h1
          class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
        >
          Сравнение товаров
        </h1>
      </div>
      <section>
        <div class="section-container-inner">
          <div class="flex flex-col justify-between lg:flex-row">
            <div class="mr-3 mb-2 w-full lg:mb-0 lg:w-1/5">
              <h3 class="heading-secondary">Комоды</h3>
            </div>
            <div class="w-full lg:w-[75%]">
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
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1350: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                  },
                }"
              >
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(item, index) in compare"
                    :key="index"
                  >
                    <div class="flex h-[450px]">
                      <Product :product="item" />
                    </div>
                  </div>
                </div>
              </UISlider>
            </div>

            <!-- <Product :product="product" /> -->
          </div>
        </div>
      </section>
      <section>
        <div class="section-container-inner mt-10">
          <CompareDescription :compare="compare" />
        </div>
      </section>
    </div>
    <div v-else>
      <div class="section-container">
        <div
          class="section-title-distance mx-auto max-w-[1490px] space-y-5 text-center"
        >
          <h1 class="heading-primary">В сравнении товаров пусто!</h1>
          <p>Добавьте товары для сравнения</p>
          <div class="flex items-center justify-center">
            <UILink link="/catalog" class="btn-secondary"
              >Перейти в каталог</UILink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      compare: "compare/compare",
    }),
  },
};
</script>

<style></style>
