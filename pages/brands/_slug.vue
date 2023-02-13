<template>
  <div v-if="brands != null">
    <ModalsRequestModal />
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        {{ brand.name }}
      </h1>
    </div>
    <section>
      <div class="section-container">
        <div
          class="flex flex-col justify-between border-t border-dark pt-9 lg:flex-row"
        >
          <div class="mb-5 w-full lg:mb-0 lg:w-2/5">
            <h2 class="heading-secondary mb-10">
              {{ brand.small_description[$i18n.locale] }}
            </h2>
            <button
              class="btn-primary"
              @click.prevent="$nuxt.$emit('open-modal', 'request')"
            >
              Оставить заявку
            </button>
          </div>

          <div
            class="plaintext w-full lg:w-2/5"
            v-html="brand.description[$i18n.locale]"
          ></div>
        </div>
      </div>
    </section>
    <div class="section-distance">
      <PictureDetails />
    </div>
    <div class="section-distance section-container">
      <ProductsWrapper />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ params, $axios, store }) {
    const response = await $axios.get(`brands/${params.slug}`);
    const brand = response.data.data.brand;
    store.dispatch("brands/setBrand", brand);
    store.dispatch("products/setBrand", brand.id);
    return { brand };
  },

  data: () => ({
    others: [],
  }),
  created() {
    this.getOthers();
  },
  computed: {
    ...mapGetters({
      brands: "brands/brands",
    }),
  },
  methods: {
    async getOthers() {
      const response = await this.$axios.get(`brands/others/${this.brand.id}`);
      this.others = response.data.data.brands;
    },
  },
};
</script>

<style></style>
