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
            <button
              class="btn-primary"
              @click.prevent="$nuxt.$emit('open-modal', 'services')"
            >
              Заказать услугу
            </button>
          </div>
          <div class="services__right">
            <div class="mb-14 lg:mb-24 2xl:mb-32" v-if="item.offers.length > 0">
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
              v-if="item.package.length > 0"
              class="max-w-[600px] border border-grey-light px-5 py-7 lg:px-11 lg:py-12"
            >
              <p class="heading-secondary mb-6" v-tr="$i18n">
                {{ item.package[0].attributes.title }}
              </p>
              <div
                class="package-list"
                v-html="item.package[0].attributes.body"
                v-tr="$i18n"
              ></div>
              <div>
                <div class="mb-3 flex flex-col lg:flex-row lg:items-center">
                  <p
                    class="mb-2 text-sm font-medium uppercase text-dark lg:mb-0 lg:mr-5"
                  >
                    Стоимость услуги от:
                  </p>
                  <p class="heading-secondary">29 000 ₸ за 1 кв.</p>
                </div>
                <p class="text-xs text-grey">
                  *Авторский надзор — 20% от стоимости проекта
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
      const response = await this.$axios.get("services");
      this.services = response.data.data.services;
    },
  },
};
</script>

<style lang="scss">
.package-list {
  ul {
    @apply mb-10 list-disc space-y-3 pl-5 text-sm text-grey lg:mb-14 2xl:mb-16;
    li {
    }
  }
}
</style>
