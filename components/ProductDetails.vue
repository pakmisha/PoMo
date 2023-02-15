<template>
  <div class="section-distance">
    <Tabs
      :titles="['доступные цвета и материалы', 'модели', 'конфигурации']"
      class="horizontal"
    >
      <div class="flex items-start">
        <div class="mr-10" v-if="product.colors.length > 0">
          <h2 class="heading-secondary mb-4">Цвета</h2>
          <div class="flex flex-wrap items-center">
            <div v-for="(color, index) in product.colors" :key="index">
              <div
                class="color-item"
                :style="'background-color:' + color.color_code"
              ></div>
              <span>{{ color.name[$i18n.locale] }}</span>
            </div>
          </div>
        </div>
        <div class="mr-10" v-if="product.upholstery_materials.length > 0">
          <h2 class="heading-secondary mb-4">Материал обивки</h2>
          <div class="flex flex-wrap items-center">
            <div
              v-for="(item, index) in product.upholstery_materials"
              :key="index"
            >
              <div class="color-item overflow-hidden">
                <img
                  class="h-full w-full object-cover"
                  :src="$asset(item.image)"
                  alt=""
                />
              </div>
              <!-- <div
                class="color-item"
                :style="'background-image:' + $asset(item.image)"
              ></div> -->
              <span>{{ item.title[$i18n.locale] }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="models w-full lg:w-[70%]">
        <div v-if="product.models">
          <div
            class="models__item"
            v-for="(model, index) in product.models"
            :key="index"
          >
            <div class="models__item__left">{{ model.title }}</div>
            <div class="models__item__center">{{ model.description }}</div>
            <div class="models__item__right">
              <button class="btn-underline">Скачать</button>
            </div>
          </div>
        </div>
        <div v-else>
          <h3 class="heading-secondary">У данного товара нет модели</h3>
        </div>
      </div>
      <div>
        <div>
          <div v-if="product.configuration != null"></div>
          <div v-else>
            <h3 class="heading-secondary">У данного товара нет конфигурации</h3>
          </div>
        </div>
      </div>
    </Tabs>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    required: true,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.color-item {
  @apply mr-4 h-10 w-10 rounded-full border border-dark;
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
