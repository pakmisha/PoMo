<template>
  <div>
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        Реализованные проекты
      </h1>
    </div>
    <div class="section-container">
      <div class="projects">
        <div class="projects__item">
          <Project />
        </div>
        <div class="projects__item">
          <Project />
        </div>
        <div class="projects__item">
          <Project />
        </div>
        <div class="projects__item">
          <Project />
        </div>
        <div class="projects__item">
          <Project />
        </div>
        <div class="projects__item">
          <Project />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.projects {
  @apply grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3;
  &__item {
    &:nth-child(5n) {
      @apply h-full md:col-span-2 md:row-span-2;
    }
  }
}
</style>
