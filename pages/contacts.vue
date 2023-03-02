<template>
  <div v-if="settings != null">
    <UIPath :path="path" />
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
          class="mx-auto grid max-w-[1700px] grid-cols-1 divide-y divide-grey-light lg:grid-cols-4 lg:divide-y-0 lg:divide-x 2xl:px-20"
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
                  {{ settings.address[$i18n.locale] }}
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
                  :href="'tel:' + settings.phone1"
                  class="block text-sm text-dark"
                  >{{ settings.phone1 }}</a
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
                  :href="'mailto:' + settings.email"
                  class="block text-sm text-dark"
                >
                  {{ settings.email }}
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
                  <p>{{ settings.weekdays }} по будням</p>
                  <p>{{ settings.saturday }} по субботам</p>
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
            :src="settings.map"
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
import { mapGetters } from "vuex";
export default {
  data: () => ({
    path: [
      {
        name: "контакты",
        link: "/contacts",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      settings: "settings/settings",
    }),
  },
};
</script>

<style lang="scss">
.benefit {
  @apply py-7 lg:py-0 lg:px-10 2xl:px-20;
}
</style>
