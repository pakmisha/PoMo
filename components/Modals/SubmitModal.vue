<template>
  <ModalsModal name="submit" class="modal modal-lg">
    <div class="modal-wrapper">
      <div class="text-center">
        <p class="mb-3 text-xl font-medium uppercase md:text-2xl 2xl:text-3xl">
          ВЫ успешно подписались на рассылку новостей и акций!
        </p>
        <p>Вы можете отписаться от рассылки в любое время</p>
      </div>

      <button
        class="absolute right-4 top-4"
        @click.prevent="$nuxt.$emit('close-modal', 'submit')"
      >
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
      </button>
      <div class="page-icon m absolute -left-20 -bottom-5 hidden lg:block">
        <img src="~/assets/img/icons/m.svg" alt="" />
      </div>
    </div>
  </ModalsModal>
</template>

<script>
export default {};
</script>

<style></style>
