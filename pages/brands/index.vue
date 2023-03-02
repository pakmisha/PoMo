<template>
  <div v-if="brands != null">
    <UIPath :path="path" />
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        наши бренды
      </h1>
    </div>
    <section class="section-container">
      <Brands />
    </section>
    <section class="section-container section-distance">
      <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        <AllBrands
          :brand="brand"
          v-for="(brand, index) in brands.slice(4)"
          :key="index"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    path: [
      {
        name: "бренды",
        link: "",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      brands: "brands/brands",
    }),
  },
};
</script>

<style></style>
