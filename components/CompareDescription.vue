<template>
  <div class="">
    <div class="compare">
      <div class="compare__item" v-for="(item, index) in items" :key="index">
        <h4 class="title">{{ item.title }}</h4>
        <div class="description">{{ item.description }}</div>
        <div class="description">{{ item.description }}</div>
        <div class="description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Наличие товара",
        description: "В наличии",
      },
      {
        title: "Коллекция",
        description: "PIXEL",
      },
      {
        title: "Ширина",
        description: "204",
      },
      {
        title: "Высота",
        description: "90",
      },
      {
        title: "Глубина",
        description: "48",
      },
      {
        title: "Материал опор",
        description: "Металл",
      },

      {
        title: "Код цвета",
        description: "DENIM GREY+DRIFTWOOD",
      },
      {
        title: "Материал корпуса",
        description: "Дерево",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.compare {
  @apply w-full overflow-x-auto;
  &__item {
    @apply flex w-fit border-b border-grey-light pb-3 pt-5;
    .title {
      @apply w-[200px] whitespace-nowrap text-sm font-medium uppercase lg:w-[300px];
    }
    .description {
      @apply w-[300px] text-sm text-grey lg:w-[400px];
    }
  }
}
</style>
