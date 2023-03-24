export const state = () => ({
  items: [],
  total: null,
  quantity: 1,
  color: null,
  in_stock: false,
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
    const indexDelete = state.items.findIndex((item) => ids.includes(item.id));
    const newArray = state.items.splice(indexDelete, 1);

    console.log(state.items);
    console.log(ids);
    console.log(indexDelete);
    console.log(newArray);
  },
  QUANTITY(state, item) {
    const current = state.items.find((current) => current.id == item.id);
    if (current) {
      state.items[state.items.indexOf(current)]["quantity"] = item.quantity;
      state.items[state.items.indexOf(current)]["total_price"] =
        item.total_price;
    }
    state.quantity = item.quantity;
  },
  TOTAL(state, total) {
    state.total = total;
  },
  COLOR(state, color) {
    state.color = color;
  },
  CHECK_COLOR(state, color) {
    const item = state.items.find((i) => i.product.color_id == color.id);
    if (item) {
      state.in_stock = true;
    } else {
      state.in_stock = false;
    }
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
  setColor({ commit }, color) {
    commit("COLOR", color);
    commit("CHECK_COLOR", color);
  },
};
export const getters = {
  items(state) {
    return state.items;
  },
  total(state) {
    return state.total;
  },
  quantity(state) {
    return state.quantity;
  },
  color(state) {
    return state.color;
  },
  in_stock(state) {
    return state.in_stock;
  },
};
