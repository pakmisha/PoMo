export const state = () => ({
  brands: [],
});
export const mutations = {
  SET(state, brands) {
    state.brands = brands;
  },
};
export const actions = {
  async get({ commit }) {
    try {
      const response = await this.$axios.get("brands");
      commit("SET", response.data.data.brands);
    } catch (e) {
      console.log("ERROR GETTING BRANDS");
    }
  },
};
export const getters = {
  brands(state) {
    return state.brands;
  },
};
