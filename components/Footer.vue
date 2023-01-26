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
      <div class="mt-5 grid grid-cols-1 gap-14 md:grid-cols-5 lg:mt-0">
        <ul class="footer-nav" v-for="(item, index) in items" :key="index">
          <li class="">
            <UIButton class="main-link">{{ item.title }}</UIButton>
            <ul class="list">
              <li v-for="(li, index) in item.links" :key="'link' + index">
                <UILink :link="li.link" class="simple-link">{{
                  li.title
                }}</UILink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- <div class="mt-5 lg:mt-0">
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
      </div> -->
    </div>
    <div class="mt-7 flex justify-end">
      <div>
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
  </footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Компания",
        links: [
          {
            title: "О нас",
            link: "",
          },
          {
            title: "Услуги",
            link: "",
          },
          {
            title: "Реализованные проекты",
            link: "",
          },
          {
            title: "Бренды",
            link: "",
          },
          {
            title: "Сотрудничество",
            link: "",
          },
          {
            title: "Контакты",
            link: "",
          },
        ],
      },
      {
        title: "Клиентам",
        links: [
          {
            title: "Личный кабинет",
            link: "",
          },
          {
            title: "Способы оплаты",
            link: "",
          },
          {
            title: "Ответы на частые вопросы",
            link: "",
          },
          {
            title: "Варианты доставки",
            link: "",
          },
          {
            title: "Возврат и обмен",
            link: "",
          },
        ],
      },
      {
        title: "Контакты",
        links: [
          {
            title: "+7 (701) 655 45 55",
            link: "",
          },
          {
            title: "pomosales@pomo.kz",
            link: "",
          },
        ],
      },
      {
        title: "График работы",
        links: [
          {
            title: "Пн-Пт с 9.00 до 19.00",
            link: "",
          },
          {
            title: "Суббота с 10.00 до 18.00",
            link: "",
          },
          {
            title: "Воскресенье — выходной",
            link: "",
          },
        ],
      },
      {
        title: "Соц. сети",
        links: [
          {
            title: "Facebook",
            link: "",
          },
          {
            title: "Instagram",
            link: "",
          },
          {
            title: "YouTube",
            link: "",
          },
        ],
      },
    ],
  }),
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
