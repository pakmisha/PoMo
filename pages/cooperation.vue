<template>
  <div>
    <ModalsRequestModal />
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        сотрудничество
      </h1>
    </div>
    <section>
      <div class="section-container">
        <div
          class="flex flex-col justify-between border-t border-dark pt-9 lg:flex-row"
        >
          <div class="mb-5 w-full lg:mb-0 lg:w-2/5">
            <h2 class="heading-secondary mb-10">
              Мы приглашаем к сотрудничеству дизайн-студии, дизайнеров интерьера
              и архитекторов
            </h2>
            <button
              class="btn-primary"
              @click.prevent="$nuxt.$emit('open-modal', 'request')"
            >
              Оставить заявку
            </button>
          </div>
          <div class="plaintext w-full lg:w-2/5">
            Мы даём эксклюзивные скидки, потому что мы уважаем и с большим
            теплом принимаем энергичных, талантливых творческих людей, чтобы
            воплощать их проекты совместными усилиями, потому что считаем, что в
            команде у нас может получиться намного больше и лучше, чем
            поодиночке.
            <br />
            <br />
            Поэтому наше постоянное плодотворное сотрудничество с дизайнерами
            интерьеров и архитекторами расширяет возможности обеих сторон. Если
            вам необходимо быстро решить вопрос комплектации интерьеров, то в
            нашем шоу-руме всегда широкий ассортимент мебели, света, предметов
            декора для гостиных, спален, кабинетов, столовых, а также для офисов
            и других общественных пространств. У нас вы сможете решить проблему
            индивидуального дизайна и легко найти нужное решение даже для самых
            сложных или нестандартных задач.
            <br />
            <br />

            В ходе постоянного сотрудничества, мы готовы рекомендовать вас нашим
            клиентам как надежных партнеров и квалифицированных специалистов.
            Также мы с удовольствием разместим на нашем сайте ваши проекты с
            указанием вашего имени, выполненные с использованием заказанной у
            нас мебели.
          </div>
        </div>
      </div>
    </section>
    <div class="section-distance relative">
      <div class="h-[450px] lg:h-auto">
        <img
          src="~/assets/img/bg/banner-cooperation.jpg"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div class="page-icon p -top-10 right-5 lg:-top-20">
        <img src="~/assets/img/icons/p.svg" alt="" />
      </div>
    </div>

    <Benefits />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
