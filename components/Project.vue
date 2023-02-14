<template>
  <UILink :link="'/projects/' + project.slug" class="project">
    <div class="project-image">
      <img :src="$asset(project.cover)" alt="" />
    </div>
    <div class="project-bottom">
      <p class="project-bottom-title">{{ project.title[$i18n.locale] }}</p>
      <p class="text-sm">{{ project.year }}</p>
    </div>
  </UILink>
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
  @apply flex h-full flex-col justify-between;
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
