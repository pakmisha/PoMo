<template>
  <div>
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        контакты
      </h1>
    </div>
    <section>
      <div class="section-container">
        <div
          class="grid grid-cols-1 divide-y divide-grey-light lg:grid-cols-4 lg:divide-y-0 lg:divide-x 2xl:px-20"
        >
          <div class="benefit">
            <div class="flex items-start">
              <div class="mr-3 w-5">
                <img
                  src="~/assets/img/icons/geo.png"
                  class="h-full w-full object-contain"
                  alt=""
                />
              </div>
              <div class="w-[80%]">
                <div class="mb-2 text-sm text-grey-light lg:mb-5">Адрес</div>
                <div class="text-sm text-dark">
                  Самал-1, дом 4 по пр.Достык, ниже ул. Жолдасбекова
                </div>
              </div>
            </div>
          </div>
          <div class="benefit">
            <div class="flex items-start">
              <div class="mr-3 w-5">
                <img
                  src="~/assets/img/icons/phone.png"
                  class="h-full w-full object-contain"
                  alt=""
                />
              </div>
              <div class="w-[80%]">
                <div class="mb-2 text-sm text-grey-light lg:mb-5">
                  Номер телефона
                </div>
                <a
                  href="tel: +7 (701) 655 45 55"
                  class="block text-sm text-dark"
                  >+7 (701) 655 45 55</a
                >
              </div>
            </div>
          </div>
          <div class="benefit">
            <div class="flex items-start">
              <div class="mr-3 w-5">
                <img
                  src="~/assets/img/icons/mail.png"
                  class="h-full w-full object-contain"
                  alt=""
                />
              </div>
              <div class="w-[80%]">
                <div class="mb-2 text-sm text-grey-light lg:mb-5">
                  Электронная почта
                </div>
                <a
                  href="mailto: pomosales@pomo.kz"
                  class="block text-sm text-dark"
                >
                  pomosales@pomo.kz
                </a>
              </div>
            </div>
          </div>
          <div class="benefit">
            <div class="flex items-start">
              <div class="mr-3 w-5">
                <img
                  src="~/assets/img/icons/clock.png"
                  class="h-full w-full object-contain"
                  alt=""
                />
              </div>
              <div class="w-[80%]">
                <div class="mb-2 text-sm text-grey-light lg:mb-5">
                  График работы
                </div>
                <div class="text-sm text-dark">
                  <p>10:00 - 19:00 по будням</p>
                  <p>10:00 - 18:00 по субботам</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-container mt-10 lg:mt-20">
        <div class="h-[450px] w-full lg:h-[800px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.744107458813!2d76.9549280514913!3d43.235824487233735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f224751b7b7%3A0x53f6efe78311e19e!2sPoMo%20Design%20Center!5e0!3m2!1sru!2skz!4v1673853894378!5m2!1sru!2skz"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.benefit {
  @apply py-7 lg:py-0 lg:px-10 2xl:px-20;
}
</style>
