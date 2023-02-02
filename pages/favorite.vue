<template>
  <section v-if="items?.length > 0">
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        избранные товары
      </h1>
    </div>
    <div class="section-container">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Product
          :product="item.product"
          v-for="(item, index) in items"
          :favourite="item"
          :key="index"
        />
      </div>
      <div class="mt-10 flex items-center justify-center lg:mt-14">
        <UILink link="/catalog" class="btn-primary">вернуться в каталог</UILink>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      items: "favourites/favourites",
    }),
  },
};
</script>

<style></style>
