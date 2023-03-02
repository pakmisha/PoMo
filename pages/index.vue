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
    <!-- <div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath>
            <path
              id="shape"
              fill="#FF0066"
              d="M39.8,-51.8C50.2,-38.7,56.4,-24.8,63.3,-7.9C70.2,9.1,77.9,29.3,72.7,45.3C67.4,61.4,49.3,73.4,31.4,75C13.5,76.6,-4,67.8,-18.6,59C-33.2,50.3,-44.9,41.5,-53.5,29.5C-62,17.5,-67.4,2.3,-66,-12.6C-64.5,-27.5,-56.1,-42.2,-43.9,-55C-31.8,-67.8,-15.9,-78.9,-0.6,-78.2C14.7,-77.4,29.3,-65,39.8,-51.8Z"
              transform="translate(100 100)"
            />
          </clipPath>
        </defs>
        <img src="~/assets/img/bg/brand-1.png" clip-path="url(#shape)" alt="">
      </svg>
    </div> -->
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
