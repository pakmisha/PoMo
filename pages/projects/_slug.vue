<template>
  <div v-if="projects != null">
    <ModalsDesignModal />
    <UIPath :path="path" />
    <section>
      <div class="section-container section-title-distance">
        <div class="text-center">
          <h1 class="heading-big mx-auto mb-5 max-w-[1490px] lg:mb-8">
            {{ project.title[$i18n.locale] }}
          </h1>
          <p class="mx-auto max-w-[650px] text-sm text-grey">
            {{ project.description[$i18n.locale] }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <div>
        <img
          :src="$asset(project.cover)"
          class="w-full object-cover lg:h-[1000px]"
          alt=""
        />
      </div>
    </section>
    <div
      class="section-container relative -mt-10 w-full md:w-[90%] lg:-mt-20 lg:w-[70%] 2xl:w-[60%]"
    >
      <ProjectDetails :project="project" />
    </div>
    <section>
      <div class="section-container section-distance">
        <OrderProject :project="project" />
      </div>
    </section>
    <section v-if="others.length > 0">
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
              <div
                class="swiper-slide"
                v-for="(project, index) in others"
                :key="index"
              >
                <Project :project="project" />
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
import { mapGetters } from "vuex";
export default {
  async asyncData({ params, $axios, store }) {
    const response = await $axios.get(`projects/${params.slug}`);
    const project = response.data.data.project;
    store.dispatch("projects/setProject", project);
    return { project };
  },

  data: () => ({
    others: [],
    path: [
      {
        name: "Реализованные проекты",
        link: "/catalog",
      },
    ],
  }),
  created() {
    this.getOthers();
    const pathArray = {
      name: this.project?.title,
      link: this.project?.slug,
    };
    this.path.push(pathArray);
  },
  computed: {
    ...mapGetters({
      projects: "projects/projects",
    }),
  },
  methods: {
    async getOthers() {
      const response = await this.$axios.get(
        `projects/others/${this.project.id}`
      );
      this.others = response.data.data.projects;
      // console.log(this.project.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
