<template>
  <div>
    <UISlider
      :options="{
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
        breakpoints: {
          320: {
            slidesPerView: 1.1,
          },
          1024: {
            slidesPerView: 3,
          },
          1680: {
            slidesPerView: 4,
          },
        },
      }"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide h-auto">
          <div class="picture-item">
            <div class="picture-item-image">
              <img
                class="h-full w-full object-cover"
                src="~/assets/img/art/picture-1.png"
                alt=""
              />
              <div class="corner absolute -right-[7px] -bottom-[6px]">
                <img src="~/assets/img/icons/brand-list.png" alt="" />
              </div>
            </div>
            <div class="picture-item-description">
              <p class="picture-title">Меруерт Кунакова «Золотая линия»</p>
              <p class="picture-description">
                Художница Меруерт Кунакова работает в технике цианотипия.
                Она называет этот редкий вид фотопечати носителем, сохраняющим
                ностальгию. Слово, которое в переводе с древнегреческого
                означает — «возвращение на родину» и — «боль, печаль».
              </p>
              <div class="flex">
                <UILink link="" class="btn-primary"> Смотреть картину </UILink>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide h-auto">
          <div class="picture-item">
            <div class="picture-item-image">
              <img
                class="h-full w-full object-cover"
                src="~/assets/img/art/picture-2.png"
                alt=""
              />
              <div class="corner absolute -right-[7px] -bottom-[6px]">
                <img src="~/assets/img/icons/brand-list.png" alt="" />
              </div>
            </div>
            <div class="picture-item-description">
              <p class="picture-title">Меруерт Кунакова «Золотая линия»</p>
              <p class="picture-description">
                Художница Меруерт Кунакова работает в технике цианотипия.
                Она называет этот редкий вид фотопечати носителем, сохраняющим
                ностальгию. Слово, которое в переводе с древнегреческого
                означает — «возвращение на родину» и — «боль, печаль».
              </p>
              <div class="flex">
                <UILink link="" class="btn-primary"> Смотреть картину </UILink>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide h-auto">
          <div class="picture-item">
            <div class="picture-item-image">
              <img
                class="h-full w-full object-cover"
                src="~/assets/img/art/picture-4.png"
                alt=""
              />
              <div class="corner absolute -right-[7px] -bottom-[6px]">
                <img src="~/assets/img/icons/brand-list.png" alt="" />
              </div>
            </div>
            <div class="picture-item-description">
              <p class="picture-title">Меруерт Кунакова «Золотая линия»</p>
              <p class="picture-description">
                Художница Меруерт Кунакова работает в технике цианотипия.
                Она называет этот редкий вид фотопечати носителем, сохраняющим
                ностальгию. Слово, которое в переводе с древнегреческого
                означает — «возвращение на родину» и — «боль, печаль».
              </p>
              <div class="flex">
                <UILink link="" class="btn-primary"> Смотреть картину </UILink>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide h-auto">
          <div class="picture-item">
            <div class="picture-item-image">
              <img
                class="h-full w-full object-cover"
                src="~/assets/img/art/picture-3.png"
                alt=""
              />
              <div class="corner absolute -right-[7px] -bottom-[6px]">
                <img src="~/assets/img/icons/brand-list.png" alt="" />
              </div>
            </div>
            <div class="picture-item-description">
              <p class="picture-title">Меруерт Кунакова «Золотая линия»</p>
              <p class="picture-description">
                Художница Меруерт Кунакова работает в технике цианотипия.
                Она называет этот редкий вид фотопечати носителем, сохраняющим
                ностальгию. Слово, которое в переводе с древнегреческого
                означает — «возвращение на родину» и — «боль, печаль».
              </p>
              <div class="flex">
                <UILink link="" class="btn-primary"> Смотреть картину </UILink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UISlider>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  //   computed: {
  //     ...mapGetters({
  //       brands: "brands/brands",
  //       brand: "brands/brand",
  //     }),
  //   },
};
</script>

<style lang="scss" scoped>
.picture-item {
  @apply flex h-[500px] flex-col justify-between transition-all duration-300 ease-in-out md:h-[600px] 2xl:h-[700px];
  &-image {
    @apply relative h-[500px] transition-all duration-300 ease-in-out md:h-[600px] 2xl:h-[700px];
    .corner {
      @apply visible opacity-100 transition-all duration-300 ease-in-out;
    }
  }
  &-description {
    @apply invisible h-0 translate-y-20 opacity-0 transition-all duration-500 ease-in-out;
  }
  &:hover {
    .picture-item-image {
      @apply h-[150px] lg:h-[300px] 2xl:h-[400px];
      .corner {
        @apply invisible opacity-0;
      }
    }
    .picture-item-description {
      @apply visible h-auto translate-y-0 opacity-100;
      .picture-title {
        @apply mb-3 h-[60px] overflow-hidden text-ellipsis text-sm font-semibold uppercase text-dark;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .picture-description {
        @apply mb-6 h-[200px] overflow-hidden text-ellipsis text-sm text-grey lg:h-[120px] 2xl:h-[100px];
        // @media (min-width: 1536px) {
        //   -webkit-line-clamp: 5;
        // }
        @media (min-width: 1024px) {
          -webkit-line-clamp: 5;
        }
        @media (min-width: 768px) {
          -webkit-line-clamp: 6;
        }
        -webkit-line-clamp: 10;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
