<template>
  <div
    v-if="brands.length > 0"
    class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4"
  >
    <a
      href=""
      class="block bg-light transition-all duration-300 ease-in-out"
      v-for="(item, index) in brands.slice(4)"
      :key="index"
    >
      <img :src="$asset(item.logo)" alt="" />
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      brands: "brands/brands",
    }),
  },
};
</script>

<style></style>
