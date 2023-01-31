export const state = () => ({
  home: null,
});
export const mutations = {
  SET(state, home) {
    state.home = home;
  },
};
export const actions = {
  async get({ commit }) {
    try {
      const response = await this.$axios.get("home");
      commit("SET", response.data.data.homepage);
    } catch (e) {
      console.log("ERROR GETTING HOME PAGE");
    }
  },
};
export const getters = {
  home(state) {
    return state.home;
  },
};
