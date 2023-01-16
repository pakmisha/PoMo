<template>
  <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
    <a
      href=""
      class="block bg-light"
      v-for="(item, index) in items"
      :key="index"
    >
      <img :src="require(`~/assets/img/${item.image}`)" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: "brands/brand_card.png",
      },
      {
        image: "brands/brand_card-1.png",
      },
      {
        image: "brands/brand_card-2.png",
      },
      {
        image: "brands/brand_card-3.png",
      },
      {
        image: "brands/brand_card-4.png",
      },
      {
        image: "brands/brand_card-5.png",
      },
      {
        image: "brands/brand_card-6.png",
      },
      {
        image: "brands/brand_card-7.png",
      },
      {
        image: "brands/brand_card-8.png",
      },
      {
        image: "brands/brand_card-9.png",
      },
      {
        image: "brands/brand_card-10.png",
      },

      {
        image: "brands/brand_card-12.png",
      },
      {
        image: "brands/brand_card-13.png",
      },
      {
        image: "brands/brand_card-14.png",
      },
      {
        image: "brands/brand_card-15.png",
      },
      {
        image: "brands/brand_card-16.png",
      },

      {
        image: "brands/brand_card-18.png",
      },
      {
        image: "brands/brand_card-19.png",
      },
      {
        image: "brands/brand_card-20.png",
      },
      {
        image: "brands/brand_card-21.png",
      },
      {
        image: "brands/brand_card-22.png",
      },
      {
        image: "brands/brand_card-23.png",
      },
      {
        image: "brands/brand_card-11.png",
      },
      {
        image: "brands/brand_card-17.png",
      },
    ],
  }),
};
</script>

<style></style>
