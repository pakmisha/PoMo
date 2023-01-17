<template>
  <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
    <a
      href=""
      class="category"
      :class="item.classes"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="category__image">
        <img
          :src="require(`~/assets/img/${item.image}`)"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div
        class="absolute left-0 bottom-0 flex items-center rounded-tr-2xl border border-dark bg-white px-6 py-4 2xl:px-9 2xl:py-6"
      >
        <p class="mr-5 uppercase lg:text-xl 2xl:text-2xl">{{ item.title }}</p>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.33203 16.1654L15.6654 2.83203"
            stroke="#101820"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M3.33203 1.83203H16.6654V15.1654"
            stroke="#101820"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: "bg/sub-category-1.png",
        title: "Кухня",
      },
      {
        image: "bg/sub-category-3.png",
        title: "Гостиная",
        classes: "row",
      },
      {
        image: "bg/sub-category-2.png",
        title: "Спальня",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.category {
  @apply relative flex h-[250px] w-full lg:h-[300px] 2xl:h-[400px];
  &.row {
    @apply h-full lg:row-span-2;
  }
  &__image {
    @apply h-full w-full;
  }
}
</style>
