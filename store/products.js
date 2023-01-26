export const state = () => ({
  products: null,
  product: null,
});
export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
};
export const actions = {
  setProduct(context, product) {
    context.commit("SET_PRODUCT", product);
  },
  async getProducts({ commit }) {
    try {
      const response = await this.$axios.get("products");
      commit("SET_PRODUCTS", response.data.data.products);
    } catch (e) {
      console.log("ERROR GETTING PRODUCTS");
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
};
