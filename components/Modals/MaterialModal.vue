<template>
  <ModalsModal v-if="fabrics != null" name="material" class="modal modal-sm">
    <div class="modal-wrapper relative pt-9">
      <div class="relative bg-white">
        <div class="h-[400px] w-full">
          <img
            class="h-full w-full object-cover"
            :src="$asset(fabrics.image)"
            alt=""
          />
        </div>
        <div class="py-5 px-5">
          {{ fabrics.name }}
        </div>
      </div>
      <UIButton
        class="absolute right-0 top-0"
        @click="$nuxt.$emit('close-modal', 'material')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#e8e8e8"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="200"
            y1="56"
            x2="56"
            y2="200"
            stroke="#e8e8e8"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="200"
            y1="200"
            x2="56"
            y2="56"
            stroke="#e8e8e8"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
        </svg>
      </UIButton>
    </div>
  </ModalsModal>
</template>

<script>
export default {
  data: () => ({
    fabrics: null,
  }),
  created() {
    this.$nuxt.$on("send", (item) => {
      this.fabrics = item;
    });
  },
  //   methods: {
  //     send(item) {
  //       this.fabrics = item;
  //     },
  //   },
};
</script>

<style></style>
