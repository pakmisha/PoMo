export const state = () => ({
  compare: [],
});
export const mutations = {
  SET(state, compare) {
    state.compare = compare;
  },
  ADD(state, product) {
    const item = state.compare.products.find((i) => i.id == product.id);
    if (!item) {
      state.compare.products.push(product);
    }
  },
  REMOVE(state, product) {
    console.log(product);
  },
};
export const actions = {
  async get({ commit }) {
    try {
      const response = await this.$axios.get("compare");
      commit("SET", response.data.data);
    } catch (e) {
      console.log("ERROR GETTING COMPARE");
    }
  },
  async add({ commit, state, dispatch }, product) {
    const item = state.compare.products.find((i) => i.id == product.id);
    if (!item) {
      try {
        const response = await this.$axios.post(`compare/${product.id}`);
        commit("ADD", product);
        this._vm.$toast.success(response.data.message);
      } catch (e) {
        this._vm.$toast.error(e.response.data.message);
      }
    } else {
      try {
        const response = await this.$axios.delete(`compare/${product.id}`);
        commit("REMOVE", product);
        this._vm.$toast.success(response.data.message);
      } catch (e) {
        this._vm.$toast.error(e.response.data.message);
      }
    }
  },
};
export const getters = {
  compare(state) {
    return state.compare;
  },
};
