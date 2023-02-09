<template>
  <div>
    <AboutProduct :product="product" />
    <ProductDetails />
    <section>
      <div class="section-container section-distance">
        <div class="flex flex-col justify-between lg:flex-row lg:items-center">
          <h2 class="heading-primary mb-4 lg:mb-0">
            Другие товары бренда camerich
          </h2>
          <UILink link="" class="btn-primary"
            >Смотреть все товары этого бренда</UILink
          >
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
                <Product :product="product" />
              </div>
            </div>
          </UISlider>
          <UISwiperButtons class="swiper-buttons-centered" />
        </div>
      </div>
    </section>
    <section>
      <div class="section-container section-distance">
        <div class="flex flex-col justify-between lg:flex-row lg:items-center">
          <h2 class="heading-primary mb-4 lg:mb-0">
            Поможет создать атмосферу
          </h2>
          <UILink link="" class="btn-primary">Смотреть больше</UILink>
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
                <Product :product="product" />
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
    return { product };
  },
  data: () => ({
    interesting: null,
    atmosphere: null,
  }),
  created() {
    this.getInteresting();
    this.getAtmosphere();
  },
  methods: {
    async getInteresting() {
      try {
        const response = await this.$axios.get('products/interests/' + this.product.id)
        this.interesting = response.data.data.products;
      } catch (e) {
        console.log("ERROR GETTING INTERESTING");
      }
    },
    async getAtmosphere() {
      try {
        const response = await this.$axios.get('products/atmosphere/' + this.product.id);
        this.atmosphere = response.data.data.products;
      } catch (e) {
        console.log("ERROR GETTING ATMOSPHERE");
      }
    }
  },
};
</script>

<style></style>
