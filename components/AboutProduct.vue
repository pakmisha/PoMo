<template>
  <section>
    <ModalsConsultationModal :product_id="product.id" />
    <ModalsBuyModal :product_id="product.id" />
    <div class="section-container mt-10">
      <div class="flex flex-col justify-between lg:flex-row">
        <div
          class="mb-5 flex h-[400px] w-full overflow-hidden md:h-[500px] lg:mb-0 lg:h-[600px] lg:w-3/5 2xl:h-[700px]"
        >
          <div
            class="addition-thumbs swiper-thumbs mr-2 hidden lg:block"
            ref="swiper_thumbs"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in product.media"
                :key="'addition-' + index"
              >
                <div class="h-[140px] w-full">
                  <img
                    :src="$asset(item.id + '/' + item.file_name)"
                    class="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper swiper-product" ref="swiper_product">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in product.media"
                :key="index"
              >
                <div class="h-full w-full border border-grey">
                  <img
                    class="h-full w-full object-cover"
                    :src="$asset(item.id + '/' + item.file_name)"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <UISwiperButtons class="swiper-buttons-centered" />
          </div>
        </div>
        <div class="w-full space-y-10 lg:w-[35%]">
          <div class="border-b border-grey-light pb-4">
            <h1 class="heading-primary mb-4">
              {{ product.title[$i18n.locale] }}
            </h1>
            <p class="text-xl font-medium">
              {{ product.new_price | formatPrice }} ₸
            </p>
          </div>
          <div
            class="plaintext"
            v-html="product.description[$i18n.locale]"
          ></div>
          <div class="parameters">
            <div class="parameters-item" v-if="product.collection">
              <div class="parameters-item-left">Коллекция</div>
              <div class="parameters-item-right">
                {{ product.collection.name }}
              </div>
            </div>
            <div class="parameters-item" v-if="product.brand">
              <div class="parameters-item-left">Бренд</div>
              <div class="parameters-item-right">
                {{ product.brand.name }}
              </div>
            </div>
            <div
              class="parameters-item"
              v-for="(param, index) in product.characteristics"
              :key="index"
            >
              <div class="parameters-item-left">
                {{ param.title[$i18n.locale] }}
              </div>
              <div class="parameters-item-right">{{ param.value }}</div>
            </div>
            <div class="parameters-item">
              <div class="parameters-item-left">Цвет</div>
              <div class="parameters-item-right">
                <div class="color" v-if="colors.length > 0">
                  <div v-for="(item, index) in colors" :key="index">
                    <div class="color-item" v-if="item.available > 0">
                      <input
                        type="radio"
                        class="input-color"
                        name="color-radio"
                        v-model="color"
                        :value="item"
                        :style="'background-color:' + item.color_code"
                        @change="$store.dispatch('products/setColor', item)"
                      />
                    </div>
                  </div>
                </div>
                <div v-else>Нет доступных цветов</div>
                <div class="text-error" v-if="color_error">Выберите цвет</div>
              </div>
            </div>
          </div>
          <div>
            <div v-if="colors.length > 0">
              <div
                class="flex flex-col space-y-3 lg:flex-row lg:items-center lg:space-y-0"
              >
                <div class="flex flex-col lg:flex-row lg:items-center">
                  <!-- <div
                    :class="{ hidden: product.status == 'IN_STOCK' }"
                    class="mr-3 rounded-full border border-dark bg-white px-5 py-3 text-sm"
                  >
                    Выберите цвет
                  </div> -->
                  <!-- <div class="flex" v-if="product.status == 'IN_STOCK'">
                    <UICounter
                      v-if="color != null"
                      class="counter-big mr-3"
                      @change="onChange($event)"
                      :color="color"
                      :available="color?.available"
                    />

                    <div
                      v-else
                      class="mr-3 rounded-full border border-dark bg-white px-5 py-3 text-sm"
                    >
                      Выберите цвет
                    </div>
                  </div> -->
                  <div class="flex flex-col lg:flex-row lg:items-center">
                    <div class="flex">
                      <UIButton
                        v-if="product.status == 'IN_STOCK'"
                        class="btn-secondary mr-4"
                        @click="addToCart"
                        >добавить в корзину</UIButton
                      >
                      <UIButton
                        v-else
                        @click="$nuxt.$emit('open-modal', 'buy')"
                        class="btn-secondary mr-4"
                        >Заказать товар</UIButton
                      >
                    </div>
                  </div>
                </div>
                <!-- <div class="mr-3" v-else>
                  <div
                    class="rounded-full border border-dark px-6 py-3 shadow-md"
                  >
                    Товар добавлен в корзину
                  </div>
                </div> -->
                <div class="mt-3 flex items-center lg:mt-0">
                  <UIButton
                    class="favourite mr-3"
                    :class="{ active: product.favourite_id != null }"
                    @click="$store.dispatch('favourites/toggle', product)"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.17008 12.6482L11.4677 18.505C11.6478 18.6725 11.7379 18.7563 11.8393 18.7907C11.9435 18.826 12.0565 18.826 12.1607 18.7907C12.2621 18.7563 12.3522 18.6725 12.5323 18.505L12.5323 18.505L18.8299 12.6482C20.6224 10.9812 20.8395 8.21923 19.3296 6.29262L19.0731 5.96523C17.2789 3.67583 13.7055 4.06236 12.4423 6.68247C12.2638 7.05288 11.7362 7.05288 11.5577 6.68247C10.2945 4.06236 6.72114 3.67583 4.92694 5.96522L4.67036 6.29262C3.16047 8.21923 3.37764 10.9812 5.17008 12.6482Z"
                        stroke="#101820"
                      />
                    </svg>
                  </UIButton>
                  <UIButton @click="$store.dispatch('compare/add', product)">
                    <img
                      v-if="
                        !compare?.products?.find(
                          (item) => item.id == product.id
                        )
                      "
                      src="~/assets/img/icons/compare.svg"
                      alt=""
                    />
                    <p v-else class="text-sm text-grey">
                      Товар добавлен для сравнения
                    </p>
                  </UIButton>
                </div>
              </div>
              <div v-if="active" class="mt-4 text-sm text-grey">
                Максимальное кол-во товара с данным цветом
                <span class="font-semibold">({{ color.available }})</span>
              </div>
            </div>
            <div v-else class="flex">
              <div class="rounded-full border border-dark px-6 py-3">
                Нет в наличии
              </div>
            </div>
            <UIButton
              @click="$nuxt.$emit('open-modal', 'consultation')"
              class="mt-4 text-sm text-grey underline"
              >Получить консультацию</UIButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import formatPrice from "~/filters/formatPrice";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    active: false,
    quantity: 1,
    color: null,
    color_error: null,
  }),
  filters: {
    formatPrice,
  },
  computed: {
    ...mapGetters({
      compare: "compare/compare",
      cart: "cart/items",
      in_stock: "cart/in_stock",
    }),
  },
  mounted() {
    const additionThumbs = this.$swiper(this.$refs.swiper_thumbs, {
      slidesPerView: "auto",
      spaceBetween: 10,
      direction: "vertical",
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      grabCursor: true,
      freeMode: true,
      autoHeight: true,
      watchSlidesProgress: true,
    });
    this.$swiper(this.$refs.swiper_product, {
      slidesPerView: 1,
      centeredSlides: false,
      navigation: {
        nextEl: ".sw-next",
        prevEl: ".sw-prev",
      },
      thumbs: {
        swiper: additionThumbs,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  },

  watch: {
    cart(cart) {
      if (this.color != null) {
        this.$store.dispatch("cart/setColor", this.color);
      }
      // console.log(this.$store.getters.color);
    },

    // color(color) {
    //   if (color != null) {
    //     if (this.cart.find((i) => i.product.color_id == color.id)) {
    //       this.in_stock = true;
    //     } else {
    //       this.in_stock = false;
    //     }
    //   }
    //   // console.log(color);
    // },
  },
  methods: {
    addToCart() {
      this.color_error = null;
      if (this.color == null) {
        this.color_error = true;
        return;
      }
      const item = {
        product_id: this.product.id,
        color_id: this.color.id,
        quantity: this.quantity,
      };
      this.$store.dispatch("cart/add", item);

      // this.color = true;
      // this.checkToCart();
    },

    onChange(event) {
      this.quantity = event;
      if (event == this.color.available) {
        this.active = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.counter-big {
}
.swiper-product {
  @apply h-full w-full lg:w-[85%];
}
.swiper-thumbs {
  @apply w-[15%];
  .swiper-wrapper {
    .swiper-slide {
      @apply border border-transparent;
      &.swiper-slide-thumb-active {
        @apply border border-dark;
      }
    }
  }
}
.parameters {
  @apply space-y-2;
  &-item {
    @apply flex items-center;
    &-left {
      @apply mr-3 w-1/2 text-sm text-grey md:w-[40%] lg:w-[30%];
    }
    &-right {
      @apply text-sm;
      .color {
        @apply flex space-x-4;
        &-item {
        }
      }
    }
  }
}
</style>
