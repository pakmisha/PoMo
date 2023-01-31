export const state = () => ({
  products: null,
  product: null,
  categories: [],
  category: null,
});
export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_CATEGORY(state, category) {
    state.category = category;
  },
};
export const actions = {
  async getProducts({ commit }) {
    try {
      const response = await this.$axios.get("products");
      commit("SET_PRODUCTS", response.data.data.products);
    } catch (e) {
      console.log("ERROR GETTING PRODUCTS");
    }
  },
  setProduct(context, product) {
    context.commit("SET_PRODUCT", product);
  },
  async getCategories({ commit }) {
    try {
      const response = await this.$axios.get("categories");
      commit("SET_CATEGORIES", response.data.data.categories);
    } catch (e) {
      console.log("ERROR GETTING CATEGORIES");
    }
  },
};
export const getters = {
  selected(state) {
    return state.product;
  },
  products(state) {
    return state.products;
  },
  categories(state) {
    return state.categories;
  },
};
