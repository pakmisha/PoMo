<template>
  <div>
    <UIPath :path="path" />
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
    <ModalsOrderModal />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  data: () => ({
    path: [
      {
        name: "личный кабинет",
        link: "/cabinet",
      },
    ],
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
  computed: {
    ...mapGetters({
      addresses: "addresses/addresses",
    }),
  },
};
</script>

<style lang="scss"></style>
