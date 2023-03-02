<template>
  <div>
    <UIPath :path="path" />
    <section class="section-container mt-10">
      <div v-if="success">
        <div class="mx-auto w-full max-w-[1490px]">
          <div class="flex flex-col items-center">
            <h1 class="heading-primary mb-10 text-center">
              Спасибо! Ваш заказ оформлен
            </h1>
            <p class="mb-10 text-center text-sm text-grey">
              Оплата наличными или картой в офисе компании. После оплаты с вами
              свяжется сотрудник сервисной службы и сообщит дату и время
              доставки.
              <br />
              <br />
              Мы пришлем вам всю необходимую информацию по заказу на электронную
              почту.
            </p>
            <div class="flex">
              <UILink link="/catalog" class="btn-secondary"
                >Продолжить покупки</UILink
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          class="flex flex-col justify-between lg:flex-row"
          v-if="items.length > 0"
        >
          <div class="w-full space-y-10 lg:w-1/2 lg:space-y-12">
            <div>
              <h2 class="heading-secondary mb-7">Контактная информация</h2>
              <div class="space-y-4">
                <div class="input-wrapper">
                  <label for="">Электронная почта*</label>
                  <input
                    v-model="user.email"
                    type="email"
                    class="input-primary"
                  />
                  <div
                    class="text-error"
                    v-if="errors && errors.hasOwnProperty('email')"
                  >
                    {{ errors.email[0] }}
                  </div>
                </div>
                <div class="input-wrapper">
                  <label for="">Номер телефона*</label>
                  <input
                    v-model="user.phone"
                    type="phone"
                    class="input-primary"
                  />
                  <div
                    class="text-error"
                    v-if="errors && errors.hasOwnProperty('phone')"
                  >
                    {{ errors.phone[0] }}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                class="mb-5 flex flex-col justify-between lg:flex-row lg:items-center"
              >
                <h2 class="heading-secondary">Адрес доставки</h2>
                <div class="flex items-center">
                  <div class="select-primary mr-3">
                    <select
                      v-if="selAddress"
                      name=""
                      v-model="selAddress"
                      id=""
                      @change="changeAddress($event)"
                      class="text-center"
                    >
                      <option
                        :value="address.id"
                        v-for="(address, index) in addresses"
                        :key="index"
                      >
                        {{ address.name }}
                      </option>
                    </select>
                  </div>

                  <UIButton class="btn-small" @click="active = true"
                    >Новый адрес
                  </UIButton>
                </div>
              </div>
              <div
                class="text-error"
                v-if="errors && errors.hasOwnProperty('email')"
              >
                {{ errors.email[0] }}
              </div>
              <div
                v-if="
                  selectedAddress != null &&
                  !active &&
                  $auth.$state.loggedIn == true
                "
                class="border border-dark px-5 py-5 lg:px-10 lg:py-10"
              >
                <div
                  class="flex flex-col border-b border-dark py-4 lg:flex-row"
                >
                  <div
                    class="mb-2 w-full text-sm font-semibold uppercase text-dark lg:mb-0 lg:w-2/5"
                  >
                    имя Фамилия
                  </div>
                  <div class="w-3/5 text-sm font-semibold text-dark">
                    {{ user.full_name }}
                  </div>
                </div>
                <div
                  class="flex flex-col border-b border-dark py-5 lg:flex-row"
                >
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
                  <UILink
                    link="/cabinet"
                    class="text-sm text-grey-light underline"
                    >Редактировать адрес</UILink
                  >
                </div>
              </div>
              <div
                class="space-y-4"
                v-if="active || $auth.$state.loggedIn == false"
              >
                <div class="input-wrapper">
                  <label for="">Название адреса</label>
                  <input
                    v-model="address_info.name"
                    type="text"
                    class="input-primary"
                  />
                </div>
                <div class="input-wrapper">
                  <label>Страна*</label>
                  <div class="select-secondary">
                    <select v-model="address_info.country" name="" id="">
                      <option :value="null" selected disabled>
                        Выберите страну
                      </option>
                      <option
                        :value="item.name"
                        v-for="(item, index) in countries"
                        :key="index"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="input-wrapper">
                  <label for="">Фамилия Имя*</label>
                  <input
                    v-model="address_info.full_name"
                    type="text"
                    class="input-primary"
                  />
                </div>
                <div class="input-wrapper">
                  <label for="">Название компании</label>
                  <input
                    type="text"
                    class="input-primary"
                    placeholder="Укажите, если хотите оформить заказ на компанию"
                    v-model="address_info.company"
                  />
                </div>
                <div class="input-wrapper">
                  <label for="">Город*</label>
                  <input
                    type="text"
                    class="input-primary"
                    v-model="address_info.city"
                  />
                </div>
                <div class="input-wrapper">
                  <label for="">Адрес*</label>
                  <input
                    type="text"
                    class="input-primary"
                    v-model="address_info.address"
                    placeholder="Улица, номер дома, квартира"
                  />
                </div>
                <div class="input-wrapper">
                  <label for="">Почтовый идекс</label>
                  <input
                    type="text"
                    class="input-primary"
                    v-model="address_info.post_id"
                    placeholder="Улица, номер дома, квартира"
                  />
                </div>
                <div class="input-wrapper">
                  <label for="">Комментарий к заказу</label>
                  <textarea
                    rows="5"
                    cols="33"
                    class="textarea"
                    v-model="address_info.comment"
                    placeholder="Сообщите дополнительную информацию в случае необходимости"
                  ></textarea>
                </div>
                <UIButton
                  v-if="$auth.$state.loggedIn"
                  class="btn-secondary"
                  @click="addAddress"
                  >Добавить новый адрес</UIButton
                >
              </div>
            </div>
            <div>
              <p class="heading-secondary mb-7">Способ доставки</p>
              <div class="space-y-4">
                <div class="text-error" v-if="delivery_error">
                  {{ $t("delivery_error") }}
                </div>
                <div
                  class="flex items-center"
                  v-for="(item, index) in delivery"
                  :key="index"
                >
                  <input
                    type="radio"
                    name="radio-delivery"
                    @change="changeDelivery($event)"
                    :value="item.id"
                    :id="'delivery-' + item.id"
                    class="radio-primary mr-3"
                  />
                  <label class="w-[90%]" :for="'delivery-' + item.id">
                    <p class="mb-1 font-medium">
                      {{ item.method[$i18n.locale] }}
                    </p>
                    <p class="text-xs text-grey">
                      {{ item.description[$i18n.locale] }}
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p class="heading-secondary mb-7">Способ оплаты</p>
              <div class="space-y-4">
                <div class="text-error" v-if="payment_error">
                  {{ $t("payment_error") }}
                </div>
                <div
                  class="flex items-center"
                  v-for="(item, index) in payment"
                  :key="index"
                >
                  <input
                    type="radio"
                    name="payment"
                    @change="changePayment($event)"
                    :value="item.id"
                    :id="'payment-' + item.id"
                    class="radio-primary mr-3"
                  />
                  <label class="w-[90%]" :for="'payment-' + item.id">
                    <p class="mb-1 font-medium">
                      {{ item.method[$i18n.locale] }}
                    </p>
                    <p class="text-xs text-grey">
                      {{ item.description[$i18n.locale] }}
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <UIButton
                class="btn-secondary mb-7"
                :loader="loading"
                @click="sendOrder"
                >оформить заказ</UIButton
              >
              <p class="max-w-[400px] text-sm text-grey">
                Нажимая кнопку «Оформить заказ», вы соглашаетесь с политикой
                конфиденциальности
              </p>
            </div>
          </div>
          <div class="mt-5 w-full lg:mt-0 lg:w-[45%] 2xl:w-2/5">
            <CartProduct
              v-for="(item, index) in items"
              :key="index"
              :item="item"
            />
            <div class="mt-5 flex items-center justify-between lg:mt-10">
              <p class="text-sm font-medium uppercase text-dark">Всего:</p>
              <p class="text-xl font-semibold text-dark">
                {{ $store.getters["cart/total"] | formatPrice }} ₸
              </p>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="section-container">
            <h1
              class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
            >
              Ваша корзина пуста
            </h1>
            <div class="flex items-center justify-center">
              <UILink link="/catalog" class="btn-secondary"
                >Перейти в каталог</UILink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import formatPrice from "~/filters/formatPrice";
export default {
  filters: {
    formatPrice,
  },
  data: () => ({
    path: [
      {
        name: "оформление заказа",
        link: "/checkout",
      },
    ],
    errors: null,
    success: false,
    active: false,
    loading: false,
    delivery_id: null,
    delivery_error: false,
    payment_id: null,
    payment_error: false,
    selAddress: null,
    user: {
      email: null,
      phone: null,
      full_name: null,
    },
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
    address_info: {
      name: "Новый адрес",
      full_name: null,
      country: null,
      city: null,
      company: null,
      address: null,
      comment: null,
      post_id: null,
    },
  }),
  watch: {
    addresses(addresses) {
      const isDef = addresses.find((i) => i.is_default);
      // this.selAddress = isDef;
      // const item = { isDef };
      if (addresses) {
        this.selAddress = isDef?.id ?? addresses[0]["id"];
        // this.$store.dispatch("checkout/address", item);
      }
    },
    deep: true,
  },
  created() {
    this.$store.dispatch("addresses/get");
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
      settings: "settings/settings",
      selectedAddress: "checkout/address",
      selectedDelivery: "checkout/delivery",
      delivery: "settings/delivery",
      payment: "settings/payment",
    }),
  },
  methods: {
    async addAddress() {
      const item = {
        name: this.address_info.name,
        full_name: this.address_info.full_name,
        country: this.address_info.country,
        city: this.address_info.city,
        address: this.address_info.address,
        company: this.address_info.company,
        post_id: this.address_info.post_id,
        is_default: true,
      };
      this.$store.dispatch("addresses/add", item);
      this.$store.dispatch("addresses/get");
      this.$store.dispatch("checkout/address", item);
      this.active = false;
    },
    changeDelivery(event) {
      const id = event.target.value;
      this.delivery_id = id;
      this.$store.dispatch("checkout/delivery", id);
    },
    changePayment(event) {
      const id = event.target.value;
      this.payment_id = id;
      this.$store.dispatch("checkout/payment", id);
    },
    changeAddress(event) {
      this.active = false;
      const id = event.target.value;
      const item = this.addresses.find((i) => i.id == id);
      this.$store.dispatch("checkout/address", { item });
    },
    async sendOrder() {
      this.errors = null;
      this.loading = true;
      this.delivery_error = false;
      this.payment_error = false;
      if (this.delivery_id == null) {
        this.delivery_error = true;
      }
      if (this.payment_id == null) {
        this.payment_error = true;
      }
      if (this.delivery_error == null || this.payment_error == null) return;
      try {
        const response = await this.$axios.post("orders", {
          fullname:
            this.address_info.full_name == null
              ? this.user.full_name
              : this.address_info.full_name,
          phone: this.user.phone,
          email: this.user.email,
          country:
            this.address_info.country == null
              ? this.$store.getters["checkout/address"]["country"]
              : this.address_info.country,
          city:
            this.address_info.city == null
              ? this.$store.getters["checkout/address"]["city"]
              : this.address_info.city,
          company:
            this.address_info.company == null
              ? this.$store.getters["checkout/address"]["company"] ??
                this.address_info.company
              : null,
          address:
            this.address_info.address == null
              ? this.$store.getters["checkout/address"]["address"]
              : this.address_info.address,
          comment: this.address_info.comment,
          delivery_id: this.$store.getters["checkout/delivery"],
          payment_id: this.$store.getters["checkout/payment"],
        });
        this.$toast.success(response.data.message);
        this.success = true;
        this.$store.dispatch("cart/get");
      } catch (e) {
        this.handleValidationErrors(e);
      } finally {
        this.loading = false;
      }
    },
    handleValidationErrors(e) {
      if (e.response.status == 422) {
        this.errors = e.response.data.errors;
        this.$toast.error("Ошибка валидации данных!");
      } else {
        this.$toast.error(e.response.data.message);
      }
    },
  },
};
</script>

<style></style>
