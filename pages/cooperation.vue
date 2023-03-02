<template>
  <div v-if="cooperation != null">
    <ModalsRequestModal />
    <UIPath :path="path" />
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        {{ cooperation.title[$i18n.locale] }}
      </h1>
    </div>
    <section>
      <div class="section-container">
        <div
          class="flex flex-col justify-between border-t border-dark pt-9 lg:flex-row"
        >
          <div class="mb-5 w-full lg:mb-0 lg:w-2/5">
            <h2 class="heading-secondary mb-10">
              {{ cooperation.subtitle[$i18n.locale] }}
            </h2>
            <button
              class="btn-primary"
              @click.prevent="$nuxt.$emit('open-modal', 'request')"
            >
              Оставить заявку
            </button>
          </div>
          <div
            class="plaintext w-full lg:w-2/5"
            v-html="cooperation.description[$i18n.locale]"
          ></div>
        </div>
      </div>
    </section>
    <div class="section-distance relative">
      <div class="h-[450px] lg:h-auto">
        <img
          :src="$asset(cooperation.image)"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div class="page-icon p -top-10 right-5 lg:-top-20">
        <img src="~/assets/img/icons/p.svg" alt="" />
      </div>
    </div>
    <Benefits :cooperation="cooperation" />
  </div>
</template>

<script>
export default {
  data: () => ({
    cooperation: null,
    path: [
      {
        name: "сотрудничество",
        link: "/cooperation",
      },
    ],
  }),
  created() {
    this.get();
  },
  methods: {
    async get() {
      const response = await this.$axios.get("cooperation");
      this.cooperation = response.data.data.cooperation;
    },
  },
};
</script>

<style></style>
