<template>
  <div class="section-distance">
    <Tabs
      :titles="['доступные цвета и материалы', 'модели', 'конфигурации']"
      class="horizontal"
    >
      <div class="flex items-start">
        <div class="mr-10 w-1/2" v-if="product.fabrics.length > 0">
          <h2 class="heading-secondary mb-4">Ткань</h2>
          <div class="flex flex-wrap items-center">
            <div
              v-for="(item, index) in product.fabrics"
              class="mr-7 flex flex-col items-center"
              :key="index"
            >
              <UIButton class="circle" @click="openFabrics(item)">
                <img
                  class="h-full w-full object-cover"
                  :src="$asset(item.image)"
                  alt=""
                />
              </UIButton>
              <p class="circle-name">{{ item.name }}</p>
            </div>
          </div>
        </div>
        <div class="w-1/2" v-if="product.leathers.length > 0">
          <h2 class="heading-secondary mb-4">Кожа</h2>
          <div class="flex flex-wrap items-center">
            <div
              v-for="(item, index) in product.leathers"
              class="mr-5 flex flex-col items-center"
              :key="index"
            >
              <UIButton class="circle" @click="openLeathers(item)">
                <img
                  class="h-full w-full object-cover"
                  :src="$asset(item.image)"
                  alt=""
                />
              </UIButton>
              <p class="circle-name">{{ item.name }}</p>
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
  methods: {
    openFabrics(item) {
      this.$nuxt.$emit("open-modal", "material");
      this.$nuxt.$emit("send", item);
    },
    openLeathers(item) {
      this.$nuxt.$emit("open-modal", "material");
      this.$nuxt.$emit("send", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.circle {
  @apply mb-2 h-14 w-14 cursor-pointer overflow-hidden rounded-full shadow-lg;
}
.circle-name {
  @apply text-center  text-sm text-grey-light;
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
