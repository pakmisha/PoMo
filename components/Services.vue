<template>
  <section v-if="services.length > 0">
    <ModalsServicesModal />
    <Tabs :titles="titles" class="horizontal">
      <div v-for="(item, index) in services" :key="index">
        <div class="services">
          <div class="services__left mb-10 lg:mb-0">
            <h2 class="heading-secondary mb-5">
              {{ item.subtitle[$i18n.locale] }}
            </h2>
            <p class="plaintext mb-10 lg:mb-14 2xl:mb-20">
              {{ item.description[$i18n.locale] }}
            </p>
            <UIButton class="btn-primary" @click="openModal(item)">
              Заказать услугу
            </UIButton>
          </div>
          <div class="services__right">
            <div
              class="mb-14 lg:mb-24 2xl:mb-32"
              v-if="item?.offers?.length > 0"
            >
              <p class="plaintext mb-5 uppercase">Вы получаете:</p>
              <div class="space-y-5">
                <div v-for="(offer, index) in item.offers" :key="index">
                  <p class="text-sm font-medium text-dark">
                    {{ index + 1 }}. {{ offer.attributes.title[$i18n.locale] }}
                  </p>
                  <p class="plaintext mt-2">
                    {{ offer.attributes.description[$i18n.locale] }}
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              v-if="item.package_title.ru"
              class="max-w-[600px] border border-grey-light px-5 py-7 lg:px-11 lg:py-12"
            >
              <div v-if="item.package_title.ru">
                <p class="heading-secondary mb-6" v-tr="$i18n">
                  {{ item.package_title }}
                </p>
              </div>

              <div
                v-if="item.package_description.ru"
                class="package-list"
                v-html="item.package_description"
                v-tr="$i18n"
              ></div>
              <div>
                <div class="mb-3 flex flex-col lg:flex-row lg:items-center">
                  <p
                    class="mb-2 text-sm font-medium uppercase text-dark lg:mb-0 lg:mr-5"
                    v-tr="$i18n"
                    v-if="item.package_price_text.ru"
                  >
                    {{ item.package_price_text }}
                  </p>
                  <p
                    class="heading-secondary"
                    v-if="item.package_price.ru"
                    v-tr="$i18n"
                  >
                    {{ item.package_price }}
                  </p>
                </div>
                <p
                  class="text-xs text-grey"
                  v-if="item.package_note.ru"
                  v-tr="$i18n"
                >
                  {{ item.package_note }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [],
  }),
  created() {
    this.getServices();
  },
  computed: {
    titles() {
      const titles = [];
      this.services.forEach((item) => {
        titles.push(item.title[this.$i18n.locale]);
      });
      return titles;
    },
  },
  methods: {
    async getServices() {
      try {
        const response = await this.$axios.get("services");
        this.services = response.data.data.services;
      } catch (e) {
        console.log("ERROR GETTING SERVICES");
      }
    },
    openModal(item) {
      this.$nuxt.$emit("open-modal", "services");
      this.$nuxt.$emit("send", item);
    },
  },
};
</script>

<style lang="scss">
.package-list {
  ul {
    @apply mb-5 list-disc space-y-3 pl-5 text-sm text-grey lg:mb-10;
    li {
    }
  }
}
</style>
