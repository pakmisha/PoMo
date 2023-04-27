<template>
  <div>
    <section>
      <div class="section-container mt-10 lg:mt-14">
        <div class="flex flex-col justify-between lg:flex-row lg:items-center">
          <h1 class="heading-primary mb-4 lg:mb-0">Коллекция картин</h1>
          <div class="select-primary w-fit">
            <select name="" id="" class="text-center">
              <option :value="null" disabled selected>Сортировать по:</option>
              <!-- <option value="all">Все:</option> -->
              <option value="price_asc">По дате добавления:</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-container mt-14">
        <div
          class="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          <div v-for="(picture, index) in gallery" :key="index">
            <ArtPicture :picture="picture" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    gallery: [
      {
        img: "/img/art/picture-1.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-2.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-3.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-4.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-2.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-1.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-2.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
      {
        img: "/img/art/picture-3.png",
        name: "Софья линд «Встретимся в Жоресе»",
      },
    ],
  }),
};
</script>

<style></style>
