<template>
  <div
    class="w-full border border-grey bg-white px-5 py-5 md:px-10 md:py-10 lg:px-20 lg:py-20"
  >
    <div
      class="flex items-center border-b border-grey py-3"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="w-1/2 text-xs uppercase lg:text-sm">
        {{ item.title }}
      </div>
      <div class="w-1/2 text-sm font-medium text-grey">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Локация",
        description: "Алматы, Казахстан",
      },
      {
        title: "Год реализации",
        description: "2022",
      },
      {
        title: "Тип здания",
        description: "Жилой дом",
      },
      {
        title: "Площадь",
        description: "50 500 м2",
      },
      {
        title: "Услуга",
        description: "Интерьер «Под ключ»",
      },
    ],
  }),
};
</script>

<style></style>
