export const state = () => ({
  compare: [],
});
export const mutations = {
  SET(state, compare) {
    state.compare = compare;
  },
  ADD(state, product) {
    const item = state.compare.find((i) => i.id == product.id);
    if (!item) {
      state.compare.push(product);
    }
  },
};
export const actions = {
  async get({ commit }) {
    const response = await this.$axios.get("compare");
    commit("SET", response.data.data.products);
  },
  async add({ commit }, product) {
    const response = await this.$axios.post(`compare/${product.id}`);
    commit("ADD", product);
  },
};
export const getters = {
  compare(state) {
    return state.compare;
  },
};
