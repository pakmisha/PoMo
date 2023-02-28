<template>
  <div class="search" :class="{ active: active }">
    <div
      class="backdrop fixed top-0 left-0 bottom-0 right-0 z-30 bg-black bg-opacity-60"
      @click.prevent="active = false"
    ></div>
    <div class="search-content section-container">
      <div class="serach-content-icon">
        <svg
          width="25"
          height="25"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11.332" cy="11.333" r="10" stroke="#101820" />
          <path
            d="M26.332 26.333L21.332 21.333"
            stroke="#101820"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="search-content-input mx-5 lg:mx-10">
        <input
          type="text"
          class="w-full bg-light py-2 outline-none"
          placeholder="ВВЕДИТЕ ЗАПРОС..."
          @keyup="showResults($event.target.value)"
        />
      </div>
      <button class="serach-content-close" @click.prevent="active = false">
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
      <div id="searchResults" class="search-result section-container pb-7">
        <div class="search-result-content">
          <UISlider
            :options="{
              slidesPerView: 4,
              spaceBetween: 10,
              breakpoints: {
                320: {
                  slidesPerView: 1.2,
                },
                768: {
                  slidesPerView: 2.1,
                },
                1024: {
                  slidesPerView: 3.1,
                },
                1366: {
                  slidesPerView: 4,
                },
              },
            }"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(product, index) in products"
                :key="index"
                class="swiper-slide w-auto"
              >
                <div class="h-[300px] w-full 2xl:h-[400px]">
                  <Product :product="product" @click.native="active = false" />
                </div>
              </div>
            </div>
          </UISlider>
        </div>
        <div class="mt-5 flex items-center justify-center lg:mt-7">
          <NuxtLink
            :to="{
              path: '/searchPage',
              params: { data: JSON.stringify(products) },
            }"
            @click.native="active = false"
            class="btn-primary"
            >Смотреть все результаты</NuxtLink
          >
          <!-- <UIButton
            @click="$router.push({ name: '/searchPage', params: { products } })"
            @click.native="active = false"
            class="btn-primary"
            >Смотреть все результаты</UIButton
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    products: [],
  }),
  created() {
    this.$nuxt.$on("toggle", (name) => {
      if (name == "search") {
        this.active = !this.active;
      }
    });
  },
  methods: {
    async showResults(val) {
      this.debounce(this.searchProducts(val), 3000);
    },
    async searchProducts(val) {
      const searchValue = val.toLowerCase();
      console.log(val);
      if (searchValue.length >= 3) {
        // document.getElementById("searchResults").innerHTML = "";
        const response = await this.$axios.$get("search?query=product_title", {
          params: {
            query: searchValue,
          },
        });
        const res = response.data.products;
        var results = res;
        this.products = results;
        if (results.length == 0) {
          document.querySelector(".search-result").classList.remove("active");
        }
        // document.querySelector('.no-results').classList.add('show');
        // } else if(results.length >= 1) {
        //     document.querySelector('.no-results').classList.remove('show');
        // }
        results.forEach((item, index) => {
          // if(index < 1) {
          let text = item.title[this.$i18n.locale];
          if (text.toLowerCase().includes(searchValue)) {
            console.log(searchValue);
            document.querySelector(".search-result").classList.add("active");
            // document
            //   .getElementById("searchResults")
            //   .insertAdjacentHTML(
            //     "beforeend",
            //     "<li><a href='/catalog/" +
            //       item.slug +
            //       "' class='link-underline'><img src='" +
            //       item.media[0].original_url +
            //       "'><p>" +
            //       text +
            //       "</p></a></li>"
            //   );
          }
          // }
        });
        this.resultsData = res;
      } else {
        document.querySelector(".search-result").classList.add("active");
      }
    },
    debounce(callback, delay) {
      let timeout;
      return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
      };
    },
    toResults() {
      // this.$route.push({
      //   path: "/searchPage",
      //   params: {
      //     res: this.products,
      //   },
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  @apply invisible absolute top-[101%] left-0 z-40 w-full opacity-0 transition-all duration-300 ease-in-quad;
  &-content {
    @apply invisible relative z-30 flex w-full translate-y-10 items-center justify-between bg-light py-2 opacity-0 transition-all duration-300 ease-in-quad lg:py-4;
    &-icon {
    }
    &-input {
      @apply w-full;
    }
    .search-result {
      @apply invisible absolute left-0 right-0 top-full -translate-y-5 bg-light opacity-0 transition-all duration-300 ease-in-quad;
      &-content {
        .swiper {
          .swiper-wrapper {
            .swiper-slide {
              width: auto !important;
            }
          }
        }
      }
      &.active {
        @apply visible translate-y-0 opacity-100;
      }
    }
  }
  &.active {
    @apply visible opacity-100;
    .search-content {
      @apply visible translate-y-0 opacity-100;
    }
  }
}
</style>
