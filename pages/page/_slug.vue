<template>
  <section>
    <UIPath :path="path" />
    <div class="section-container section-title-distance">
      <div class="text-center">
        <h1 class="heading-big mx-auto max-w-[1490px]">
          {{ page.title[$i18n.locale] }}
        </h1>
        <p class="mx-auto max-w-[650px] text-sm text-grey"></p>
      </div>
    </div>
    <div class="details section-container-inner">
      <div
        class="details__item"
        v-for="(item, index) in page.points"
        :key="index"
      >
        <div class="details__item__left">
          <h3 class="heading-secondary">
            {{ item.attributes.title[$i18n.locale] }}
          </h3>
        </div>
        <div
          class="details__item__right"
          v-html="item.attributes.description[$i18n.locale]"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const response = await $axios.get(`pages/${params.slug}`);
    const page = response.data.data.page;
    return { page };
  },
  data: () => ({
    path: [],
  }),
  created() {
    const pathArray = {
      name: this.page?.title,
      link: this.page?.slug,
    };
    this.path.push(pathArray);
  },
};
</script>

<style lang="scss" scoped>
.details {
  &__item {
    @apply flex flex-col justify-between border-t border-grey py-4 lg:flex-row;
    &__left {
      @apply mb-4 w-full lg:mb-0 lg:w-2/5;
    }
    &__right {
      @apply w-full  lg:w-2/5;
      ul {
        @apply space-y-2 pl-5;
        li {
          @apply text-sm text-grey;
        }
      }
    }
  }
}
</style>
