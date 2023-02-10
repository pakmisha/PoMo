<template>
  <div>
    <div class="space-y-12">
      <div>
        <div
          class="category"
          v-for="(item, index) in categories"
          :key="index"
          :class="{ active: active.includes(item.id) }"
        >
          <button class="category-toggle" @click.prevent="toggleCategory(item)">
            <p>{{ item.title[$i18n.locale] }}</p>
            <div v-if="item.childrens.length > 0" class="category-toggle-icon">
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
          <Transition name="slide-fade" :key="'a-' + index">
            <div
              v-if="active.includes(item.id)"
              class="category-details space-y-3"
            >
              <div
                v-for="(category, index) in item.childrens"
                :key="'category-' + index"
              >
                <UICategoryChildren
                  v-if="category.childrens"
                  :category="category"
                  :active="active"
                  :depth="2"
                />
              </div>
            </div>
            <!-- <div
              v-if="active.includes(item.id)"
              class="category-details space-y-3"
            >
              <div
                class="sub-category pl-3"
                v-for="(category, index) in item.childrens"
                :key="'category-' + index"
                :class="{ active: active.includes(category.id) }"
              >
                <button
                  v-if="item.childrens"
                  class="flex w-full items-center justify-between"
                  @click.prevent="toggleSubcategory(category)"
                >
                  <div class="block text-sm font-medium uppercase text-dark">
                    {{ category.title[$i18n.locale] }}
                  </div>
                  <div
                    class="subcategory-toggle-icon"
                    v-if="category.childrens.length > 0"
                  >
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
                <div v-if="active.includes(category.id)">
                  <div
                    v-for="(children, index) in category.childrens"
                    :key="index"
                    class="space-y-1 pl-3"
                    @click.prevent=""
                  >
                    <button
                      v-if="children.childrens"
                      class="py-1 text-sm text-grey"
                      @click.prevent="toggleSubcategory()"
                    >
                      {{ children.title[$i18n.locale] }}
                    </button>
                  </div>
                </div>
              </div>
            </div> -->
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    active: [],
  }),
  watch: {
    category(value) {
      this.$store.dispatch("products/getProducts");
      this.$store.dispatch("products/getFilters");
    },
  },
  computed: {
    ...mapGetters({
      categories: "products/categories",
      category: "products/category",
    }),
  },
  methods: {
    toggleCategory(item) {
      if (item.childrens.length > 0) {
        this.active.includes(item.id)
          ? this.active.splice(this.active.indexOf(item.id), 1)
          : this.active.push(item.id);
      } else {
        this.$store.dispatch("products/setCategory", item);
      }
    },
  },
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
    @apply pb-3;
    .category-toggle-icon {
      @apply rotate-0;
    }
  }
  .sub-category {
    .subcategory-toggle-icon {
      @apply rotate-0;
    }
    &.active {
      .subcategory-toggle-icon {
        @apply rotate-180;
      }
    }
  }
  &.active {
    .category-toggle-icon {
      @apply rotate-180;
    }
  }
}
</style>
