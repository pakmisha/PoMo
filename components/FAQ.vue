<template>
  <div class="section-container-inner">
    <div class="space-y-10 lg:space-y-20">
      <div class="faq" v-for="(item, index) in faqs" :key="index">
        <div class="faq__title heading-secondary mb-4 lg:mb-0">
          {{ item.title[$i18n.locale] }}
        </div>
        <div class="faq__questions">
          <div
            class="faq__questions__item"
            v-for="(question, index) in item.questions"
            :key="'question-' + index"
            :class="{
              active: activeIndex === index,
            }"
          >
            <button
              class="faq-toggle"
              @click.prevent="
                activeIndex == index
                  ? (activeIndex = null)
                  : (activeIndex = index)
              "
            >
              <div class="w-[90%] text-left text-sm uppercase text-dark">
                {{ question.question[$i18n.locale] }}
              </div>
              <div class="faq-toggle-icon">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.800781 0.900391L5.00078 5.10039L9.20078 0.900391"
                    stroke="#101820"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
            <div class="faq-details plaintext">
              {{ question.answer[$i18n.locale] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    faqs: [],
    activeIndex: null,
  }),
  created() {
    this.questions();
  },
  methods: {
    async questions() {
      try {
        const response = await this.$axios.get("questions");
        this.faqs = response.data.data.titles;
      } catch (e) {
        console.log("ERROR GETTING QUESTIONS");
      }
    },
  },
};
</script>

<style lang="scss">
.faq {
  @apply flex flex-col justify-between border-grey pt-5 lg:flex-row lg:border-t;
  &__title {
  }
  &__questions {
    @apply w-full lg:w-1/2;
    &__item {
      @apply border-b border-grey-light;
      .faq-toggle {
        @apply flex w-full items-center justify-between py-5;
        &-icon {
          @apply rotate-0 transition-all duration-500 ease-in-out;
        }
      }
      .faq-details {
        @apply h-0 overflow-hidden transition-all duration-500 ease-in-out;
      }
      &.active {
        .faq-toggle-icon {
          @apply rotate-180;
        }
        .faq-details {
          @apply h-auto overflow-auto pb-5;
        }
      }
    }
  }
}
</style>
