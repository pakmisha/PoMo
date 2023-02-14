<template>
  <div v-if="home != null">
    <ModalsRequestModal />
    <section>
      <div class="section-container section-title-distance">
        <div class="text-center">
          <h1 class="heading-big mb-5 lg:mb-8">
            {{ home.title[$i18n.locale] }}
          </h1>
          <p class="heading-sub uppercase">
            {{ home.subtitle[$i18n.locale] }}
          </p>
        </div>
      </div>
    </section>
    <Marquee />
    <div class="relative">
      <PictureDetails />
      <div class="page-icon p left-0 top-0">
        <img src="~/assets/img/icons/p.svg" alt="" />
      </div>
      <div class="page-icon o -right-7 top-10">
        <img src="~/assets/img/icons/o.svg" alt="" />
      </div>
      <div class="page-icon m -bottom-5 -left-20 lg:left-10 lg:-bottom-10">
        <img src="~/assets/img/icons/m.svg" alt="" />
      </div>
      <div
        class="page-icon big-o -right-5 -bottom-16 lg:right-20 lg:-bottom-20 2xl:right-32 2xl:-bottom-40"
      >
        <img src="~/assets/img/icons/big-o.svg" alt="" />
      </div>
    </div>
    <About />
    <Category />
    <section>
      <div class="section-distance section-container">
        <div
          class="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center lg:mb-24"
        >
          <p class="heading-sub">[наши бренды]</p>
          <div class="my-3 h-16 w-px bg-dark-blue"></div>
          <h2 class="heading-primary mb-6 lg:mb-10">
            {{ home.brand_title[$i18n.locale] }}
          </h2>
        </div>
        <Brands />
      </div>
    </section>
    <PopularProducts />
    <Society />
    <UIFloatingButtons />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("home/get");
  },
  computed: {
    ...mapGetters({
      home: "home/home",
    }),
  },
};
</script>
