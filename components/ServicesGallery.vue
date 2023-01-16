<template>
  <section>
    <div class="section-container section-distance">
      <UISlider
        :options="{
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: false,
          breakpoints: {
            320: {
              slidesPerView: 1.1,
            },
            1024: {
              slidesPerView: 3,
            },
            1680: {
              slidesPerView: 3,
            },
          },
        }"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div>
              <img :src="require(`~/assets/img/${item.image}`)" alt="" />
            </div>
          </div>
        </div>
      </UISlider>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: "bg/services-1.png",
      },
      {
        image: "bg/services-2.png",
      },
      {
        image: "bg/services-3.png",
      },
    ],
  }),
};
</script>

<style></style>
