export const state = () => ({
  address: null,
  delivery: null,
});
export const mutations = {
  ADDRESS(state, item) {
    state.address = item;
  },
  DELIVERY(state, item) {
    state.delivery = item;
  },
};
export const actions = {
  address({ commit }, item) {
    commit("ADDRESS", item);
  },
  delivery({ commit }, item) {
    commit("DELIVERY", item);
  },
};
export const getters = {
  address(state) {
    return state.address;
  },
  delivery(state) {
    return state.delivery;
  },
};
