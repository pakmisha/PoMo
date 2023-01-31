<template>
  <div class="section-distance">
    <Tabs
      :titles="['доступные цвета и материалы', 'модели', 'конфигурации']"
      class="horizontal"
    >
      <div>
        <h2 class="heading-secondary mb-4">Цвета</h2>
        <div class="flex flex-wrap items-center">
          <div class="color-item bg-red-700"></div>
          <div class="color-item bg-green-500"></div>
          <div class="color-item bg-black"></div>
        </div>
      </div>
      <div class="models w-full lg:w-[70%]">
        <div class="models__item" v-for="(item, index) in items" :key="index">
          <div class="models__item__left">{{ item.title }}</div>
          <div class="models__item__center">{{ item.description }}</div>
          <div class="models__item__right">
            <button class="btn-underline">Скачать</button>
          </div>
        </div>
      </div>
      <div>3</div>
    </Tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "LDM-SF-2S.3ds",
        description: "3ds 0.00M",
      },
      {
        title: "LDM-SF-2S.obj",
        description: "obj 0.00M",
      },
      {
        title: "LDM-SF-2S-3D.dwg",
        description: "dwg 0.00M",
      },
      {
        title: "LDM-SF-2S-2D.dwg",
        description: "dwg 0.00M",
      },
      {
        title: "LDM-SF-2S.3ds",
        description: "3ds 0.00M",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.color-item {
  @apply mr-3 h-10 w-10 rounded-full border border-dark;
}
.models {
  &__item {
    @apply flex items-center justify-between border-b border-grey-light py-3;
    &__left {
      @apply w-1/2 text-sm lg:w-2/5 lg:text-base;
    }
    &__center {
      @apply w-2/5 text-sm lg:text-base;
    }
    &__right {
    }
  }
}
</style>
