export const state = () => ({
  products: null,
  product: null,
  categories: [],
  category: null,
  filters: [],
  selectedFilters: {},
  brand: null,
  sort: null,
  maxPrice: 0,
  minPrice: 0,
  prices: [],
  colors: [],
  color: null,
});
export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_COLORS(state, colors) {
    state.colors = colors;
  },
  SET_COLOR(state, color) {
    state.color = color;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_FILTERS(state, filters) {
    state.filters = filters;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_CATEGORY(state, category) {
    state.category = category;
  },
  SELECTED_FILTERS(state, { key, value }) {
    if (state.selectedFilters.hasOwnProperty(key)) {
      state.selectedFilters[key].includes(value)
        ? state.selectedFilters[key].splice(
            state.selectedFilters[key].indexOf(value),
            1
          )
        : state.selectedFilters[key].push(value);
    } else {
      state.selectedFilters[key] = [];
      state.selectedFilters[key].push(value);
    }
  },
  RESET_FILTERS(state) {
    state.selectedFilters = {};
  },
  SET_SORT(state, sort) {
    state.sort = sort;
    if (state.sort == "all") {
      state.sort = null;
    }
  },
  SET_BRAND(state, brand) {
    state.brand = brand;
    state.category = null;
    state.selectedFilters = {};
  },

  // MIN_PRICE(state, minPrice) {
  //   state.minPrice = minPrice;
  // },
  // MAX_PRICE(state, maxPrice) {
  //   state.maxPrice = maxPrice;
  // },
  // SET_PRICES(state, value) {
  //   state.minPrice = value[0];
  //   state.maxPrice = value[1];
  //   state.prices = [state.minPrice, state.maxPrice];
  //   if (state.minPrice == null && state.maxPrice == null) {
  //     state.prices = [];
  //   }
  // },
};
export const actions = {
  setProduct(context, product) {
    context.commit("SET_PRODUCT", product);
  },
  setColors(context, colors) {
    context.commit("SET_COLORS", colors);
  },
  async getProducts({ commit, state }, page = 1) {
    try {
      const response = await this.$axios.post(
        `catalog?category=${state.category.slug}&page=${page}`,
        {
          ...state.selectedFilters,
          order_by: state.sort,
          brand_id: state.brand,
          prices: state.prices,
        }
      );
      commit("SET_PRODUCTS", response.data.data.products);
      // commit("MIN_PRICE", response.data.data.minPrice);
      // commit("MAX_PRICE", response.data.data.maxPrice);
      // commit("SET_PRICES", [
      //   response.data.data.minPrice,
      //   response.data.data.maxPrice,
      // ]);
      // console.log(
      //   "getProducts",
      //   response.data.data.minPrice,
      //   response.data.data.maxPrice
      // );
    } catch (e) {
      console.log("ERROR GETTING PRODUCTS");
    }
  },
  async getFilters({ commit, state }) {
    const response = await this.$axios.get(
      `catalog/filters?category=${state.category.slug}`
    );
    commit("SET_FILTERS", response.data.data.filters);
  },
  async getCategories({ commit, dispatch }) {
    try {
      const response = await this.$axios.get("categories");
      commit("SET_CATEGORIES", response.data.data.categories);
      commit("SET_CATEGORY", response.data.data.categories[0]);
      dispatch("getFilters");
      dispatch("getProducts");
    } catch (e) {
      console.log("ERROR GETTING CATEGORIES");
    }
  },
  setCategory(context, category) {
    context.commit("SET_CATEGORY", category);
    context.commit("RESET_FILTERS");
  },
  setFilters({ commit, dispatch }, { key, value }) {
    commit("SELECTED_FILTERS", { key, value });
    dispatch("getProducts");
  },
  setSelectedFilters({ commit }) {
    commit("SELECETED_FILTERS");
  },
  setSort({ commit, dispatch }, sort) {
    commit("SET_SORT", sort);
    dispatch("getProducts");
  },
  setBrand({ commit, dispatch }, brand) {
    commit("SET_BRAND", brand);
    dispatch("getProducts");
  },
  setColor({ commit, dispatch }, color) {
    commit("SET_COLOR", color);
    dispatch("cart/setColor", color, { root: true });
  },
  // setPrices({ commit, dispatch }, value) {
  //   // commit("MIN_PRICE", value[0]);
  //   // commit("MAX_PRICE", value[1]);
  //   commit("SET_PRICE", value);
  //   dispatch("getProducts");
  // },
};
export const getters = {
  selected(state) {
    return state.product;
  },
  products(state) {
    return state.products;
  },
  colors(state) {
    return state.colors;
  },
  color(state) {
    return state.color;
  },
  filters(state) {
    return state.filters;
  },
  selectedFilters(state) {
    return state.selectedFilters;
  },
  categories(state) {
    return state.categories;
  },
  category(state) {
    return state.category;
  },
  sort(state) {
    return state.sort;
  },
  minPrice(state) {
    return state.minPrice;
  },
  maxPrice(state) {
    return state.maxPrice;
  },
};
