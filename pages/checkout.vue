<template>
  <section class="section-container">
    <div class="mt-10 flex flex-col justify-between lg:flex-row">
      <div class="w-full space-y-10 lg:w-1/2 lg:space-y-12">
        <div>
          <h2 class="heading-secondary mb-7">Контактная информация</h2>
          <div class="space-y-4">
            <div class="input-wrapper">
              <label for="">Электронная почта*</label>
              <input type="email" class="input-primary" />
            </div>
            <div class="input-wrapper">
              <label for="">Номер телефона*</label>
              <input type="number" class="input-primary" />
            </div>
          </div>
        </div>
        <div>
          <h2 class="heading-secondary mb-7">Адрес доставки</h2>
          <div class="space-y-4">
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
        <CheckoutProduct />
        <CheckoutProduct />
        <div class="mt-5 flex items-center justify-between lg:mt-10">
          <p class="text-sm font-medium uppercase text-dark">Всего:</p>
          <p class="text-xl font-semibold text-dark">2 600 500 ₸</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckoutProduct from "../components/CheckoutProduct.vue";

export default { components: { CheckoutProduct } };
</script>

<style></style>
