<template>
  <div>
    <!-- <div class="section-container">
        <UIPath />
      </div> -->
    <!-- <div class="section-container section-distance-bottom">
        <SubCategory :categories="categories" />
      </div> -->
    <UIPath :path="path" />
    <section class="section-container mt-10">
      <ProductsWrapper />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ params, $axios, store }) {
    const response = await $axios.get(`categories/${params.slug}`);
    const category = response.data.category;
    store.dispatch("products/setCategory", category);
    return { category };
  },
  data: () => ({
    path: [],
  }),
  computed: {
    ...mapGetters({
      categories: "products/categories",
    }),
  },
  created() {
    const array = {
      name: this.category?.title,
      link: this.category?.slug,
    };
    this.path.push(array);
  },
};
</script>

<style></style>
