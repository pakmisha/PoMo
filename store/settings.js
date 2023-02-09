export const state = () => ({
  settings: null,
  delivery: null,
  payment: null,
});
export const mutations = {
  SET(state, settings) {
    state.settings = settings;
  },
  SET_DELIVERY(state, item) {
    state.delivery = item;
  },
  SET_PAYMENT(state, item) {
    state.payment = item;
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

  async getDelivery({ commit }) {
    try {
      const response = await this.$axios.get("home/delivery-methods");
      commit("SET_DELIVERY", response.data.delivery_methods);
    } catch (e) {
      console.log("ERROR GETTING DELIVERY_METHODS");
    }
  },
  async getPayment({ commit }) {
    try {
      const response = await this.$axios.get("home/payment-methods");
      commit("SET_PAYMENT", response.data.payment_methods);
    } catch (e) {
      console.log("ERROR GETTING PAYMENT_METHODS");
    }
  },
};
export const getters = {
  settings(state) {
    return state.settings;
  },
  delivery(state) {
    return state.delivery;
  },
  payment(state) {
    return state.payment;
  },
};
