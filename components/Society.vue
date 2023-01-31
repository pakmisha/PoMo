<template>
  <section class="section-container section-distance">
    <div
      class="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center lg:mb-24"
    >
      <p class="heading-sub">[вклад в развитие дизайн сообщества]</p>
      <div class="my-3 h-16 w-px bg-dark-blue"></div>
      <h2 class="heading-primary mb-6 lg:mb-10">
        {{ home.design_title[$i18n.locale] }}
      </h2>
      <p class="plaintext mb-10 lg:mx-32">
        {{ home.design_description[$i18n.locale] }}
      </p>
      <button
        class="btn-primary"
        @click.prevent="$nuxt.$emit('open-modal', 'request')"
      >
        узнать подробнее
      </button>
    </div>
    <div class="relative flex justify-between">
      <div class="lg:mr-20">
        <div class="mr-14 lg:mr-0 lg:h-[500px] lg:w-[440px]">
          <img
            class="h-full w-full object-cover"
            :src="$asset(home.design_image_left)"
            alt=""
          />
        </div>
        <div class="-mt-14 ml-14 lg:-mt-24 lg:ml-72 lg:h-[800px] lg:w-[590px]">
          <img
            class="h-full w-full object-cover"
            :src="$asset(home.design_image_middle)"
            alt=""
          />
        </div>
      </div>
      <div class="mt-20 hidden h-[500px] w-[440px] lg:block">
        <img
          class="h-full w-full object-cover"
          :src="$asset(home.design_image_right)"
          alt=""
        />
      </div>
      <div class="page-icon m -left-10 bottom-32 -z-10 lg:left-20">
        <img src="~/assets/img/icons/m.svg" alt="" />
      </div>
      <div class="page-icon o right-[22%] top-64 hidden lg:block">
        <img src="~/assets/img/icons/o.svg" alt="" />
      </div>
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
