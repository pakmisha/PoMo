export const state = () => ({
  items: [],
});
export const mutations = {
  SET(state, items) {
    state.items = items;
  },
  ADD(state, product) {
    const item = state.items.find((item) => item.id == product.id);
    if (item) {
      state.items[state.items.indexOf(item)]["quantity"] += product.quantity;
    } else {
      state.items.push(product);
    }
  },
  REMOVE(state, ids, item) {
    state.items.splice(state.items.indexOf(ids), 1);
  },
};
export const actions = {
  async get({ commit }) {
    const response = await this.$axios.get("cart");
    const items = response.data.data.items;
    commit("SET", items);
  },
  async add({ commit, dispatch }, item) {
    try {
      const response = await this.$axios.post("cart", {
        id: item.product_id,
        color_id: item.color_id,
        quantity: item.quantity,
      });
      const cart = response.data.data.item;
      commit("ADD", cart);
      dispatch("get");
      this._vm.$toast.success(response.data.message);
    } catch (e) {
      this._vm.$toast.error(e.response.data.message);
    }
  },
  async remove({ commit, dispatch, state }, { items, item }) {
    try {
      const ids = [];
      for (let i of items) {
        state.items[i] = ids.push(i.id);
      }
      const response = await this.$axios.post("cart/delete", {
        ids: ids > 1 ? [product.id] : ids,
      });
      commit("REMOVE", { ids, item });
      this._vm.$toast.success(response.data.message);
    } catch (e) {
      this._vm.$toast.error(e.response.data.message);
    }
  },
};
export const getters = {
  items(state) {
    return state.items;
  },
};
