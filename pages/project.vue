<template>
  <div>
    <section>
      <div class="section-container section-title-distance">
        <div class="text-center">
          <h1 class="heading-big mx-auto mb-5 max-w-[1490px] lg:mb-8">
            Интерьер «Под ключ» двухэтажного дома в алматы
          </h1>
          <p class="mx-auto max-w-[650px] text-sm text-grey">
            Данный проект — это комплексный подход к обустройству интерьера
            двухэтажного жилого дома в Алматы, который включает в себя
            планирование и разработка концепций дизайна, создание эскизов
            и планов, выбор материалов и фурнитуры, реализация проекта.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div>
        <img
          src="~/assets/img/bg/bg-project.png"
          class="w-full object-cover"
          alt=""
        />
      </div>
    </section>
    <div
      class="section-container relative -mt-10 w-full md:w-[90%] lg:-mt-20 lg:w-[70%] 2xl:w-[60%]"
    >
      <ProjectDetails />
    </div>
    <section>
      <div class="section-container section-distance">
        <OrderProject />
      </div>
    </section>
    <section>
      <div class="section-container section-distance">
        <div class="flex flex-col justify-between lg:flex-row lg:items-center">
          <h2 class="heading-primary mb-4 lg:mb-0">Другие наши проекты</h2>
          <UILink link="" class="btn-primary">Смотреть все</UILink>
        </div>
        <div class="swiper relative mt-10">
          <UISlider
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
              <div class="swiper-slide">
                <Project />
              </div>
              <div class="swiper-slide">
                <Project />
              </div>
              <div class="swiper-slide">
                <Project />
              </div>
              <div class="swiper-slide">
                <Project />
              </div>
              <div class="swiper-slide">
                <Project />
              </div>
            </div>
          </UISlider>
          <UISwiperButtons class="swiper-buttons-centered" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
