<template>
  <div>
    <!-- <div class="section-container">
      <UIPath />
    </div> -->
    <!-- <div class="section-container section-distance-bottom">
      <SubCategory :categories="categories" />
    </div> -->
    <section class="section-container mt-10 lg:mt-14">
      <ProductsWrapper />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categories: "products/categories",
    }),
  },
};
</script>

<style></style>
