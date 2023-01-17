<template>
  <div>
    <div class="flex justify-end">
      <div class="mb-20 flex w-[75%] items-center justify-between">
        <h2 class="heading-primary">Все товары</h2>
        <div class="">
          <select name="" id="" class="select">
            <option value="" selected>Сортировать: По дате добавления</option>
            <option value="">Сначала популярные</option>
            <option value="">Цена: по возрастанию</option>
            <option value="">Цена: по убыванию</option>
          </select>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="w-[20%]">
        <FiltersSidebar />
      </div>
      <div class="w-[75%]">
        <div class="products">
          <div
            class="products__item"
            v-for="(product, index) in products"
            :key="index"
          >
            <Product :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.products {
  @apply grid grid-cols-3 gap-3;
  &__item {
    &:nth-child(5n) {
      @apply col-span-2 row-span-2 h-full;
    }
  }
}
</style>
