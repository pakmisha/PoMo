<template>
  <section>
    <div class="section-container section-distance">
      <div
        class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <h1 class="heading-primary">Мы предлагаем</h1>
        <div
          class="flex flex-row border-grey-light md:flex-col md:border md:px-10 md:py-10"
          v-for="(item, index) in cooperation.offers"
          :key="index"
        >
          <div class="mr-2 block w-7 md:mr-0 md:mb-3 md:h-16 md:w-12">
            <img
              :src="$asset(item.attributes.icon)"
              class="w-fill h-full object-contain"
              alt=""
            />
          </div>
          <div class="plaintext w-[90%] md:w-auto">
            {{ item.attributes.description }}
          </div>
        </div>
      </div>
      <div class="mt-5 flex items-center justify-center lg:mt-10">
        <button
          class="btn-primary"
          @click.prevent="$nuxt.$emit('open-modal', 'request')"
        >
          Оставить заявку
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cooperation: Object,
  },
  data: () => ({}),
};
</script>

<style></style>
