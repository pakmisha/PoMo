export const state = () => ({
  settings: null,
});
export const mutations = {
  SET(state, settings) {
    state.settings = settings;
  },
};
export const actions = {
  async get({ commit }) {
    try {
      const response = await this.$axios.get("home/settings");
      commit("SET", response.data.data.settings);
    } catch (e) {
      console.log("ERROR GETTING SETTINGS");
    }
  },
};
export const getters = {
  settings(state) {
    return state.settings;
  },
};
