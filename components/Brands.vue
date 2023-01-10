<template>
  <div class="section-distance section-container">
    <div
      class="mx-auto mb-12 flex max-w-4xl flex-col items-center text-center lg:mb-24"
    >
      <p class="heading-sub">[наши бренды]</p>
      <div class="my-3 h-16 w-px bg-dark-blue"></div>
      <h2 class="heading-primary mb-6 lg:mb-10">
        Мы являемся эксклюзивными дистрибьюторами трёх международных брендов
      </h2>
    </div>
    <UISlider
      :options="{
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
        breakpoints: {
          320: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1680: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      }"
    >
      <div
        class="swiper-slide h-auto"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="brand-item">
          <div class="brand-item-image">
            <img
              class="h-full w-full object-cover"
              :src="require(`~/assets/img/${item.image}`)"
              alt=""
            />
            <div class="corner absolute -right-[7px] -bottom-[6px]">
              <img src="~/assets/img/icons/brand-list.png" alt="" />
            </div>
            <div class="brand-logo absolute left-10 bottom-5">
              <img
                class="w-[100px] lg:w-[120px] 2xl:w-[200px]"
                :src="require(`~/assets/img/${item.logo}`)"
                alt=""
              />
            </div>
          </div>
          <div class="brand-item-description mt-5 2xl:mt-10">
            <p class="mb-3 text-sm font-semibold uppercase text-dark">
              {{ item.title }}
            </p>
            <p class="mb-6 text-sm text-grey">{{ item.description }}</p>
            <div class="flex">
              <a href="" class="btn-primary"> читать больше </a>
            </div>
          </div>
        </div>
      </div>
    </UISlider>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: "bg/brand-1.png",
        logo: "icons/logo-grado.png",
        title:
          "Grado – не просто украшает пространство, но и отражает стиль жизни",
        description:
          "Grado основывается на минималистичном, изысканном дизайне. Предметы мебели — это связь эмоций и чувств людей с пространством. В каждой модели прослеживается динамика творчества и элегантность. Особое внимание бренд придаёт деталям, ведь они всегда имеют особое значение. ",
      },
      {
        image: "bg/brand-2.png",
        logo: "icons/logo-grado.png",
        title:
          "Grado – не просто украшает пространство, но и отражает стиль жизни",
        description:
          "Grado основывается на минималистичном, изысканном дизайне. Предметы мебели — это связь эмоций и чувств людей с пространством. В каждой модели прослеживается динамика творчества и элегантность. Особое внимание бренд придаёт деталям, ведь они всегда имеют особое значение.",
      },
      {
        image: "bg/brand-3.png",
        logo: "icons/logo-grado.png",
        title:
          "Grado – не просто украшает пространство, но и отражает стиль жизни",
        description:
          "Grado основывается на минималистичном, изысканном дизайне. Предметы мебели — это связь эмоций и чувств людей с пространством. В каждой модели прослеживается динамика творчества и элегантность. Особое внимание бренд придаёт деталям, ведь они всегда имеют особое значение.",
      },
      {
        image: "bg/brand-1.png",
        logo: "icons/logo-grado.png",
        title:
          "Grado – не просто украшает пространство, но и отражает стиль жизни",
        description:
          "Grado основывается на минималистичном, изысканном дизайне. Предметы мебели — это связь эмоций и чувств людей с пространством. В каждой модели прослеживается динамика творчества и элегантность. Особое внимание бренд придаёт деталям, ведь они всегда имеют особое значение.",
      },
    ],
  }),
};
</script>

<style lang="scss">
.brand-item {
  @apply h-[500px] transition-all duration-300 ease-in-quad md:h-[600px] 2xl:h-[700px];
  &-image {
    @apply relative h-[500px] transition-all duration-300 ease-in-quad md:h-[600px] 2xl:h-[700px];
    .corner {
      @apply visible opacity-100 transition-all duration-300 ease-in-out;
    }
    .brand-logo {
      @apply visible opacity-100 transition-all duration-300 ease-in-out;
    }
  }
  &-description {
    @apply invisible h-0 translate-y-20 opacity-0 transition-all duration-300 ease-in-quad;
  }
  &:hover {
    .brand-item-image {
      @apply h-[30%] lg:h-[35%];
      .corner {
        @apply invisible opacity-0;
      }
      .brand-logo {
        @apply invisible opacity-0;
      }
    }
    .brand-item-description {
      @apply visible h-full translate-y-0 opacity-100;
    }
  }
}
</style>
