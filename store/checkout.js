export const state = () => ({
  address: null,
  delivery: null,
  payment: null,
});
export const mutations = {
  ADDRESS(state, { item }) {
    state.address = item;
  },
  DELIVERY(state, item) {
    state.delivery = item;
  },
  PAYMENT(state, item) {
    state.payment = item;
  },
};
export const actions = {
  address({ commit }, item) {
    commit("ADDRESS", item);
  },
  delivery({ commit }, item) {
    commit("DELIVERY", item);
  },
  payment({ commit }, item) {
    commit("PAYMENT", item);
  },
};
export const getters = {
  address(state) {
    return state.address;
  },
  delivery(state) {
    return state.delivery;
  },
  payment(state) {
    return state.payment;
  },
};
