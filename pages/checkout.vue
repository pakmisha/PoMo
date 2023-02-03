<template>
  <section class="section-container">
    <div class="mt-10 flex flex-col justify-between lg:flex-row">
      <div class="w-full space-y-10 lg:w-1/2 lg:space-y-12">
        <div>
          <h2 class="heading-secondary mb-7">Контактная информация</h2>
          <div class="space-y-4">
            <div class="input-wrapper">
              <label for="">Электронная почта*</label>
              <input v-model="user.email" type="email" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Номер телефона*</label>
              <input v-model="user.phone" type="phone" class="input-primary" />
            </div>
          </div>
        </div>
        <div>
          <div
            class="mb-5 flex flex-col justify-between lg:flex-row lg:items-center"
          >
            <h2 class="heading-secondary">Адрес доставки</h2>
            <div class="flex items-center">
              <select
                name=""
                v-model="selected.name"
                id=""
                @change="onChange($event)"
                class="select-primary mr-3 text-center"
              >
                <option :value="null" selected disabled>Выберите адрес</option>
                <option
                  :value="address.id"
                  v-for="(address, index) in addresses"
                  :key="index"
                >
                  {{ address.name }}
                </option>
              </select>

              <UIButton class="btn-small" @click="active = true"
                >Новый адрес
              </UIButton>
            </div>
          </div>
          <div
            v-if="selectedAddress != null && !active"
            class="border border-dark px-5 py-5 lg:px-10 lg:py-10"
          >
            <div class="flex flex-col border-b border-dark py-4 lg:flex-row">
              <div
                class="mb-2 w-full text-sm font-semibold uppercase text-dark lg:mb-0 lg:w-2/5"
              >
                имя Фамилия
              </div>
              <div class="w-3/5 text-sm font-semibold text-dark">
                {{ $auth.$state.user.full_name }}
              </div>
            </div>
            <div class="flex flex-col border-b border-dark py-5 lg:flex-row">
              <div
                class="mb-2 w-full text-sm font-semibold uppercase text-dark lg:mb-0 lg:w-2/5"
              >
                Адрес
              </div>
              <div class="w-3/5 text-sm font-semibold text-dark">
                {{
                  selectedAddress.country +
                  ", " +
                  selectedAddress.city +
                  ", " +
                  selectedAddress.address
                }}
              </div>
            </div>
            <div class="mt-5 flex">
              <UIButton class="text-sm text-grey-light underline"
                >Редактировать адрес</UIButton
              >
            </div>
          </div>
          <div class="space-y-4" v-if="active">
            <div class="input-wrapper">
              <label>Страна*</label>
              <select name="" id="" class="select-secondary">
                <option value="" selected>Казахстан</option>
                <option value="">Россия</option>
                <option value="">Америка</option>
                <option value="">Китай</option>
              </select>
            </div>

            <div class="input-wrapper">
              <label for="">Фамилия Имя*</label>
              <input type="number" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Название компании</label>
              <input
                type="number"
                class="input-primary"
                placeholder="Укажите, если хотите оформить заказ на компанию"
              />
            </div>
            <div class="input-wrapper">
              <label for="">Город*</label>
              <input type="number" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Адрес*</label>
              <input
                type="number"
                class="input-primary"
                placeholder="Улица, номер дома, квартира"
              />
            </div>
            <div class="input-wrapper">
              <label for="">Комментарий к заказу</label>
              <textarea
                rows="5"
                cols="33"
                class="textarea"
                placeholder="Сообщите дополнительную информацию в случае необходимости"
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <p class="heading-secondary mb-7">Способ доставки</p>
          <div class="space-y-4">
            <div class="flex items-center">
              <input
                type="radio"
                name="radio-1"
                id="radio-1"
                class="radio-primary mr-3"
              />
              <label for="radio-1">
                <p class="mb-1 font-medium">
                  Доставка, подъем, и сборка товара по Алматы
                </p>
                <p class="text-xs text-grey">
                  Бесплатно при заказе от 500 000 ₸. При сумме заказа меньше 500
                  000 ₸ узнавайте стоимость доставки у менеджера
                </p>
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                name="radio-1"
                id="radio-2"
                class="radio-primary mr-3"
              />
              <label for="radio-2">
                <p class="mb-1 font-medium">
                  Самовывоз по адресу Алматы, Самал-1, дом 4
                </p>
                <p class="text-xs text-grey">
                  Время работы пункта самовывоза: с 9:00 до 20:00
                </p>
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                name="radio-1"
                id="radio-3"
                class="radio-primary mr-3"
              />
              <label for="radio-3">
                <p class="mb-1 font-medium">
                  Доставка в другие города Казахстана
                </p>
                <p class="text-xs text-grey">
                  Стоимость доставки уточняйте у менеджера
                </p>
              </label>
            </div>
          </div>
        </div>
        <div>
          <UIButton class="btn-secondary mb-7">оформить заказ</UIButton>
          <p class="max-w-[400px] text-sm text-grey">
            Нажимая кнопку «Оформить заказ», вы соглашаетесь с политикой
            конфиденциальности
          </p>
        </div>
      </div>
      <div class="mt-5 w-full lg:mt-0 lg:w-[45%] 2xl:w-2/5">
        <CheckoutProduct
          v-for="(item, index) in items"
          :key="index"
          :product="item.product"
        />
        <div class="mt-5 flex items-center justify-between lg:mt-10">
          <p class="text-sm font-medium uppercase text-dark">Всего:</p>
          <p class="text-xl font-semibold text-dark">2 600 500 ₸</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    active: false,
    selected: {
      name: null,
    },
    user: {
      email: null,
      phone: null,
    },
  }),
  created() {
    if (this.$auth.$state.loggedIn == true) {
      for (let i in this.user) {
        this.user[i] = this.$auth.$state.user[i];
      }
    }
    return { ...this.$auth.$state.user };
  },
  computed: {
    ...mapGetters({
      items: "cart/items",
      addresses: "addresses/addresses",
      selectedAddress: "checkout/address",
      selectedDelivery: "checkout/delivery",
    }),
  },
  methods: {
    onChange(event) {
      this.active = false;
      const id = event.target.value;
      const item = this.addresses.find((i) => i.id == id);
      this.$store.dispatch("checkout/address", item);
    },
  },
};
</script>

<style></style>
