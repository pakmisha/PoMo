<template>
  <div class="project">
    <UISlider
      :options="{
        slidesPerView: 1,
        centeredSlides: false,
        navigation: {
          nextEl: '.sw-next',
          prevEl: '.sw-prev',
        },
      }"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in project.media"
          :key="index"
        >
          <div class="project-image">
            <img :src="$asset(item.id + '/' + item.file_name)" alt="" />
          </div>
        </div>
      </div>
      <UISwiperButtons class="swiper-buttons-centered" />
    </UISlider>
    <UILink class="project-bottom" :link="'/projects/' + project.slug">
      <p class="project-bottom-title">
        {{ project.title[$i18n.locale] }}
      </p>
      <p class="text-sm">{{ project.year }}</p>
    </UILink>
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss">
.project {
  @apply h-full;

  &-image {
    @apply relative h-[350px] overflow-hidden border border-grey-light lg:h-[400px] 2xl:h-[500px];

    img {
      @apply h-full w-full object-cover;
    }
  }

  &-bottom {
    @apply mt-4 flex items-center justify-between border-b border-black pb-2;

    &-title {
      @apply w-[65%] overflow-hidden text-ellipsis text-xs font-semibold uppercase md:w-[75%] lg:h-[20px] lg:text-sm;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
