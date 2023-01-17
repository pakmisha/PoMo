<template>
  <footer class="section-container section-distance bg-dark py-24 lg:py-32">
    <div class="flex flex-col justify-between lg:flex-row">
      <div>
        <img
          class="w-[100px] 2xl:w-auto"
          src="~/assets/img/icons/logo-white.png"
          alt=""
        />
      </div>
      <div class="mt-5 grid grid-cols-1 gap-10 md:grid-cols-3 lg:mt-0">
        <ul class="footer-nav">
          <li>
            <UILink link="" class="main-link">Компания</UILink>
            <ul class="list">
              <li>
                <UILink link="" class="simple-link">О нас</UILink>
              </li>
              <li>
                <UILink link="/services" class="simple-link">Услуги</UILink>
              </li>
              <li>
                <UILink link="" class="simple-link"
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
          <li>
            <UILink link="" class="main-link">Клиентам</UILink>
            <ul class="list">
              <li>
                <UILink link="" class="simple-link">Личный кабинет</UILink>
              </li>
              <li>
                <UILink link="" class="simple-link">Способы оплаты</UILink>
              </li>
              <li>
                <UILink link="/faq" class="simple-link"
                  >Ответы на частые вопросы</UILink
                >
              </li>
              <li>
                <UILink link="" class="simple-link">Варианты доставки</UILink>
              </li>
              <li>
                <UILink link="" class="simple-link">Возврат и обмен</UILink>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="footer-nav">
          <li>
            <UILink link="" class="main-link">Соц. сети</UILink>
            <ul class="list">
              <li>
                <UILink link="" class="simple-link">Facebook </UILink>
              </li>
              <li>
                <UILink link="" class="simple-link">Instagram</UILink>
              </li>
              <li>
                <UILink link="" class="simple-link">YouTube</UILink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="mt-5 lg:mt-0">
        <div class="grid grid-cols-2 gap-10">
          <ul class="footer-nav">
            <li>
              <UILink link="" class="main-link">Контакты</UILink>
              <ul class="list">
                <li>
                  <UILink link="tel:+7 (701) 655 45 55" class="simple-link"
                    >+7 (701) 655 45 55
                  </UILink>
                </li>
                <li>
                  <UILink link="mailto: pomosales@pomo.kz" class="simple-link"
                    >pomosales@pomo.kz</UILink
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul class="footer-nav">
            <li>
              <UILink link="" class="main-link">График работы</UILink>
              <ul class="list">
                <li class="simple-link">Пн-Пт с 9.00 до 19.00</li>
                <li class="simple-link">Суббота с 10.00 до 18.00</li>
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
            <div>
              <input
                type="email"
                class="w-full px-4 py-2 outline-none"
                placeholder="ВВЕДИТЕ ПОЧТУ"
              />
            </div>
            <button
              class="btn-secondary"
              @click.prevent="$nuxt.$emit('open-modal', 'submit')"
            >
              подписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
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
