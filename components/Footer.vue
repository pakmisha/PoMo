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
            <a href="" class="main-link">Компания</a>
            <ul class="list">
              <li>
                <a href="" class="simple-link">О нас</a>
              </li>
              <li>
                <a href="/services" class="simple-link">Услуги</a>
              </li>
              <li>
                <a href="" class="simple-link">Реализованные проекты</a>
              </li>
              <li>
                <a href="/brands" class="simple-link">Бренды</a>
              </li>
              <li>
                <a href="/cooperation" class="simple-link">Сотрудничество</a>
              </li>
              <li>
                <a href="/contacts" class="simple-link">Контакты</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="footer-nav">
          <li>
            <a href="" class="main-link">Клиентам</a>
            <ul class="list">
              <li>
                <a href="" class="simple-link">Личный кабинет</a>
              </li>
              <li>
                <a href="" class="simple-link">Способы оплаты</a>
              </li>
              <li>
                <a href="/faq" class="simple-link">Ответы на частые вопросы</a>
              </li>
              <li>
                <a href="" class="simple-link">Варианты доставки</a>
              </li>
              <li>
                <a href="" class="simple-link">Возврат и обмен</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="footer-nav">
          <li>
            <a href="" class="main-link">Соц. сети</a>
            <ul class="list">
              <li>
                <a href="" class="simple-link">Facebook </a>
              </li>
              <li>
                <a href="" class="simple-link">Instagram</a>
              </li>
              <li>
                <a href="" class="simple-link">YouTube</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="mt-5 lg:mt-0">
        <div class="grid grid-cols-2 gap-10">
          <ul class="footer-nav">
            <li>
              <a href="" class="main-link">Контакты</a>
              <ul class="list">
                <li>
                  <a href="tel:+7 (701) 655 45 55" class="simple-link"
                    >+7 (701) 655 45 55
                  </a>
                </li>
                <li>
                  <a href="mailto: pomosales@pomo.kz" class="simple-link"
                    >pomosales@pomo.kz</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <ul class="footer-nav">
            <li>
              <a href="" class="main-link">График работы</a>
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
