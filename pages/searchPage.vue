<template>
  <div>
    <div v-if="res.length > 0">
      <div class="section-container">
        <h1
          class="heading-primary section-title-distance mx-auto max-w-[1490px] text-center"
        >
          по запросу «{{ title }}» найдено {{ res.length }} товаров
        </h1>
      </div>
      <div
        class="section-container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <div
          class="h-[350px] lg:h-[450px]"
          v-for="(product, index) in res"
          :key="index"
        >
          <Product :product="product" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="section-container">
        <h1
          class="heading-primary section-title-distance mx-auto max-w-[1490px] text-center"
        >
          По данному запросу нет результатов
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    res: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  created() {
    this.res = this.$route.params.res;
    this.title = this.$route.params.title;
  },
};
</script>

<style></style>
