<template>
  <div class="section-container-inner">
    <div>
      <div class="faq" v-for="(item, index) in items" :key="index">
        <div class="faq__title heading-secondary mb-4 lg:mb-0">
          {{ item.title }}
        </div>
        <div class="faq__questions">
          <div
            class="faq__questions__item"
            v-for="(question, index) in item.questions"
            :key="'question-' + index"
          >
            <button
              class="faq-toggle flex w-full items-center justify-between py-3"
              @click.prevent="toggle(question, index)"
            >
              <div class="w-[90%] text-left text-sm uppercase text-dark">
                {{ question.question }}
              </div>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.800781 0.900391L5.00078 5.10039L9.20078 0.900391"
                  stroke="#101820"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="plaintext">
              {{ question.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
    items: [
      {
        title: "Информация о товаре",
        questions: [
          {
            id: 0,
            question: "С кем я могу связаться, чтобы купить товар? ",
            answer:
              "Доставка, подъем, и сборка товара по городам Алматы БЕСПЛАТНАЯ при заказе от 500 000 тенге. Доставка (кроме Алматы) осуществляется до подъезда покупателя. Оплатив сопутствующие услуги, вы можете воспользоваться услугами сервисной службы продавца по сборке товара в вашем регионе.",
          },
          {
            id: 1,
            question: "С кем я могу связаться, чтобы купить товар? ",
            answer:
              "Доставка, подъем, и сборка товара по городам Алматы БЕСПЛАТНАЯ при заказе от 500 000 тенге. Доставка (кроме Алматы) осуществляется до подъезда покупателя. Оплатив сопутствующие услуги, вы можете воспользоваться услугами сервисной службы продавца по сборке товара в вашем регионе.",
          },
        ],
      },
    ],
  }),
  methods: {
    toggle(question, index) {},
  },
};
</script>

<style lang="scss">
.faq {
  @apply flex flex-col justify-between border-t border-grey pt-5 lg:flex-row;
  &__title {
  }
  &__questions {
    @apply w-full space-y-4 lg:w-1/2;
    &__item {
      @apply border-b border-grey-light pb-3;
    }
  }
}
</style>
