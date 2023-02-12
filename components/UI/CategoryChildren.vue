<template>
  <div
    class="sub-category pl-3"
    :class="{
      active: active.includes(category.id),
      'no-children': category.childrens.length <= 0,
    }"
  >
    <button
      class="flex w-full items-center justify-between"
      @click.prevent="toggleSubcategory(category)"
    >
      <div class="title-toggle">
        {{ category.title[$i18n.locale] }}
      </div>
      <div class="subcategory-toggle-icon" v-if="category.childrens.length > 0">
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
    <div
      class="sub-category-content"
      v-for="(item, index) in category.childrens"
      :key="'category-' + index"
    >
      <UICategoryChildren
        v-if="item.childrens"
        :category="item"
        :depth="depth + 1"
        :active="active"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      default: 1,
      required: true,
    },
    active: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleSubcategory(category) {
      if (category.childrens.length > 0) {
        this.active.includes(category.id)
          ? this.active.splice(this.active.indexOf(category.id), 1)
          : this.active.push(category.id);
      } else {
        this.$store.dispatch("products/setCategory", category);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-category {
  .title-toggle {
    @apply block text-sm font-medium uppercase text-dark;
  }
  .sub-category-content {
    @apply invisible h-0 -translate-y-2 opacity-0 transition-all duration-300 ease-in-quad;
  }
  .subcategory-toggle-icon {
    @apply transition-all duration-300 ease-in-quad;
  }
  &.no-children {
    .title-toggle {
      @apply normal-case text-grey;
    }
  }
  &.active {
    @apply block;
    .sub-category-content {
      @apply visible mt-1 h-auto translate-y-0 opacity-100;
    }
    .subcategory-toggle-icon {
      @apply rotate-180;
    }
  }
}
</style>
