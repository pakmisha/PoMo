<template>
  <div>
    <!-- <div class="section-container">
        <UIPath />
      </div> -->
    <!-- <div class="section-container section-distance-bottom">
        <SubCategory :categories="categories" />
      </div> -->
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
  computed: {
    ...mapGetters({
      categories: "products/categories",
    }),
  },
};
</script>

<style></style>
