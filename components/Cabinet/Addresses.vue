<template>
  <div class="cabinet">
    <div class="cabinet-wrapper">
      <div v-if="!active">
        <h3 class="heading-secondary mb-5 lg:mb-10">Адрес 1</h3>
        <div class="address">
          <div class="address__item">
            <p class="address__item__left">Страна</p>
            <p class="address__item__right">{{ item.country }}</p>
          </div>
          <div class="address__item">
            <p class="address__item__left">Город</p>
            <p class="address__item__right">{{ item.city }}</p>
          </div>
          <div class="address__item">
            <p class="address__item__left">Адрес</p>
            <p class="address__item__right">{{ item.address }}</p>
          </div>
          <div class="address__item">
            <p class="address__item__left">Почтовый индекс</p>
            <p class="address__item__right">{{ item.index }}</p>
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between lg:mt-10">
          <UIButton class="btn-primary" @click="active = true"
            >Редактировать адрес</UIButton
          >
          <UIButton class="btn-underline text-grey" @click="remove(item)"
            >Удалить</UIButton
          >
        </div>
      </div>
      <div v-else>
        <h3 class="heading-secondary mb-5 lg:mb-10">Редактировать адреса</h3>
        <div class="address space-y-4">
          <div class="input-wrapper">
            <label>Страна</label>
            <select v-model="country" name="" id="" class="select-secondary">
              <option :value="null" selected disabled>Выберите страну</option>
              <option
                :value="item.name"
                v-for="(item, index) in countries"
                :key="index"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="input-wrapper">
            <label for="">Город</label>
            <input v-model="item.city" type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Адрес</label>
            <input v-model="item.address" type="text" class="input-primary" />
          </div>
          <div class="input-wrapper">
            <label for="">Почтовый индекс</label>
            <input v-model="item.post_id" type="text" class="input-primary" />
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between lg:mt-10">
          <UIButton class="btn-primary" @click="active = false"
            >Сохранить изменения</UIButton
          >
          <UIButton class="btn-underline text-grey">Отменить</UIButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    countries: {
      type: Array,
    },
    addresses: {
      type: Array,
    },
  },
  data: () => ({
    active: false,
  }),
  methods: {
    async remove(item) {
      if (!confirm("Вы действительно хотите удалить адрес?")) {
        return;
      }
      try {
        const response = await this.$axios.delete("addresses/" + item.id);
        this.addresses.splice(this.addresses.indexOf(item.id), 1);
        this.$toast.success(response.data.message);
      } catch (e) {
        this.$toast.error(e.response.data.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.address {
  &__item {
    @apply flex items-center border-b border-grey-light py-4;
    &__left {
      @apply w-[50%] whitespace-nowrap text-xs font-medium uppercase lg:w-[30%] lg:text-sm;
    }
    &__right {
      @apply w-[40%] overflow-hidden text-ellipsis whitespace-nowrap lg:w-[70%];
    }
  }
}
</style>
