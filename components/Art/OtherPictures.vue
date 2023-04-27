<template>
  <section>
    <div class="section-container section-distance">
      <div class="flex flex-col justify-between lg:flex-row lg:items-center">
        <h2 class="heading-primary mb-4 lg:mb-0">Другие картины</h2>
        <div class="flex">
          <UILink link="/artCollections" class="btn-primary"
            >Смотреть все</UILink
          >
        </div>
      </div>
      <div class="swiper relative mt-10">
        <UISlider
          class="sw-other-pictures"
          :options="{
            slidesPerView: 2,
            spaceBetween: 15,
            navigation: {
              nextEl: '.sw-next',
              prevEl: '.sw-prev',
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1680: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            },
          }"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(picture, index) in gallery"
              :key="index"
            >
              <div class="">
                <ArtPicture :picture="picture" />
              </div>
            </div>
          </div>
          <div class="mt-5 flex justify-end">
            <UISwiperButtons class="swiper-buttons-bottom" />
          </div>
        </UISlider>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    gallery: [
      {
        img: "/img/art/picture-1.png",
        name: "Софья линд «Встретимся в Жоресе»",
        slug: "sofia-lind1",
      },
      {
        img: "/img/art/picture-2.png",
        name: "Софья линд «Встретимся в Жоресе»",
        slug: "sofia-lind2",
      },
      {
        img: "/img/art/picture-3.png",
        name: "Софья линд «Встретимся в Жоресе»",
        slug: "sofia-lind3",
      },
      {
        img: "/img/art/picture-4.png",
        name: "Софья линд «Встретимся в Жоресе»",
        slug: "sofia-lind4",
      },
      {
        img: "/img/art/picture-2.png",
        name: "Софья линд «Встретимся в Жоресе»",
        slug: "sofia-lind5",
      },
      {
        img: "/img/art/picture-1.png",
        name: "Софья линд «Встретимся в Жоресе»",
        slug: "sofia-lind6",
      },
      {
        img: "/img/art/picture-2.png",
        name: "Софья линд «Встретимся в Жоресе»",
        slug: "sofia-lind7",
      },
      {
        img: "/img/art/picture-3.png",
        name: "Софья линд «Встретимся в Жоресе»",
        slug: "sofia-lind8",
      },
    ],
  }),
};
</script>

<style></style>
