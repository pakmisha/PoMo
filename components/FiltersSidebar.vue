<template>
  <div>
    <h3 class="border-b border-grey-light pb-3 text-sm uppercase text-grey">
      ВСЕ
    </h3>
    <div class="space-y-12">
      <div>
        <div
          class="filter"
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: item.active }"
        >
          <button
            class="filter-toggle"
            @click.prevent="item.active = !item.active"
          >
            <p>{{ item.title }}</p>
            <div class="filter-toggle-icon">
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
          <div class="filter-details">
            <ul>
              <li
                v-for="(filter, index) in item.filters"
                :key="'filter-' + index"
              >
                <UILink link="" class="text-sm text-grey">
                  {{ filter.title }}
                </UILink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mb-5 text-sm font-medium uppercase text-dark">Наличие</h3>
        <div class="space-y-2">
          <div class="flex items-center">
            <input type="checkbox" id="check-1" class="input-checkbox mr-2" />
            <label class="text-sm text-dark" for="check-1">В наличии</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="check-2" class="input-checkbox mr-2" />
            <label class="text-sm text-dark" for="check-2">На заказ</label>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mb-5 text-sm font-medium uppercase text-dark">Цена</h3>
        <div class="w-full">
          <div class="range-slider">
            <div class="relative pt-7">
              <input
                type="range"
                class="input-range"
                min="0"
                max="1000"
                step="1"
                v-model="sliderMin"
              />

              <input
                type="range"
                class="input-range"
                min="0"
                max="1000"
                step="1"
                v-model="sliderMax"
              />
            </div>
            <div class="flex">
              <div class="mr-3 w-1/2">
                <input
                  type="number"
                  class="input-range-number"
                  min="0"
                  max="1000"
                  step="1"
                  v-model="sliderMin"
                />
              </div>

              <div class="w-1/2">
                <input
                  type="number"
                  class="input-range-number"
                  min="0"
                  max="1000"
                  step="1"
                  v-model="sliderMax"
                />
              </div>
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
    minAngle: 0,
    maxAngle: 1000,
    items: [
      {
        active: false,
        title: "Диваны",
        filters: [
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
        ],
      },
      {
        active: false,
        title: "Столы",
        filters: [
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
        ],
      },
      {
        active: false,
        title: "Мебель для хранения",
        filters: [
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
        ],
      },
      {
        active: false,
        title: "Столики",
        filters: [
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
        ],
      },
      {
        active: false,
        title: "Стулья",
        filters: [
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
          {
            title: "Комоды",
          },
        ],
      },
    ],
  }),
  computed: {
    sliderMin: {
      get: function () {
        var val = parseInt(this.minAngle);
        return val;
      },
      set: function (val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
      },
    },
    sliderMax: {
      get: function () {
        var val = parseInt(this.maxAngle);
        return val;
      },
      set: function (val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  @apply border-b border-grey-light px-2;

  &-toggle {
    @apply flex w-full items-center justify-between py-3 text-sm font-medium uppercase text-dark;
    &-icon {
      @apply rotate-0 transition-all duration-300 ease-in-out;
    }
  }
  &-details {
    @apply invisible h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out;
    ul {
      @apply space-y-1;
      li {
      }
    }
  }
  &.active {
    .filter-toggle-icon {
      @apply rotate-180;
    }
    .filter-details {
      @apply visible h-auto overflow-auto pb-3 opacity-100;
    }
  }
}
</style>
