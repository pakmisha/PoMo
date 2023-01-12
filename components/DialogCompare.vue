<template>
  <div class="dialog-compare">
    <div class="dialog-compare-wrapper">
      <p class="mb-3 text-sm font-medium uppercase text-dark">
        сравнение товаров (2)
      </p>
      <div
        class="dialog-compare-item"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="compare-image">
          <img :src="require(`~/assets/img/${item.image}`)" alt="" />
        </div>
        <div class="flex w-[70%] flex-col justify-between">
          <div>
            <p class="mb-2 text-sm font-medium">{{ item.title }}</p>
            <p class="text-grey">Цвет: {{ item.color }}</p>
          </div>
          <p class="font-medium">{{ item.cost }}</p>
        </div>
      </div>
      <div class="flex justify-center">
        <a href="" class="btn-secondary mt-6">
          Перейти на страницу сравнения
        </a>
      </div>
      <div class="arrow">
        <img src="~/assets/img/icons/arrow-grey.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: "products/product-1.jpeg",
        title: "Кресло TANGYUAN, MAYA A2267–2A   ",
        color: "белый",
        cost: "515 300 ₸",
      },
      {
        image: "products/product-1.jpeg",
        title: "Кресло TANGYUAN, MAYA A2267–2A   ",
        color: "белый",
        cost: "515 300 ₸",
      },
    ],
  }),
};
</script>

<style lang="scss">
.dialog-compare {
  @apply absolute -right-[39px] top-[175%];
  &-wrapper {
    @apply relative w-[500px] border border-grey-light bg-white px-10 py-7;
    .dialog-compare-item {
      @apply flex border-b border-grey-light py-5;
      .compare-image {
        @apply mr-4 w-[30%] border border-grey-light;
        img {
          @apply h-full w-full;
        }
      }
    }
    .arrow {
      @apply absolute right-10 -top-[23px] rotate-90;
      img {
        @apply w-5;
      }
    }
  }
}
</style>
