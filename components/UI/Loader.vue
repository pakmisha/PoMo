<!-- <template>
  <div class="loader" :class="{ active: active }">
    <div class="loader__wrapper">
      <div
        class="loader__wrapper__text relative z-50 text-center"
        :class="{ text: text }"
      >
        <p class="mb-2 text-lg">Не про мебель</p>
        <h1 class="text-2xl uppercase lg:text-3xl 2xl:text-4xl">
          [А про чувства]
        </h1>
      </div>
      <div class="loader__wrapper__image" :class="{ scale: scale }">
        <div
          class="loader-image absolute left-20 z-20 hidden w-[300px] lg:top-20 lg:block 2xl:top-24 2xl:w-auto"
        >
          <svg
            class="box-border h-full w-full overflow-hidden"
            width="0"
            height="0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="mask-1">
                <path
                  fill="#FF0066"
                  transform="translate(100, 100)"
                  d="M62.9,-49C74.3,-35.7,71.6,-10,65.2,13.7C58.8,37.3,48.8,58.9,33.7,63.8C18.6,68.8,-1.6,57,-18.4,45.9C-35.2,34.8,-48.6,24.5,-52.2,11.2C-55.8,-2.1,-49.5,-18.3,-39.2,-31.3C-28.9,-44.4,-14.4,-54.2,5.6,-58.7C25.7,-63.2,51.4,-62.3,62.9,-49Z"
                />
              </clipPath>
            </defs>
          </svg>
          <img
            class="clipping-mask"
            src="~/assets/img/bg/bg-project.jpg"
            alt=""
          />
        </div>
        <div
          class="loader-image absolute left-44 bottom-10 z-10 w-[350px] lg:bottom-20 2xl:left-56 2xl:w-auto"
        >
          <img src="~/assets/preloader/preloader-2.png" alt="" />
        </div>
        <div
          class="loader-image absolute right-32 top-10 w-[350px] lg:top-14 2xl:w-auto"
        >
          <img src="~/assets/preloader/preloader-3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: true,
    scale: false,
    text: false,
  }),
  created() {
    setTimeout(() => {
      this.active = false;
    }, 3000);
    setTimeout(() => {
      this.scale = true;
    }, 1000);
    setTimeout(() => {
      this.text = true;
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.loader {
  @apply invisible fixed inset-0 z-[60] -translate-y-full transition-all duration-1000 ease-in-expo;
  .loader__wrapper {
    @apply relative flex h-full w-full items-center justify-center bg-white;
    &__image {
      .loader-image {
        @apply scale-0 transition-all duration-1000 ease-in-out;
      }
      &.scale {
        .loader-image {
          &:nth-child(1) {
            @apply scale-100 delay-100;
          }
          &:nth-child(2) {
            @apply scale-100 delay-300;
          }
          &:nth-child(3) {
            @apply scale-100 delay-500;
          }
        }
      }
    }
    &__text {
      @apply invisible translate-y-10 opacity-0 transition-all duration-500 ease-in-out;
      &.text {
        @apply visible translate-y-0 opacity-100;
      }
    }
  }
  &.active {
    @apply visible translate-y-0;
  }
  .clipping-mask {
    clip-path: url(#mask-1);
    -webkit-clip-path: url(#mask-1);
    @apply h-[300px] w-[300px] object-cover;
  }
}
</style> -->
