<template>
  <section>
    <div>
      <div class="section-container section-title-distance">
        <div class="text-center">
          <h1 class="heading-big mx-auto mb-5 max-w-[1490px] lg:mb-8">
            Способы оплаты
          </h1>
          <p class="mx-auto max-w-[650px] text-sm text-grey"></p>
        </div>
      </div>
      <div class="details section-container-inner">
        <div class="details__item" v-for="(item, index) in items" :key="index">
          <div class="details__item__left">
            <h3 class="heading-secondary">{{ item.title }}</h3>
          </div>
          <div class="details__item__right">
            <ul class="list-disc">
              <li
                v-for="(detail, index) in item.details"
                :key="'detail' + index"
              >
                {{ detail.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Оплата банковской картой на сайте",
        details: [
          {
            description:
              "К оплате принимаются платежные пластиковые карты систем VISA, MasterCard",
          },
          {
            description:
              "После того как вы сформируете заказ, вы сможете перейти на сайт платёжной системы для осуществления оплаты товара",
          },
          {
            description:
              "При доставке товар передается только после предъявления документов, удостоверяющих личность.",
          },
          {
            description:
              "К оплате принимаются платежные пластиковые карты систем VISA, MasterCard",
          },
        ],
      },
      {
        title: "Оплата наличными или картой в шоу-руме",
        details: [
          {
            description:
              "К оплате принимаются платежные пластиковые карты систем VISA, MasterCard",
          },
          {
            description:
              "После того как вы сформируете заказ, вы сможете перейти на сайт платёжной системы для осуществления оплаты товара",
          },
          {
            description:
              "При доставке товар передается только после предъявления документов, удостоверяющих личность.",
          },
          {
            description:
              "К оплате принимаются платежные пластиковые карты систем VISA, MasterCard",
          },
        ],
      },
      {
        title: "Безналичный расчёт для юридических лиц",
        details: [
          {
            description:
              "К оплате принимаются платежные пластиковые карты систем VISA, MasterCard",
          },
          {
            description:
              "После того как вы сформируете заказ, вы сможете перейти на сайт платёжной системы для осуществления оплаты товара",
          },
          {
            description:
              "При доставке товар передается только после предъявления документов, удостоверяющих личность.",
          },
          {
            description:
              "К оплате принимаются платежные пластиковые карты систем VISA, MasterCard",
          },
        ],
      },
    ],
  }),
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
