export const state = () => ({
  favourites: [],
});
export const mutations = {
  SET(state, favourites) {
    state.favourites = favourites;
  },
  TOGGLE(state) {},
};
export const actions = {
  async get({ commit }) {
    const response = await this.$axios.get("favourites");
    commit("SET", response.data.data.favourites);
  },
};
export const getters = {
  favourites(state) {
    return state.favourites;
  },
};
