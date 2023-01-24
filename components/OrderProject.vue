<template>
  <div>
    <div class="swiper relative">
      <UISlider
        :options="{
          slidesPerView: 1.1,
          centeredSlides: false,
          navigation: {
            nextEl: '.sw-next',
            prevEl: '.sw-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.1,
              spaceBetween: 10,
            },
            1350: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          },
        }"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div class="h-[450px] w-full md:h-[600px] lg:h-[700px]">
              <img
                class="h-full w-full object-cover"
                :src="require(`~/assets/${item.image}`)"
                alt=""
              />
            </div>
          </div>
        </div>
      </UISlider>
      <UISwiperButtons class="swiper-buttons-centered" />
    </div>
    <div class="mt-5 flex items-center justify-center lg:mt-10">
      <UIButton class="btn-primary">Заказать услугу дизайна интерьера</UIButton>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: "img/bg/bg-project.png",
      },
      {
        image: "img/bg/about-1.png",
      },
      {
        image: "img/bg/bg-project.png",
      },
      {
        image: "img/bg/about-1.png",
      },
    ],
  }),
};
</script>

<style></style>
