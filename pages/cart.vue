<template>
  <div>
    <UIPath :path="path" />
    <section>
      <div class="section-container">
        <h1
          class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
        >
          корзина
        </h1>
      </div>
    </section>
    <section
      v-if="items.length > 0"
      class="mx-auto max-w-[1920px] px-5 lg:px-44 2xl:px-64"
    >
      <CartProduct v-for="(item, index) in items" :key="index" :item="item" />
      <div class="mt-5 flex items-center justify-between lg:justify-end">
        <div class="mr-10 text-sm font-medium uppercase">Всего:</div>
        <div class="text-xl font-medium uppercase lg:text-2xl">
          {{ $store.getters["cart/total"] | formatPrice }} ₸
        </div>
      </div>
      <div class="mt-10 flex flex-col items-center lg:mt-20">
        <UILink link="/checkout" class="btn-secondary"
          >перейти к оформлению заказа</UILink
        >
        <div class="mx-auto mt-5 max-w-[600px] text-center text-sm text-grey">
          Стоимость доставки не включена в сумму заказа. Доставка по г. Алматы и
          Астана при сумме заказа от 500 000 ₸ осуществляется бесплатно
        </div>
        <UIButton class="tetx-grey mt-5 text-sm underline" @click="clear(items)"
          >Очистить корзину</UIButton
        >
      </div>
    </section>
    <section v-else>
      <div class="flex flex-col items-center">
        <div class="mb-10 text-sm text-grey">
          В вашей корзине пока нет товаров
        </div>
        <UILink link="/catalog" class="btn-primary">перейти в каталог</UILink>
      </div>
    </section>
    <section>
      <div class="section-container section-distance">
        <h2 class="heading-primary mb-20 text-center">Вам может понравиться</h2>
        <div class="swiper relative">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import formatPrice from "~/filters/formatPrice";
export default {
  data: () => ({
    products: null,
    path: [
      {
        name: "корзина",
        link: "/cart",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      items: "cart/items",
    }),
  },
  created() {
    this.get();
  },
  filters: {
    formatPrice,
  },
  methods: {
    async get() {
      const response = await this.$axios.get("cart/interests");
      this.products = response.data.data.products;
    },
    clear(items) {
      const ids = [];
      for (let i of items) {
        this.items[i] = ids.push(i.id);
      }
      this.$store.dispatch("cart/remove", ids);
    },
  },
};
</script>

<style></style>
