<template>
  <div>
    <div class="section-container">
      <h1
        class="heading-primary section-title-distance mx-auto max-w-[1490px] text-center"
      >
        по запросу «Диван» найдено 87 товаров
      </h1>
    </div>
    <div class="grid grid-cols-4 gap-10">
      <div class="h-[350px] lg:h-[450px]">
        <!-- <Product /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   res: {
  //     type: Array,
  //   },
  // },
  data: () => ({
    res: [],
  }),
  created() {
    // this.getResults();
    // this.res = JSON.parse(this.$route.params.data);
    // console.log(this.res);
    console.log(this.$route.params);
  },
  methods: {
    // getResults() {
    //   console.log(this.$route.params);
    // },
  },
};
</script>

<style></style>
