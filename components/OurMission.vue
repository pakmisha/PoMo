<template>
  <section class="section-distance">
    <div class="relative h-[450px] lg:h-[500px]">
      <img
        class="h-full w-full object-cover"
        :src="$asset(mission.mission_bg_image)"
        alt=""
      />
      <div
        class="absolute left-1/2 top-1/2 mx-auto max-w-xl -translate-x-1/2 -translate-y-1/2 text-center lg:max-w-[700px]"
      >
        <p class="heading-sub mb-4 text-white">[наша миссия]</p>
        <h2 class="heading-secondary text-white">
          {{ mission.mission_title[$i18n.locale] }}
        </h2>
      </div>
    </div>
    <!-- <div
      :style="'background-image:' + $asset(mission.mission_bg_image)"
      class="section-distance w-full bg-cover bg-center bg-no-repeat"
    >
      <div class="py-44 px-5 lg:py-52">
        <div class="mx-auto max-w-xl text-center lg:max-w-[700px]">
          <p class="heading-sub mb-4 text-white">[наша миссия]</p>
          <h2 class="heading-secondary text-white">
            {{ mission.mission_title[$i18n.locale] }}
          </h2>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  props: {
    mission: {
      type: Object,
    },
  },
};
</script>

<style></style>
