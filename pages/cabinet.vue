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
        <Tabs titles="Личные данные, Адреса, Заказы" class="vertical">
          <CabinetPersonalData />
          <div class="space-y-10">
            <CabinetAddresses />
            <CabinetNewAddress />
          </div>
          <CabinetOrders />
        </Tabs>
      </div>
    </section>
  </div>
</template>

<script>
import PersonalData from "../components/Cabinet/personalData.vue";

export default { components: { PersonalData } };
</script>

<style lang="scss"></style>
