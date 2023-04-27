<template>
  <div>
    <div class="section-container mt-10">
      <div class="flex flex-col justify-between lg:flex-row lg:items-center">
        <div
          class="mb-5 flex h-[400px] w-full overflow-hidden md:h-[500px] lg:mb-0 lg:h-[600px] lg:w-3/5 2xl:h-[700px]"
        >
          <div class="sw-thumbs mr-2 hidden lg:block" ref="sw_thumbs">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in gallery"
                :key="'addition-' + index"
              >
                <div
                  class="aspect-square h-[140px] w-[140px] border-transparent"
                >
                  <img
                    :src="require('~/assets' + item.img)"
                    class="h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper sw-picture" ref="sw_picture">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in gallery"
                :key="index"
              >
                <div class="h-full w-full border border-grey">
                  <img
                    class="h-full w-full object-cover"
                    :src="require('~/assets' + item.img)"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <UISwiperButtons class="swiper-buttons-centered" />
          </div>
        </div>
        <div class="w-full space-y-6 lg:w-[35%] lg:space-y-10">
          <div class="border-b border-grey-light pb-4">
            <h1 class="heading-primary mb-4">
              Меруерт Кунакова «Золотая линия»
            </h1>
            <p class="text-xl font-medium">25000 ₸</p>
          </div>
          <p class="text-sm text-grey">
            Художница Меруерт Кунакова работает в технике цианотипия.
            Она называет этот редкий вид фотопечати носителем, сохраняющим
            ностальгию. Слово, которое в переводе с древнегреческого означает —
            «возвращение на родину» и — «боль, печаль».
          </p>
          <div>
            <div
              class="mb-3 flex items-center"
              v-for="(item, index) in params"
              :key="index"
            >
              <p class="w-[150px] text-sm text-grey">{{ item.name }}</p>
              <p class="text-sm font-medium uppercase text-dark-blue">
                {{ item.value }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex">
              <UIButton class="btn-secondary mr-4">Добавить в корзину</UIButton>
              <div class="flex">
                <UIButton class="favourite">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.17008 12.6482L11.4677 18.505C11.6478 18.6725 11.7379 18.7563 11.8393 18.7907C11.9435 18.826 12.0565 18.826 12.1607 18.7907C12.2621 18.7563 12.3522 18.6725 12.5323 18.505L12.5323 18.505L18.8299 12.6482C20.6224 10.9812 20.8395 8.21923 19.3296 6.29262L19.0731 5.96523C17.2789 3.67583 13.7055 4.06236 12.4423 6.68247C12.2638 7.05288 11.7362 7.05288 11.5577 6.68247C10.2945 4.06236 6.72114 3.67583 4.92694 5.96522L4.67036 6.29262C3.16047 8.21923 3.37764 10.9812 5.17008 12.6482Z"
                      stroke="#101820"
                    />
                  </svg>
                </UIButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    gallery: [
      {
        img: "/img/art/picture-1.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-2.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-3.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
    ],
    params: [
      {
        name: "Техника",
        value: "Цианотипия",
      },
      {
        name: "Размер",
        value: "A3 (11,7 x 16,5 дюймов)",
      },
    ],
  }),

  mounted() {
    const additionThumbs = this.$swiper(this.$refs.sw_thumbs, {
      slidesPerView: "auto",
      spaceBetween: 10,
      direction: "vertical",
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      grabCursor: true,
      freeMode: true,
      autoHeight: true,
      watchSlidesProgress: true,
    });
    this.$swiper(this.$refs.sw_picture, {
      slidesPerView: 1,
      centeredSlides: false,
      navigation: {
        nextEl: ".sw-next",
        prevEl: ".sw-prev",
      },
      thumbs: {
        swiper: additionThumbs,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide-thumb-active > div {
  @apply border border-dark;
}
</style>
