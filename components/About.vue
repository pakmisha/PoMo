<template>
  <section class="section-container section-distance">
    <div
      class="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center lg:mb-24"
    >
      <p class="heading-sub">[О нас]</p>
      <div class="my-3 h-16 w-px bg-dark-blue"></div>
      <h2 class="heading-primary mb-6 lg:mb-10">
        {{ home.about_title[$i18n.locale] }}
      </h2>
      <p class="plaintext lg:mx-32">
        {{ home.about_description[$i18n.locale] }}
      </p>
    </div>
    <div class="flex items-center space-x-5">
      <div class="hidden md:block">
        <img src="~/assets/img/bg/about-2.png" alt="" />
      </div>
      <div class="">
        <img src="~/assets/img/bg/about-1.png" alt="" />
      </div>
      <div class="hidden md:block">
        <img src="~/assets/img/bg/about-3.png" alt="" />
      </div>
    </div>
    <div class="mt-10 flex items-center justify-center lg:mt-16">
      <UILink link="/about" class="btn-primary"> подробнее о нас </UILink>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      home: "home/home",
    }),
  },
};
</script>

<style></style>
