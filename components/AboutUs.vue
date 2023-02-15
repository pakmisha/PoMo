<template>
  <section class="section-container section-distance relative">
    <div
      class="absolute left-0 top-0 -z-10 hidden h-[500px] w-[350px] 2xl:block 2xl:w-[400px]"
    >
      <img
        :src="$asset(about.about_us_image_top_left)"
        class="h-full w-full object-cover"
        alt=""
      />
    </div>
    <div>
      <div class="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p class="heading-sub">[О нас]</p>
        <div class="my-3 h-16 w-px bg-dark-blue"></div>
        <h2 class="heading-primary mb-6 lg:mb-10">
          {{ about.about_us_title[$i18n.locale] }}
        </h2>
        <p class="plaintext lg:mx-32">
          {{ about.about_us_subtitle[$i18n.locale] }}
        </p>
      </div>
    </div>
    <div class="mt-5 justify-end lg:mt-2 lg:flex 2xl:-mt-10">
      <div class="relative">
        <div class="h-[400px] w-full lg:h-auto lg:w-[400px]">
          <img
            :src="$asset(about.about_us_image_top_right)"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div
          class="-mt-20 ml-5 h-[200px] w-[200px] lg:absolute lg:-left-24 lg:-bottom-10 lg:ml-0 lg:mt-0 lg:h-[250px] lg:w-[250px] 2xl:h-[300px] 2xl:w-[300px]"
        >
          <img
            :src="$asset(about.about_us_image_bottom_right)"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="mt-10 flex flex-col items-center justify-center lg:mt-0 lg:flex-row"
    >
      <div class="mr-10">
        <img :src="$asset(about.about_us_image_bottom_left)" alt="" />
      </div>
      <div
        class="mt-5 max-w-[600px] text-xl font-medium uppercase text-dark lg:mt-0 lg:text-2xl"
      >
        {{ about.about_us_subtitle2[$i18n.locale] }}
      </div>
    </div>
    <div class="page-icon m absolute -left-10 -bottom-20">
      <img src="~/assets/img/icons/m.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    about: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
