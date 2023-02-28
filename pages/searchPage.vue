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
    console.log(this.$route.query);
    if (this.$route.query.res == undefined) {
      this.res = [];
    } else {
      const result = this.$route.query.res;
      console.log("RESULT", result);
      const resultJson = JSON.stringify(result);
      console.log("JSON", resultJson);
      this.res = JSON.parse(resultJson);
      console.log("RES", this.res);
    }
    if (this.$route.query.title == undefined) {
      this.title = null;
    } else {
      this.title = this.$route.query.title;
    }
  },
};
</script>

<style></style>
