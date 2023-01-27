<template>
  <div class="relative h-full w-full overflow-auto lg:overflow-visible">
    <div
      class="relative inline-block h-full w-[1000px] overflow-y-hidden lg:w-full lg:overflow-y-visible"
    >
      <img
        src="~/assets/img/bg/picture-details.jpg"
        class="object-center"
        alt=""
      />
      <div class="absolute left-0 top-0 right-0 bottom-0">
        <div
          class="absolute"
          v-for="(item, index) in items"
          :key="index"
          :class="item.position"
        >
          <div class="mark">
            <div class="mark-center"></div>
            <div class="dialog">
              <div class="dialog-wrapper">
                <p
                  class="mb-2 text-xs font-medium uppercase lg:mb-3 lg:text-sm"
                >
                  {{ item.name }}
                </p>
                <p class="mb-3 font-light lg:mb-4">
                  {{ item.cost }}
                </p>
                <a href="" class="btn-primary">Смотреть товар</a>
                <div class="arrow">
                  <img src="~/assets/img/icons/arrow-black.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute left-1/2 bottom-7 -translate-x-1/2">
        <a href="" class="btn-primary">Приобрести комплект</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        position: "top-[17%] left-[47.5%]",
        name: "Напольный светильник ILUMI ARC KD FL–14017 WH",
        cost: "160 200 ₸",
      },
      {
        position: "top-[33%] left-[33%]",
        name: "Напольный светильник ILUMI ARC KD FL–14017 WH",
        cost: "160 200 ₸",
      },
      {
        position: "top-[68%] left-[68%]",
        name: "Напольный светильник ILUMI ARC KD FL–14017 WH",
        cost: "160 200 ₸",
      },
      {
        position: "top-[29%] left-[12%]",
        name: "Напольный светильник ILUMI ARC KD FL–14017 WH",
        cost: "160 200 ₸",
      },

      {
        position: "top-[65%] left-[12%]",
        name: "Напольный светильник ILUMI ARC KD FL–14017 WH",
        cost: "160 200 ₸",
      },
      {
        position: "top-[55%] left-[33%]",
        name: "Напольный светильник ILUMI ARC KD FL–14017 WH",
        cost: "160 200 ₸",
      },
      {
        position: "top-[65%] left-[49%]",
        name: "Напольный светильник ILUMI ARC KD FL–14017 WH",
        cost: "160 200 ₸",
      },
      {
        position: "top-[87%] left-[33%] dialog-mobile",
        name: "Напольный светильник ILUMI ARC KD FL–14017 WH",
        cost: "160 200 ₸",
      },
    ],
  }),
};
</script>

<style lang="scss">
.mark {
  @apply relative flex h-5 w-5 items-center justify-center rounded-full border border-black bg-white lg:h-7 lg:w-7;
  &-center {
    @apply h-3 w-3 rounded-full bg-black transition-all duration-300 ease-out-expo lg:h-5 lg:w-5;
  }

  &:hover {
    .mark-center {
      @apply h-4 w-4 lg:h-6 lg:w-6;
    }
    .dialog {
      @apply visible translate-x-0 scale-100 opacity-100;
    }
  }
  .dialog {
    @apply invisible absolute left-full -top-5 z-20 ml-6  min-w-[200px] translate-x-10 scale-95 opacity-0 transition-all duration-300 ease-in-out lg:min-w-[300px];
    &-wrapper {
      @apply relative border border-black bg-white px-5 py-5 shadow-sm lg:px-7 lg:py-7 2xl:px-9 2xl:py-9;

      .arrow {
        @apply absolute -left-5 top-[9%];
        img {
          @apply w-5;
        }
      }
    }
  }
}
.dialog-mobile {
  .mark {
    &:hover {
      .mark-center {
        @apply h-4 w-4 lg:h-6 lg:w-6;
      }
      .dialog {
        @apply visible translate-x-0 scale-100 opacity-100;
      }
    }
    .dialog {
      @apply invisible absolute left-full -bottom-4 top-auto z-20 ml-6 min-w-[200px] translate-x-10  scale-95 opacity-0 transition-all duration-300 ease-in-out lg:bottom-auto lg:-top-5 lg:min-w-[300px];
      &-wrapper {
        .arrow {
          @apply absolute -left-5 bottom-[7%] top-auto lg:bottom-auto lg:top-[9%];
          img {
            @apply w-5;
          }
        }
      }
    }
  }
}
</style>
