<template>
  <div class="project">
    <div class="project-image">
      <img :src="require('~/assets/img/projects/project-2.png')" alt="" />
    </div>
    <UILink link="/project" class="project-bottom">
      <p class="project-bottom-title">Дизайн интерьера двухэтажного дома</p>
      <p class="text-sm">2022</p>
    </UILink>
  </div>
</template>
<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
.project {
  @apply flex h-full flex-col justify-between;
  &-image {
    @apply relative h-full overflow-hidden border border-grey-light;
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
