<template>
  <section>
    <UIPath :path="path" />
    <div v-if="$auth.$state.loggedIn">
      <div v-if="items?.length > 0">
        <div class="section-container">
          <h1
            class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
          >
            избранные товары
          </h1>
        </div>
        <div class="section-container">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Product
              :product="item.product"
              v-for="(item, index) in items"
              :favourite="item"
              :key="index"
            />
          </div>
          <div class="mt-10 flex items-center justify-center lg:mt-14">
            <UILink link="/catalog" class="btn-primary"
              >вернуться в каталог</UILink
            >
          </div>
        </div>
      </div>
      <div v-else>
        <div class="section-container">
          <h1
            class="heading-big section-title-distance mx-auto max-w-[1000px] text-center"
          >
            в избранных пусто
          </h1>
          <div class="flex items-center justify-center">
            <UILink link="/catalog" class="btn-secondary"
              >перейти в каталог</UILink
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="section-container">
        <h1
          class="heading-primary section-title-distance mx-auto max-w-[1000px] text-center"
        >
          Для того чтобы посмотреть избранное вам необходимо авторизоваться
        </h1>
        <div class="flex items-center justify-center">
          <UILink link="/login" class="btn-secondary"
            >Войти / зарегистрироваться</UILink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    path: [
      {
        name: "избранные товары",
        link: "/favorite",
      },
    ],
  }),
  computed: {
    ...mapGetters({
      items: "favourites/favourites",
    }),
  },
};
</script>

<style></style>
