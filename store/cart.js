export const state = () => ({
  items: [],
  total: null,
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
  REMOVE(state, ids) {
    if (ids.length == 1) {
      state.items.splice(state.items.indexOf(ids), 1);
    } else {
      state.items = state.items.filter((item) => item.id == ids);
    }
  },
  QUANTITY(state, item) {
    const current = state.items.find((current) => current.id == item.id);
    if (current) {
      state.items[state.items.indexOf(current)]["quantity"] = item.quantity;
      state.items[state.items.indexOf(current)]["total_price"] =
        item.total_price;
    }
  },
  TOTAL(state, total) {
    state.total = total;
  },
};
export const actions = {
  async get({ commit }) {
    const response = await this.$axios.get("cart");
    const items = response.data.data.items;
    commit("SET", items);
    commit("TOTAL", response.data.data.total);
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
  async quantity({ commit, state }, item) {
    const response = await this.$axios.put("cart/" + item.id, {
      quantity: item.quantity,
    });
    commit("QUANTITY", {
      id: response.data.data.item.id,
      quantity: response.data.data.item.quantity,
      total_price: response.data.data.item.total_price,
    });
    commit("TOTAL", response.data.data.total);
  },
  async remove({ commit }, ids) {
    if (!confirm("Вы действительно хотите удалить товар(ы)?")) {
      return;
    }
    try {
      const response = await this.$axios.post("cart/delete", {
        ids: ids,
      });
      commit("REMOVE", ids);
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
  total(state) {
    return state.total;
  },
};
