<template>
  <section>
    <div class="section-container section-distance">
      <div
        class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <h1 class="heading-primary">Мы предлагаем</h1>
        <div
          class="flex flex-row border-grey-light md:flex-col md:border md:px-10 md:py-10"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="mr-2 block w-7 md:mr-0 md:mb-3 md:h-16 md:w-12">
            <img
              :src="require(`~/assets/img/${item.icon}`)"
              class="w-fill h-full object-contain"
              alt=""
            />
          </div>
          <div class="plaintext w-[90%] md:w-auto">
            {{ item.description }}
          </div>
        </div>
      </div>
      <div class="mt-5 flex items-center justify-center lg:mt-10">
        <button
          class="btn-primary"
          @click.prevent="$nuxt.$emit('open-modal', 'request')"
        >
          Оставить заявку
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "icons/benefit-1.svg",
        description:
          "Привлекательную гибкую систему скидок, комиссионного вознаграждения и бонусов для вас и ваших клиентов, а также уникальные закрытые распродажи",
      },
      {
        icon: "icons/benefit-2.svg",
        description:
          "Профессиональную помощь наших специалистов в выборе товаров",
      },
      {
        icon: "icons/benefit-3.svg",
        description:
          "Самые свежие новости компании и наших брендов, информацию о поступлении всех новых коллекций на наш склад",
      },
      {
        icon: "icons/benefit-4.svg",
        description:
          "Обеспечение 3D моделями на большинство поставляемой мебели",
      },
      {
        icon: "icons/benefit-5.svg",
        description:
          "Оперативное предоставление информации об интересующих коллекциях. Консультации по ассортименту, возможность зарезервировать необходимый вам товар и оформить заказ",
      },
      {
        icon: "icons/benefit-6.svg",
        description:
          "Регулярные и надёжные поставки до дверей клиента во все регионы Казахстана",
      },
      {
        icon: "icons/benefit-7.svg",
        description: "Гарантийное и послегарантийное обслуживание для клиентов",
      },
    ],
  }),
};
</script>

<style></style>
