<template>
  <div>
    <footer class="section-container section-distance bg-dark py-24 lg:py-32">
      <ModalsSubmitModal />
      <div class="flex flex-col justify-between lg:flex-row">
        <div>
          <img
            class="w-[100px] 2xl:w-auto"
            src="~/assets/img/icons/logo-white.png"
            alt=""
          />
        </div>
        <div class="mt-5 grid grid-cols-1 gap-14 md:grid-cols-3 lg:mt-0">
          <ul class="footer-nav">
            <li class="">
              <p class="main-link">Компания</p>
              <ul class="list">
                <li>
                  <UILink link="/about" class="simple-link">О нас</UILink>
                </li>
                <li>
                  <UILink link="/services" class="simple-link">Услуги</UILink>
                </li>
                <li>
                  <UILink link="/projects" class="simple-link"
                    >Реализованные проекты</UILink
                  >
                </li>
                <li>
                  <UILink link="/brands" class="simple-link">Бренды</UILink>
                </li>
                <li>
                  <UILink link="/cooperation" class="simple-link"
                    >Сотрудничество</UILink
                  >
                </li>
                <li>
                  <UILink link="/contacts" class="simple-link">Контакты</UILink>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="footer-nav">
            <li class="">
              <p class="main-link">Клиентам</p>
              <ul class="list">
                <li>
                  <UILink
                    :link="$auth.$state.loggedIn ? '/cabinet' : '/login'"
                    class="simple-link"
                    >Личный кабинет</UILink
                  >
                </li>
                <li>
                  <UILink link="/page/payment" class="simple-link"
                    >Способы оплаты</UILink
                  >
                </li>
                <li>
                  <UILink link="/faq" class="simple-link"
                    >Ответы на частые вопросы</UILink
                  >
                </li>
                <li>
                  <UILink link="/page/delivery" class="simple-link"
                    >Варианты доставки</UILink
                  >
                </li>
                <li>
                  <UILink link="/page/return" class="simple-link"
                    >Возврат и обмен</UILink
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul v-if="settings != null" class="footer-nav">
            <li class="">
              <p class="main-link">Соц. сети</p>

              <ul class="list">
                <li>
                  <a
                    target="_blank"
                    :href="settings.facebook"
                    class="simple-link"
                    >Facebook</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    :href="settings.instagram"
                    class="simple-link"
                    >Instagram</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    :href="settings.youtube"
                    class="simple-link"
                    >YouTube</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mt-5 lg:mt-0">
          <div v-if="settings != null" class="grid grid-cols-2 gap-10">
            <ul class="footer-nav">
              <li>
                <UILink link="" class="main-link">Контакты</UILink>
                <ul class="list">
                  <li>
                    <a :href="'tel:' + settings.phone1" class="simple-link"
                      >{{ settings.phone1 }}
                    </a>
                  </li>
                  <li>
                    <a :href="'mailto:' + settings.email" class="simple-link">{{
                      settings.email
                    }}</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="footer-nav">
              <li>
                <UILink link="" class="main-link">График работы</UILink>
                <ul class="list">
                  <li class="simple-link">Пн-Пт с {{ settings.weekdays }}</li>
                  <li class="simple-link">Суббота с {{ settings.saturday }}</li>
                  <li class="simple-link">Воскресенье — выходной</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mt-7">
            <p class="mb-3 text-sm text-gray-400">
              Подпишитесь на рассылку новостей и акций
            </p>
            <div
              class="flex items-center justify-between overflow-hidden rounded-full bg-white py-px px-px"
            >
              <div class="w-full">
                <input
                  type="email"
                  class="w-full px-4 py-2 outline-none"
                  placeholder="ВВЕДИТЕ ПОЧТУ"
                  v-model="email"
                />
              </div>
              <UIButton
                :loader="loading"
                class="btn-secondary"
                @click="subscribe"
              >
                подписаться
              </UIButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div
      class="section-container flex flex-col justify-between space-y-3 border-t border-light bg-dark py-2 lg:flex-row lg:items-center lg:space-y-0"
    >
      <div class="flex flex-col lg:flex-row lg:items-center">
        <p class="mb-3 text-sm text-light lg:mb-0 lg:mr-5">
          Copyright © PoMo Design Center. All Rights Reserved
        </p>
        <UILink link="/page/offer" class="block text-sm text-light">
          Договор оферты
        </UILink>
      </div>
      <UILink link="/page/policy" class="text-sm text-light"
        >Политика конфиденциальности</UILink
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    loading: false,
    email: null,
  }),
  computed: {
    ...mapGetters({
      settings: "settings/settings",
    }),
  },
  methods: {
    async subscribe() {
      this.loading = true;
      try {
        const response = await this.$axios.post("home/subscribe", {
          email: this.email,
        });
        this.email = null;
        $nuxt.$emit("open-modal", "submit");
      } catch (e) {
        this.$toast.error(e.response.data.message);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
.footer-nav {
  li {
    .main-link {
      @apply inline-block text-sm text-gray-400;
    }
    ul {
      @apply mt-3 space-y-1;
      li {
      }
    }
  }
}
.simple-link {
  @apply text-sm text-white;
  &:hover {
    @apply underline;
  }
}
</style>
