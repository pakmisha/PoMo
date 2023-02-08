<template>
  <div class="product">
    <div v-if="product.media.length > 0" class="product-image">
      <img class="first-image" :src="$asset(product.media[0].file_name)" />
      <img
        class="second-image"
        v-if="product.media[1]"
        :src="$asset(product.media[1].file_name)"
        alt=""
      />
      <div class="absolute right-2 top-2">
        <div class="flex">
          <UIButton class="product-compare mr-1">
            <img src="~/assets/img/icons/compare.svg" alt="" />
            <!-- <div class="product-compare-dialog">
            <p>Добавить в сравнение</p>
          </div> -->
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
    <UILink :link="'/catalog/' + product.slug" class="product-bottom">
      <p class="product-bottom-title">
        {{ product.title[$i18n.locale] }}
      </p>
      <p class="text-sm">{{ product.new_price | formatPrice }} ₸</p>
    </UILink>
  </div>
</template>

<script>
import formatPrice from "~/filters/formatPrice";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    favourite: {
      type: Object,
      required: true,
    },
  },
  filters: {
    formatPrice,
  },
};
</script>

<style lang="scss">
.product {
  @apply flex h-full w-full flex-col justify-between;
  &-image {
    @apply relative h-[400px] w-full overflow-hidden border border-grey-light lg:h-[450px];
    img {
      @apply h-full w-full object-cover;
    }
    .first-image {
      @apply block;
      img {
        @apply h-full w-full object-cover;
      }
    }
    .second-image {
      @apply hidden;
      img {
        @apply h-full w-full object-cover;
      }
    }
    &:hover {
      .first-image {
        @apply hidden;
      }
      .second-image {
        @apply block;
      }
    }
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
