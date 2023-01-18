<template>
  <ModalsModal name="filters" class="mobile-sidebar">
    <div class="mobile-sidebar-wrapper">
      <div class="mb-10 flex items-center justify-between">
        <h3 class="text-lg font-medium uppercase">Фильтры</h3>
        <div @click.prevent="$nuxt.$emit('close-modal', 'filters')">
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L13 13" stroke="#101820" stroke-linecap="round" />
            <path d="M13 1L1 13" stroke="#101820" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <div>
        <FiltersSidebar />
      </div>
    </div>
  </ModalsModal>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
