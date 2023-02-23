<template>
  <div v-if="product != null">
    <ModalsMaterialModal />
    <AboutProduct :product="product" :colors="colors" />
    <ProductDetails :product="product" />
    <section>
      <div
        class="section-container section-distance"
        v-if="interesting.length > 0"
      >
        <div class="flex flex-col justify-between lg:flex-row lg:items-center">
          <h2 class="heading-primary mb-4 lg:mb-0">
            Другие товары бренда {{ product.brand.name }}
          </h2>
          <!-- <UILink link="" class="btn-primary"
            >Смотреть все товары этого бренда</UILink
          > -->
        </div>
        <div class="swiper relative mt-10">
          <UISlider
            class="slider-popular-products"
            :options="{
              slidesPerView: 2,
              spaceBetween: 15,
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1680: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              },
            }"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(product, index) in interesting"
                :key="index"
              >
                <div class="h-[350px] lg:h-[400px]">
                  <Product :product="product" />
                </div>
              </div>
            </div>
          </UISlider>
          <UISwiperButtons class="swiper-buttons-centered" />
        </div>
      </div>
    </section>
    <section v-if="atmosphere.length > 0">
      <div class="section-container mt-10 lg:mt-20">
        <div class="flex flex-col justify-between lg:flex-row lg:items-center">
          <h2 class="heading-primary mb-4 lg:mb-0">
            Поможет создать атмосферу
          </h2>
          <!-- <UILink link="" class="btn-primary">Смотреть больше</UILink> -->
        </div>
        <div class="swiper relative mt-10">
          <UISlider
            class="slider-popular-products"
            :options="{
              slidesPerView: 2,
              spaceBetween: 15,
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1680: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              },
            }"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(product, index) in atmosphere"
                :key="index"
              >
                <div class="h-[350px] lg:h-[400px]">
                  <Product :product="product" />
                </div>
              </div>
            </div>
          </UISlider>
          <UISwiperButtons class="swiper-buttons-centered" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, store }) {
    const response = await $axios.get(`products/${params.slug}`);
    console.log(response);
    const product = response.data.product;
    store.dispatch("products/setProduct", product);
    const colors = response.data.colors;
    store.dispatch("products/setColors", colors);

    return { product, colors };
  },
  data: () => ({
    interesting: [],
    atmosphere: [],
  }),
  created() {
    this.getInteresting();
    this.getAtmosphere();
  },
  methods: {
    async getInteresting() {
      try {
        const response = await this.$axios.get(
          "products/other-products/" + this.product.id
        );
        this.interesting = response.data.data.products;
      } catch (e) {
        console.log("ERROR GETTING INTERESTING");
      }
    },
    async getAtmosphere() {
      try {
        const response = await this.$axios.get(
          "products/atmosphere/" + this.product.id
        );
        this.atmosphere = response.data.data.products;
      } catch (e) {
        console.log("ERROR GETTING ATMOSPHERE");
      }
    },
  },
};
</script>

<style></style>
