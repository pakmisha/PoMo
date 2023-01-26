export default {
  created() {
    this.$store.dispatch("settings/get"); // dispatch - вызывает actions
    this.$store.dispatch("brands/get");
    this.$store.dispatch("products/getProducts");
    this.$store.dispatch("favourites/get");
  },
};
