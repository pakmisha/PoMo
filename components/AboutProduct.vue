<!-- <template>
  <section>
    <div class="section-container">
      <div class="flex items-center justify-between">
        <UISlider
          :options="{
            slidesPerView: 1,
            centeredSlides: false,
            navigation: {
              nextEl: '.sw-next',
              prevEl: '.sw-prev',
            },
            thumbs: {
              swiper: additionThumbs,
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            },
          }"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in items"
              :key="index"
            >
              <div>
                <img :src="require(`~/assets/${item.image}`)" alt="" />
              </div>
            </div>
          </div>
        </UISlider>
        <div class="addition-thumbs swiper" ref="swiper_thumbs">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in items"
              :key="'addition-' + index"
            >
              <div>
                <img :src="require(`~/assets/${item.image}`)" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        image: "img/bg/category-card-1.png",
      },
      {
        image: "img/bg/category-card-2.png",
      },
      {
        image: "img/bg/category-card-3.png",
      },
      {
        image: "img/bg/category-card-1.png",
      },
    ],
  }),
  mounted() {
    const additionThumbs = this.$swiper(this.$refs.swiper_thumbs, {
      slidesPerView: 2,
      spaceBetween: 20,
      direction: "vertical",
      loop: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      grabCursor: true,
      breakpoints: {
        1024: {
          direction: "vertical",
        },
        320: {
          direction: "horizontal",
        },
      },
    });
  },
};
</script>

<style></style> -->
