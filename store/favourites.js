export const state = () => ({
  favourites: [],
});
export const mutations = {
  SET(state, favourites) {
    state.favourites = favourites;
  },
  ADD(state, item) {
    state.favourites.push(item);
  },
  REMOVE(state, id) {
    state.favourites.splice(state.favourites.indexOf(id), 1);
  },
};
export const actions = {
  async get({ commit }) {
    const response = await this.$axios.get("favourites");
    commit("SET", response.data.data.favourites);
  },
  async toggle({ commit }, product) {
    if (this.$auth.$state.loggedIn == true) {
      if (product.favourite_id == null) {
        try {
          const response = await this.$axios.post("favourites", {
            product_id: product.id,
          });
          commit("ADD", response.data.data.favourite);
          this._vm.$toast.success(response.data.message);
        } catch (e) {
          this._vm.$toast.error(e.response.data.message);
        }
      } else {
        if (!confirm("Вы действительно хотите удалить товар из избранного?")) {
          return;
        }
        try {
          const response = await this.$axios.delete(
            "favourites/" + product.favourite_id
          );
          commit("REMOVE", product.favourite_id);
          this._vm.$toast.success(response.data.message);
        } catch (e) {
          this._vm.$toast.error(e.response.data.message);
        }
      }
    } else {
      this._vm.$toast.warning(
        "Чтобы добавить товар в избранное Вам необходимо авторизоваться"
      );
    }
  },
};
export const getters = {
  favourites(state) {
    return state.favourites;
  },
};
