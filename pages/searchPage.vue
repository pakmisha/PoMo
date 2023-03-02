<template>
  <div>
    <div v-if="res?.length > 0">
      <div class="section-container">
        <h1
          class="heading-primary section-title-distance mx-auto max-w-[1490px] text-center"
        >
          по запросу «{{ title }}» найдено {{ res.length }} товаров
        </h1>
      </div>
      <div
        class="section-container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        v-if="res?.length > 0"
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
  data: () => ({
    res: [],
    title: "",
  }),
  created() {
    // const url = new URLSearchParams(location.search);
    // console.log(url.get("title"));
    this.searchProducts();
  },
  methods: {
    async searchProducts() {
      const url = new URLSearchParams(location.search);
      const search = url.get("title");
      const response = await this.$axios.$get(`search?query=${search}`, {});
      this.res = response.data.products;
      this.title = search;
    },
  },
};
</script>

<style></style>
