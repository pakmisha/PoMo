<template>
  <div>
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        личный кабинет
      </h1>
    </div>
    <section>
      <div class="section-container">
        <Tabs :titles="['Личные данные', 'Адреса', 'Заказы']" class="vertical">
          <CabinetPersonalData />
          <div class="space-y-10">
            <CabinetAddresses
              v-for="(item, index) in addresses"
              :key="index"
              :item="item"
              :countries="countries"
              :addresses="addresses"
            />
            <CabinetNewAddress :addresses="addresses" :countries="countries" />
          </div>
          <CabinetOrders />
        </Tabs>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data: () => ({
    addresses: [],
    countries: [
      {
        name: "Kazakhstan",
      },
      {
        name: "Russia",
      },
      {
        name: "Georgia",
      },
    ],
  }),
  created() {
    this.getAddresses();
  },
  methods: {
    async getAddresses() {
      const response = await this.$axios.get("addresses");
      this.addresses = response.data.data.addresses;
    },
  },
};
</script>

<style lang="scss"></style>
