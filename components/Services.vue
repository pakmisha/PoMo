<template>
  <section>
    <Tabs
      titles="Интерьер «под ключ»,Концепт проект,Комплектация мебелью и декором,декорирование интерьера,Поставка мебели на заказ,Примерка мебели"
      class="horizontal"
    >
      <div>
        <div class="services">
          <div class="services__left mb-10 lg:mb-0">
            <h2 class="heading-secondary mb-5">
              Создание интерьера «под ключ»
            </h2>
            <p class="plaintext mb-10 lg:mb-14 2xl:mb-20">
              Услуга включает в себя весь комплекс услуг от создания
              дизайн-проекта до полной комплектации мебелью и декором
            </p>
            <button
              class="btn-primary"
              @click.prevent="$nuxt.$emit('open-modal', 'request')"
            >
              Заказать услугу
            </button>
          </div>
          <div class="services__right">
            <div class="mb-14 lg:mb-24 2xl:mb-32">
              <p class="plaintext mb-5 uppercase">Вы получаете:</p>
              <div class="space-y-5">
                <div v-for="(item, index) in items" :key="index">
                  <p class="text-sm font-medium text-dark">
                    {{ index + 1 }}. {{ item.title }}
                  </p>
                  <p class="plaintext mt-2">
                    {{ item.subtitle }}
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              class="max-w-[600px] border border-grey-light px-5 py-7 lg:px-11 lg:py-12"
            >
              <p class="heading-secondary mb-6">
                Пакет услуг «Проект под ключ» включает:
              </p>
              <ul
                class="mb-10 list-disc space-y-3 pl-5 text-sm text-grey lg:mb-14 2xl:mb-16"
              >
                <li>Пакет «Концепт-проект»</li>
                <li>Полный альбом технических чертежей</li>
                <li>
                  Спецификации отделочных материалов, оборудования и уникальных
                  изделий
                </li>
                <li>
                  Строительно-монтажные работы: Закуп материалов и оборудования
                </li>
                <li>График выполнения и финансирования СМР</li>
                <li>Полный контроль над всеми этапами строительства</li>
                <li>Авторский надзор*</li>
              </ul>
              <div>
                <div class="mb-3 flex flex-col lg:flex-row lg:items-center">
                  <p
                    class="mb-2 text-sm font-medium uppercase text-dark lg:mb-0 lg:mr-5"
                  >
                    Стоимость услуги от:
                  </p>
                  <p class="heading-secondary">29 000 ₸ за 1 кв.</p>
                </div>
                <p class="text-xs text-grey">
                  *Авторский надзор — 20% от стоимости проекта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="services">
          <div class="services__left mb-10 lg:mb-0">
            <h2 class="heading-secondary mb-5">
              Создание интерьера «под ключ»
            </h2>
            <p class="plaintext mb-10 lg:mb-14 2xl:mb-20">
              Услуга включает в себя весь комплекс услуг от создания
              дизайн-проекта до полной комплектации мебелью и декором
            </p>
            <button class="btn-primary">Заказать услугу</button>
          </div>
          <div class="services__right">
            <div class="mb-14 lg:mb-24 2xl:mb-32">
              <p class="plaintext mb-5 uppercase">Вы получаете:</p>
              <div class="space-y-5">
                <div v-for="(item, index) in items" :key="index">
                  <p class="text-sm font-medium text-dark">
                    {{ index + 1 }}. {{ item.title }}
                  </p>
                  <p class="plaintext mt-2">
                    {{ item.subtitle }}
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              class="max-w-[600px] border border-grey-light px-5 py-7 lg:px-11 lg:py-12"
            >
              <p class="heading-secondary mb-6">
                Пакет услуг «Проект под ключ» включает:
              </p>
              <ul
                class="mb-10 list-disc space-y-3 pl-5 text-sm text-grey lg:mb-14 2xl:mb-16"
              >
                <li>Пакет «Концепт-проект»</li>
                <li>Полный альбом технических чертежей</li>
                <li>
                  Спецификации отделочных материалов, оборудования и уникальных
                  изделий
                </li>
                <li>
                  Строительно-монтажные работы: Закуп материалов и оборудования
                </li>
                <li>График выполнения и финансирования СМР</li>
                <li>Полный контроль над всеми этапами строительства</li>
                <li>Авторский надзор*</li>
              </ul>
              <div>
                <div class="mb-3 flex flex-col lg:flex-row lg:items-center">
                  <p
                    class="mb-2 text-sm font-medium uppercase text-dark lg:mb-0 lg:mr-5"
                  >
                    Стоимость услуги от:
                  </p>
                  <p class="heading-secondary">29 000 ₸ за 1 кв.</p>
                </div>
                <p class="text-xs text-grey">
                  *Авторский надзор — 20% от стоимости проекта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="services">
          <div class="services__left mb-10 lg:mb-0">
            <h2 class="heading-secondary mb-5">
              Создание интерьера «под ключ»
            </h2>
            <p class="plaintext mb-10 lg:mb-14 2xl:mb-20">
              Услуга включает в себя весь комплекс услуг от создания
              дизайн-проекта до полной комплектации мебелью и декором
            </p>
            <button class="btn-primary">Заказать услугу</button>
          </div>
          <div class="services__right">
            <div class="mb-14 lg:mb-24 2xl:mb-32">
              <p class="plaintext mb-5 uppercase">Вы получаете:</p>
              <div class="space-y-5">
                <div v-for="(item, index) in items" :key="index">
                  <p class="text-sm font-medium text-dark">
                    {{ index + 1 }}. {{ item.title }}
                  </p>
                  <p class="plaintext mt-2">
                    {{ item.subtitle }}
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              class="max-w-[600px] border border-grey-light px-5 py-7 lg:px-11 lg:py-12"
            >
              <p class="heading-secondary mb-6">
                Пакет услуг «Проект под ключ» включает:
              </p>
              <ul
                class="mb-10 list-disc space-y-3 pl-5 text-sm text-grey lg:mb-14 2xl:mb-16"
              >
                <li>Пакет «Концепт-проект»</li>
                <li>Полный альбом технических чертежей</li>
                <li>
                  Спецификации отделочных материалов, оборудования и уникальных
                  изделий
                </li>
                <li>
                  Строительно-монтажные работы: Закуп материалов и оборудования
                </li>
                <li>График выполнения и финансирования СМР</li>
                <li>Полный контроль над всеми этапами строительства</li>
                <li>Авторский надзор*</li>
              </ul>
              <div>
                <div class="mb-3 flex flex-col lg:flex-row lg:items-center">
                  <p
                    class="mb-2 text-sm font-medium uppercase text-dark lg:mb-0 lg:mr-5"
                  >
                    Стоимость услуги от:
                  </p>
                  <p class="heading-secondary">29 000 ₸ за 1 кв.</p>
                </div>
                <p class="text-xs text-grey">
                  *Авторский надзор — 20% от стоимости проекта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="services">
          <div class="services__left mb-10 lg:mb-0">
            <h2 class="heading-secondary mb-5">
              Создание интерьера «под ключ»
            </h2>
            <p class="plaintext mb-10 lg:mb-14 2xl:mb-20">
              Услуга включает в себя весь комплекс услуг от создания
              дизайн-проекта до полной комплектации мебелью и декором
            </p>
            <button class="btn-primary">Заказать услугу</button>
          </div>
          <div class="services__right">
            <div class="mb-14 lg:mb-24 2xl:mb-32">
              <p class="plaintext mb-5 uppercase">Вы получаете:</p>
              <div class="space-y-5">
                <div v-for="(item, index) in items" :key="index">
                  <p class="text-sm font-medium text-dark">
                    {{ index + 1 }}. {{ item.title }}
                  </p>
                  <p class="plaintext mt-2">
                    {{ item.subtitle }}
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              class="max-w-[600px] border border-grey-light px-5 py-7 lg:px-11 lg:py-12"
            >
              <p class="heading-secondary mb-6">
                Пакет услуг «Проект под ключ» включает:
              </p>
              <ul
                class="mb-10 list-disc space-y-3 pl-5 text-sm text-grey lg:mb-14 2xl:mb-16"
              >
                <li>Пакет «Концепт-проект»</li>
                <li>Полный альбом технических чертежей</li>
                <li>
                  Спецификации отделочных материалов, оборудования и уникальных
                  изделий
                </li>
                <li>
                  Строительно-монтажные работы: Закуп материалов и оборудования
                </li>
                <li>График выполнения и финансирования СМР</li>
                <li>Полный контроль над всеми этапами строительства</li>
                <li>Авторский надзор*</li>
              </ul>
              <div>
                <div class="mb-3 flex flex-col lg:flex-row lg:items-center">
                  <p
                    class="mb-2 text-sm font-medium uppercase text-dark lg:mb-0 lg:mr-5"
                  >
                    Стоимость услуги от:
                  </p>
                  <p class="heading-secondary">29 000 ₸ за 1 кв.</p>
                </div>
                <p class="text-xs text-grey">
                  *Авторский надзор — 20% от стоимости проекта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="services">
          <div class="services__left mb-10 lg:mb-0">
            <h2 class="heading-secondary mb-5">
              Создание интерьера «под ключ»
            </h2>
            <p class="plaintext mb-10 lg:mb-14 2xl:mb-20">
              Услуга включает в себя весь комплекс услуг от создания
              дизайн-проекта до полной комплектации мебелью и декором
            </p>
            <button class="btn-primary">Заказать услугу</button>
          </div>
          <div class="services__right">
            <div class="mb-14 lg:mb-24 2xl:mb-32">
              <p class="plaintext mb-5 uppercase">Вы получаете:</p>
              <div class="space-y-5">
                <div v-for="(item, index) in items" :key="index">
                  <p class="text-sm font-medium text-dark">
                    {{ index + 1 }}. {{ item.title }}
                  </p>
                  <p class="plaintext mt-2">
                    {{ item.subtitle }}
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              class="max-w-[600px] border border-grey-light px-5 py-7 lg:px-11 lg:py-12"
            >
              <p class="heading-secondary mb-6">
                Пакет услуг «Проект под ключ» включает:
              </p>
              <ul
                class="mb-10 list-disc space-y-3 pl-5 text-sm text-grey lg:mb-14 2xl:mb-16"
              >
                <li>Пакет «Концепт-проект»</li>
                <li>Полный альбом технических чертежей</li>
                <li>
                  Спецификации отделочных материалов, оборудования и уникальных
                  изделий
                </li>
                <li>
                  Строительно-монтажные работы: Закуп материалов и оборудования
                </li>
                <li>График выполнения и финансирования СМР</li>
                <li>Полный контроль над всеми этапами строительства</li>
                <li>Авторский надзор*</li>
              </ul>
              <div>
                <div class="mb-3 flex flex-col lg:flex-row lg:items-center">
                  <p
                    class="mb-2 text-sm font-medium uppercase text-dark lg:mb-0 lg:mr-5"
                  >
                    Стоимость услуги от:
                  </p>
                  <p class="heading-secondary">29 000 ₸ за 1 кв.</p>
                </div>
                <p class="text-xs text-grey">
                  *Авторский надзор — 20% от стоимости проекта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="services">
          <div class="services__left mb-10 lg:mb-0">
            <h2 class="heading-secondary mb-5">
              Создание интерьера «под ключ»
            </h2>
            <p class="plaintext mb-10 lg:mb-14 2xl:mb-20">
              Услуга включает в себя весь комплекс услуг от создания
              дизайн-проекта до полной комплектации мебелью и декором
            </p>
            <button class="btn-primary">Заказать услугу</button>
          </div>
          <div class="services__right">
            <div class="mb-14 lg:mb-24 2xl:mb-32">
              <p class="plaintext mb-5 uppercase">Вы получаете:</p>
              <div class="space-y-5">
                <div v-for="(item, index) in items" :key="index">
                  <p class="text-sm font-medium text-dark">
                    {{ index + 1 }}. {{ item.title }}
                  </p>
                  <p class="plaintext mt-2">
                    {{ item.subtitle }}
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              class="max-w-[600px] border border-grey-light px-5 py-7 2xl:px-11 2xl:py-12"
            >
              <p class="heading-secondary mb-6">
                Пакет услуг «Проект под ключ» включает:
              </p>
              <ul
                class="mb-10 list-disc space-y-3 pl-5 text-sm text-grey lg:mb-14 2xl:mb-16"
              >
                <li>Пакет «Концепт-проект»</li>
                <li>Полный альбом технических чертежей</li>
                <li>
                  Спецификации отделочных материалов, оборудования и уникальных
                  изделий
                </li>
                <li>
                  Строительно-монтажные работы: Закуп материалов и оборудования
                </li>
                <li>График выполнения и финансирования СМР</li>
                <li>Полный контроль над всеми этапами строительства</li>
                <li>Авторский надзор*</li>
              </ul>
              <div>
                <div class="mb-3 flex flex-col lg:flex-row lg:items-center">
                  <p
                    class="mb-2 text-sm font-medium uppercase text-dark lg:mb-0 lg:mr-5"
                  >
                    Стоимость услуги от:
                  </p>
                  <p class="heading-secondary">29 000 ₸ за 1 кв.</p>
                </div>
                <p class="text-xs text-grey">
                  *Авторский надзор — 20% от стоимости проекта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tabs>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title:
          " Полное сопровождение проекта со стадии создания дизайна и его реализации",
        subtitle:
          "Вам не нужно будет заниматься поиском ремонтных бригад, следить за поставками материалов, ездить по магазинам в поисках нужной мебели или светильников. ВЕСЬ комплекс работ мы сделаем за Вас в рамках одного договора с нашей компанией.",
      },
      {
        title: "Ответственность за конечный результат",
        subtitle:
          "Дизайнер включил в проект мебель, которую не известно в каких магазинах искать либо ее качество не устраивает. Ремонт закончен, а при расстановке мебели выяснилось, что розетки нужно сместить на полметра. И таких мелких и более серьезных ошибок, с которыми есть риск столкнуться при самостоятельном ведении проекта, встречается немало. При создании интерьеров «под ключ» мы полностью контролируем все этапы и отвечаем за конечный результат: профессиональный клининг полностью подготовит помещение к заезду, выбранная мебель будет доставлена точно в срок, а все розетки и выключатели на своих местах.",
      },
      {
        title: "Экономию времени и средств",
        subtitle:
          "Смету на ремонтные работы, материалы и мебель мы предоставим в открытом виде, где вы сможете сразу увидеть закупочные цены. Так как мы работаем с поставщиками по партнерским договорам, экономия на закупе обычно составляет до 20% от стандартных розничных цен. Со многими международными брендами мы работаем по эксклюзивным договорам, являясь их дистрибьюторами в РК, и организуем поставки напрямую с заводов, благодаря чему мы можем предложить Вам выгодные цены и хорошие условия поставки. А Ваше драгоценное время, вместо поездок по строительным магазинам и бесконечного поиска бригад, вы сможете использовать на более важные и приятные дела.",
      },
      {
        title: "Гарантии",
        subtitle:
          "Все образцы материалов, мебели, освещения и декора, используемые в работе представлены в нашем шоу-руме, где Вы заранее, задолго до подписания договора, можете увидеть качество и стиль. Мы гарантируем выполнение своих обязательств по договору точно в срок; на все товары и материалы, используемые в проекте, имеются сертификаты качества и безопасности; мы осуществляем страхование возврата авансовых платежей. Таким образом Вы минимизируете все риски, связанные с качеством и сроками завершения проекта.",
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
