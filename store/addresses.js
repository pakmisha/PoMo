export const state = () => ({
  addresses: [],
});
export const mutations = {
  SET(state, addresses) {
    state.addresses = addresses;
  },
  ADD(state, address) {
    state.addresses.push(address);
  },
  REMOVE(state, address) {
    state.addresses.splice(state.addresses.indexOf(address), 1);
  },
  TOGGLE(state, item) {
    state.addresses.map((i) => (i.is_default = false));
    const el = state.addresses.find((i) => i.id == item.id);
    el.is_default = true;
  },
  UPDATE(state, address) {},
};
export const actions = {
  async get({ commit, dispatch, state }) {
    const response = await this.$axios.get("addresses");
    commit("SET", response.data.data.addresses);
    const item = state.addresses.find((i) => i.is_default);
    dispatch("checkout/address", { item }, { root: true });
  },
  async add({ commit }, item) {
    try {
      const response = await this.$axios.post("addresses", {
        name: item.name,
        country: item.country,
        city: item.city,
        address: item.address,
        company: item.company,
        index: item.post_id,
        is_default: item.is_default,
      });
      commit("ADD", response.data.data.address);
      this._vm.$toast.success(response.data.message);
      //   this.reset();
    } catch (e) {
      this._vm.$toast.error(e.response.data.message);
    } finally {
      //   this.loading = false;
    }
  },
  async remove({ commit }, item) {
    if (!confirm("Вы действительно хотите удалить адрес?")) {
      return;
    }
    try {
      const response = await this.$axios.delete("addresses/" + item.id);
      // this.addresses.splice(this.addresses.indexOf(item), 1);
      commit("REMOVE", item);
      this._vm.$toast.success(response.data.message);
    } catch (e) {
      this._vm.$toast.error(e.response.data.message);
    }
  },
  async update({ commit }, item) {
    console.log(item);

    // this.loading = true;
    // try {
    //   const response = await this.$axios.put("addresses/" + item.id, {
    //     name: item.name,
    //     country: item.country,
    //     city: item.city,
    //     address: item.address,
    //     index: item.post_id,
    //   });
    //   this._vm.$toast.success(response.data.message);
    // } catch (e) {
    //   this._vm.$toast.error(e.response.data.message);
    // } finally {
    //   //   this.loading = false;
    // }
    // commit("UPDATE", item);
  },
  toggleDefault({ commit }, item) {
    commit("TOGGLE", item);
  },
};
export const getters = {
  addresses(state) {
    return state.addresses;
  },
};
