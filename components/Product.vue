<template>
  <UILink :link="'/catalog/' + product.slug" class="product">
    <div v-if="product?.media?.length > 0" class="product-image">
      <img
        class="image"
        :src="$asset(product.media[0].id + '/' + product.media[0].file_name)"
      />
      <img
        class="image img-hover"
        v-if="product.media[1]"
        :src="$asset(product.media[1].id + '/' + product.media[1].file_name)"
        alt=""
      />
      <div class="absolute right-2 top-2">
        <div class="flex">
          <UIButton
            @click="$store.dispatch('compare/add', product)"
            class="product-compare mr-1"
          >
            <img
              v-if="!compare?.products?.find((item) => item.id == product.id)"
              src="~/assets/img/icons/compare.svg"
              alt=""
            />
            <span v-else>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="200"
                  y1="56"
                  x2="56"
                  y2="200"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="200"
                  y1="200"
                  x2="56"
                  y2="56"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>
            </span>
          </UIButton>
          <UIButton
            class="favourite"
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
        </div>
      </div>
    </div>
    <div class="product-bottom">
      <p class="product-bottom-title">
        {{ product.title[$i18n.locale] }}
      </p>
      <p class="text-sm" v-if="product.new_price != null">
        {{ product.new_price | formatPrice }} ₸
      </p>
      <p v-else class="text-sm text-grey">На заказ</p>
    </div>
  </UILink>
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
  },
  filters: {
    formatPrice,
  },
  computed: {
    ...mapGetters({
      compare: "compare/compare",
    }),
  },
};
</script>

<style lang="scss">
.product {
  @apply flex h-full w-full flex-col justify-between;
  &-image {
    @apply relative h-full w-full overflow-hidden border border-grey-light;
    .image {
      @apply h-full w-full object-cover;
      &.img-hover {
        @apply absolute inset-0 opacity-0 transition-all duration-500 ease-out;
      }
    }
    &:hover {
      .image {
        &.img-hover {
          @apply opacity-100;
        }
      }
    }
    // img {
    //   @apply h-full w-full object-cover;
    // }
    // .first-image {
    //   @apply opacity-100;
    //   img {
    //     @apply h-full w-full object-cover;
    //   }
    // }
    // .second-image {
    //   @apply opacity-0;
    //   img {
    //     @apply h-full w-full object-cover;
    //   }
    // }
    // &:hover {
    //   .first-image {
    //     @apply opacity-0;
    //   }
    //   .second-image {
    //     @apply opacity-100;
    //   }
    // }
  }
  .product-icons {
    @apply relative;
    &-dialog {
      @apply absolute right-0 bottom-full;
    }
  }

  &-bottom {
    @apply mt-4 flex items-center justify-between border-b border-black pb-2;
    &-title {
      @apply w-[65%] overflow-hidden text-ellipsis text-xs font-semibold uppercase md:w-[70%] lg:h-[20px] lg:text-sm;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
