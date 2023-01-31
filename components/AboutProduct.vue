<template>
  <section>
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
                    :src="$asset(item.file_name)"
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
                    :src="$asset(item.file_name)"
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
          <div>
            <p class="plaintext">
              {{ product.description[$i18n.locale] }}
            </p>
          </div>
          <div class="parameters">
            <div class="parameters-item">
              <div class="parameters-item-left">Коллекция</div>
              <div class="parameters-item-right">EDEN</div>
            </div>
            <div class="parameters-item">
              <div class="parameters-item-left">Ширина</div>
              <div class="parameters-item-right">191</div>
            </div>
            <div class="parameters-item">
              <div class="parameters-item-left">Высота</div>
              <div class="parameters-item-right">225</div>
            </div>
            <div class="parameters-item">
              <div class="parameters-item-left">Высота до сидения</div>
              <div class="parameters-item-right">34</div>
            </div>
            <div class="parameters-item">
              <div class="parameters-item-left">Глубина</div>
              <div class="parameters-item-right">108</div>
            </div>
            <div class="parameters-item">
              <div class="parameters-item-left">Материал опор</div>
              <div class="parameters-item-right">Металл</div>
            </div>
            <div class="parameters-item">
              <div class="parameters-item-left">Цвет</div>
              <div class="parameters-item-right">
                <div class="color">
                  <div
                    class="color-item"
                    v-for="(item, index) in product.colors"
                    :key="index"
                  >
                    <input
                      type="radio"
                      class="input-radio"
                      name="color-radio"
                      v-model="color"
                      :value="item"
                      :style="'background-color:' + item.color_code"
                    />
                  </div>
                </div>
                <div class="text-error" v-if="color_error">Выберите цвет</div>
              </div>
            </div>
          </div>
          <div>
            <div
              class="flex flex-col space-y-3 lg:flex-row lg:items-center lg:space-y-0"
            >
              <div class="flex">
                <UICounter
                  class="counter-big mr-3"
                  @change="quantity = $event"
                />
              </div>

              <div class="flex items-center">
                <UIButton class="btn-secondary mr-4" @click="addToCart"
                  >добавить в корзину</UIButton
                >
                <UIButton class="mr-3">
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
                <UIButton>
                  <img src="~/assets/img/icons/compare.svg" alt="" />
                </UIButton>
              </div>
            </div>
            <UIButton class="mt-4 text-sm text-grey underline"
              >Получить консультацию</UIButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import formatPrice from "~/filters/formatPrice";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    quantity: 1,
    color: null,
    color_error: null,
  }),
  filters: {
    formatPrice,
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
    },
  },
};
</script>

<style lang="scss" scoped>
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
