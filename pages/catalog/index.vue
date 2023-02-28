<template>
  <div>
    <!-- <div class="section-container">
      <UIPath />
    </div> -->
    <!-- <div class="section-container section-distance-bottom">
      <SubCategory :categories="categories" />
    </div> -->
    <UIPath :path="path" />
    <section class="section-container mt-10 lg:mt-14">
      <ProductsWrapper />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    path: [
      {
        name: "Каталог",
        link: "/catalog",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      categories: "products/categories",
    }),
  },
};
</script>

<style></style>
