export const state = () => ({
  brands: null,
  brand: null,
});
export const mutations = {
  SET_BRANDS(state, brands) {
    state.brands = brands;
  },
  SET_BRAND(state, brand) {
    state.brand = brand;
  },
};
export const actions = {
  async getBrands({ commit }) {
    try {
      const response = await this.$axios.get("brands");
      commit("SET_BRANDS", response.data.data.brands);
    } catch (e) {
      console.log("ERROR GETTING BRANDS");
    }
  },
  async setBrans(context, brand) {
    context.commit("SET_BRAND", brand);
  },
};
export const getters = {
  brands(state) {
    return state.brands;
  },
  brand(state) {
    return state.brand;
  },
};
