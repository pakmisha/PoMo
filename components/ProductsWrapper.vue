<template>
  <div>
    <div class="flex lg:justify-end">
      <div
        class="mb-10 flex w-full flex-col items-center justify-between lg:mb-20 lg:w-[75%] lg:flex-row"
      >
        <h2 class="heading-primary">Все товары</h2>
        <div class="mt-4 lg:mt-0">
          <select name="" id="" class="select text-center">
            <option value="" selected>По дате добавления</option>
            <option value="">Сначала популярные</option>
            <option value="">Цена: по возрастанию</option>
            <option value="">Цена: по убыванию</option>
          </select>
        </div>
        <div class="mt-4 flex items-center lg:hidden">
          <button
            class="btn-primary mr-2"
            @click.prevent="$nuxt.$emit('open-modal', 'category')"
          >
            Категории
          </button>
          <button class="btn-primary">Фильтры</button>
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="hidden w-[20%] lg:block">
        <FiltersSidebar />
      </div>
      <div class="w-full lg:w-[75%]">
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
        price: "1 515 300",
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
        price: "1 590 300",
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
  @apply grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3;
  &__item {
    &:nth-child(5n) {
      @apply h-full md:col-span-2 md:row-span-2;
    }
  }
}
</style>
