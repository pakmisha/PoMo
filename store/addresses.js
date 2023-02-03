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
  UPDATE(state, address) {},
};
export const actions = {
  async get({ commit }) {
    const response = await this.$axios.get("addresses");
    commit("SET", response.data.data.addresses);
  },
  async add({ commit }, item) {
    try {
      const response = await this.$axios.post("addresses", {
        name: item.name,
        country: item.country,
        city: item.city,
        address: item.address,
        index: item.post_id,
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
};
export const getters = {
  addresses(state) {
    return state.addresses;
  },
};
