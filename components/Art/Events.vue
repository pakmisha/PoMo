<template>
  <section class="section-container section-distance border-t border-dark">
    <div class="mt-7 flex flex-col justify-between lg:flex-row">
      <div class="w-full lg:w-1/3">
        <p class="heading-sub mb-9 lg:mb-12">[события]</p>
        <div class="mb-10 text-2xl font-semibold uppercase text-dark lg:mb-20">
          Приглашаем вас посетить главные мероприятия в мире искусства
        </div>
      </div>
      <div class="swiper relative mt-5 w-full lg:mt-0 lg:w-[65%]">
        <UISlider
          class="slider-popular-products"
          :options="{
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: false,
            centeredSlidesBounds: false,
            centerInsufficientSlides: false,
            navigation: {
              nextEl: '.sw-next',
              prevEl: '.sw-prev',
            },
            breakpoints: {
              320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              1690: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            },
          }"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="relative h-[350px] lg:h-[400px]">
                <img
                  src="~/assets/img/art/event-1.png"
                  class="h-full w-full object-cover"
                  alt=""
                />
                <div
                  class="absolute right-3 top-3 flex flex-col items-end space-y-2"
                >
                  <div class="bage">21 апреля 2023 года</div>
                  <div class="bage">Адрес: Алматы, Бегалина 48</div>
                  <div class="bage">Время: 18:00</div>
                </div>
              </div>
              <div class="mt-4">
                <p class="mb-3 font-semibold uppercase text-dark">
                  выставка «Изысканные краски Алматы»
                </p>
                <p class="text-sm text-grey">
                  В программе: постмодернизм, искусство эпохи самовыражения.
                  Перформанс, знакомство с картинами, шампанское и хорошая
                  музыка. Ждем Вас!
                </p>
                <div class="mt-6 flex">
                  <button class="btn-primary">купить билет</button>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="relative h-[350px] lg:h-[400px]">
                <img
                  src="~/assets/img/art/event-2.png"
                  class="h-full w-full object-cover"
                  alt=""
                />
                <div
                  class="absolute right-3 top-3 flex flex-col items-end space-y-2"
                >
                  <div class="bage">21 апреля 2023 года</div>
                  <div class="bage">Адрес: Алматы, Бегалина 48</div>
                  <div class="bage">Время: 18:00</div>
                </div>
              </div>
              <div class="mt-4">
                <p class="mb-3 font-semibold uppercase text-dark">
                  открытие PoMo Art Gallery и первая выставка
                </p>
                <p class="text-sm text-grey">
                  В программе: постмодернизм, искусство эпохи самовыражения.
                  Перформанс, знакомство с картинами, шампанское и хорошая
                  музыка. Ждем Вас!
                </p>
                <div class="mt-6 flex">
                  <button class="btn-primary">купить билет</button>
                </div>
              </div>
            </div>
          </div>
        </UISlider>
        <div class="mt-5 flex justify-end">
          <UISwiperButtons class="swiper-buttons-bottom" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bage {
  @apply flex w-fit items-center justify-center rounded-full bg-white px-4 py-2 text-xs text-dark;
}
</style>
