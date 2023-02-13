export default {
  created() {
    this.$store.dispatch("settings/get"); // dispatch - вызывает actions
    this.$store.dispatch("brands/getBrands");
    this.$store.dispatch("home/get");
    this.$store.dispatch("products/getCategories");
    this.$store.dispatch("cart/get");
    this.$store.dispatch("projects/getProjects");
    this.$store.dispatch("settings/getPayment");
    this.$store.dispatch("settings/getDelivery");
    this.$store.dispatch("compare/get");
    if (this.$auth.$state.loggedIn) {
      this.$store.dispatch("favourites/get");
      this.$store.dispatch("addresses/get");
    }
  },
};
