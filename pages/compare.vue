<template>
  <div>
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        Сравнение товаров
      </h1>
    </div>
    <section>
      <div class="section-container-inner">
        <div class="flex flex-col justify-between lg:flex-row">
          <div class="mr-3 mb-2 w-full lg:mb-0 lg:w-1/5">
            <h3 class="heading-secondary">Комоды</h3>
          </div>
          <div class="w-full lg:w-[75%]">
            <UISlider
              :options="{
                slidesPerView: 1.1,
                centeredSlides: false,
                navigation: {
                  nextEl: '.sw-next',
                  prevEl: '.sw-prev',
                },
                breakpoints: {
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1350: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                },
              }"
            >
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(product, index) in products"
                  :key="index"
                >
                  <div class="flex">
                    <Product :product="product" />
                  </div>
                </div>
              </div>
            </UISlider>
          </div>

          <!-- <Product :product="product" /> -->
        </div>
      </div>
    </section>
    <section>
      <div class="section-container-inner mt-10">
        <CompareDescription />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        id: 1,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Кресло TANGYUAN, MAYA A2267–2A",
        price: "515 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
      {
        id: 2,
        media: [
          {
            file_name: "product-1.jpeg",
          },
          {
            file_name: "product-2.jpeg",
          },
          {
            file_name: "product-1.jpeg",
          },
        ],
        title: "Стул TANGYUAN",
        price: "590 300",
      },
    ],
  }),
};
</script>

<style></style>
