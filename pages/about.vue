<template>
  <div>
    <div v-if="about != null">
      <UIPath :path="path" />
      <section>
        <div class="section-container section-title-distance">
          <div class="text-center">
            <h1 class="heading-big mx-auto mb-5 max-w-[1490px] lg:mb-8">
              {{ about.title[$i18n.locale] }}
            </h1>
            <p class="mx-auto max-w-[650px] text-sm text-grey">
              {{ about.subtitle[$i18n.locale] }}
            </p>
          </div>
        </div>
      </section>
      <Marquee />
      <section>
        <div class="relative">
          <div class="banner h-[450px] w-full lg:h-auto">
            <img
              :src="$asset(about.banner)"
              class="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div class="page-icon p absolute left-0 top-0">
            <img src="~assets/img/icons/p.svg" alt="" />
          </div>
          <div
            class="page-icon big-o absolute -bottom-14 right-5 lg:-bottom-20 lg:right-20 2xl:-bottom-40"
          >
            <img src="~assets/img/icons/big-o.svg" alt="" />
          </div>
        </div>
      </section>
      <AboutUs :about="about" />
      <OurMission :mission="about" />
      <div class="section-container section-distance">
        <p class="mx-auto mb-5 max-w-[1000px] text-center text-sm text-grey">
          {{ about.mission_description[$i18n.locale] }}
        </p>
        <div>
          <img :src="$asset(about.mission_bg_image2)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    about: null,
    path: [
      {
        name: "О нас",
        link: "/about",
      },
    ],
  }),
  created() {
    this.get();
  },
  methods: {
    async get() {
      try {
        const response = await this.$axios.get("home/about");
        this.about = response.data.data.about;
      } catch (e) {
        console.log("ERROR ABOUT PAGE");
      }
    },
  },
};
</script>

<style></style>
