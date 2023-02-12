<template>
  <div v-if="data">
    <ul class="pagination">
      <li v-for="(link, index) in data.links" :key="index">
        <a
          :href="index"
          :class="{ active: link.active }"
          v-html="link.label.replace('Назад', '').replace('Вперёд ', '')"
          @click.prevent="change(link)"
        ></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: false,
      default: null,
    },
  },
  methods: {
    change(link) {
      const active = parseInt(this.data.current_page);
      const index = this.data.links.indexOf(link);
      let page;
      if (index == 0) {
        const next = parseInt(active) - 1;
        page = next == 0 ? 1 : next;
      } else if (index == this.data.links.length - 1) {
        page = parseInt(active) + 1;
      } else {
        page = parseInt(link.label);
      }
      this.$emit("changed", page);
    },
  },
};
</script>
<style lang="scss">
.pagination {
  @apply flex flex-wrap justify-center gap-x-7 pt-10;
  li {
    @apply mb-2.5 block md:mb-0;
    a {
      @apply flex items-center justify-center rounded-full text-sm text-gray-500 transition-all duration-300 hover:text-dark;
      &.active {
        @apply text-dark;
      }
    }
  }
}
</style>
