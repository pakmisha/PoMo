export default {
  created() {
    this.$store.dispatch("settings/get"); // dispatch - вызывает actions
    this.$store.dispatch("brands/get");
    this.$store.dispatch("products/getProducts");
    this.$store.dispatch("favourites/get");
    this.$store.dispatch("home/get");
    this.$store.dispatch("products/getCategories");
    this.$store.dispatch("cart/get");
    this.$store.dispatch("addresses/get");
    this.$store.dispatch("projects/getProjects");
  },
};
