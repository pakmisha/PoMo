<template>
  <section>
    <Tabs
      titles="Интерьер «под ключ»,Концепт проект,Комплектация мебелью и декором,декорирование интерьера,Поставка мебели на заказ,Примерка мебели"
      class="horizontal"
    >
      <div>
        <div class="services">
          <div class="services__left">
            <h2 class="heading-secondary mb-5">
              Создание интерьера «под ключ»
            </h2>
            <p class="plaintext mb-20">
              Услуга включает в себя весь комплекс услуг от создания
              дизайн-проекта до полной комплектации мебелью и декором
            </p>
            <button class="btn-primary">Заказать услугу</button>
          </div>
          <div class="services__right">
            <p class="plaintext mb-5 uppercase">Вы получаете:</p>
            <div class="space-y-5">
              <div v-for="(item, index) in items" :key="index">
                <p class="text-sm font-medium text-dark">
                  {{ index + 1 }}. {{ item.title }}
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><div class="services">asdasd</div></div>
      <div><div class="services">254</div></div>
      <div><div class="services">ertyety</div></div>
      <div><div class="services">456</div></div>
      <div><div class="services">asdasd</div></div>
    </Tabs>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title:
          " Полное сопровождение проекта со стадии создания дизайна и его реализации",
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
