<template>
  <div>
    <h3 class="border-b border-grey-light pb-3 text-sm uppercase text-grey">
      ВСЕ
    </h3>
    <div class="space-y-12">
      <div>
        <div
          class="category"
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: item.active }"
        >
          <button
            class="category-toggle"
            @click.prevent="item.active = !item.active"
          >
            <p>{{ item.title }}</p>
            <div class="category-toggle-icon">
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
          <div class="category-details">
            <ul>
              <li
                v-for="(category, index) in item.categorys"
                :key="'category-' + index"
              >
                <UILink link="" class="text-sm text-grey">
                  {{ category.title }}
                </UILink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        active: false,
        title: "Диваны",
        categorys: [
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
        categorys: [
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
        categorys: [
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
        categorys: [
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
        categorys: [
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
};
</script>

<style lang="scss" scoped>
.category {
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
    .category-toggle-icon {
      @apply rotate-180;
    }
    .category-details {
      @apply visible h-auto overflow-auto pb-3 opacity-100;
    }
  }
}
</style>
