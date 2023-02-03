<template>
  <section>
    <div
      :style="'background-image:' + $asset(mission.mission_bg_image)"
      class="section-distance w-full bg-cover bg-center bg-no-repeat"
    >
      <div class="py-44 px-5 lg:py-52">
        <div class="mx-auto max-w-xl text-center lg:max-w-[700px]">
          <p class="heading-sub mb-4 text-white">[наша миссия]</p>
          <h2 class="heading-secondary text-white">
            Наша миссия – формировать творческие решения, способные чувственно
            обогатить жизни людей
          </h2>
        </div>
      </div>
    </div>
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
