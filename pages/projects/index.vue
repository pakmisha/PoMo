<template>
  <div>
    <UIPath :path="path" />
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        Реализованные проекты
      </h1>
    </div>
    <div class="section-container">
      <div class="projects">
        <div
          class="projects__item"
          v-for="(project, index) in projects"
          :key="index"
        >
          <Project :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    path: [
      {
        name: "РЕАЛИЗОВАННЫЕ ПРОЕКТЫ",
        link: "",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      projects: "projects/projects",
    }),
  },
};
</script>

<style lang="scss" scoped>
.projects {
  @apply grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3;
  &__item {
  }
}
</style>
