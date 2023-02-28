<template>
  <div id="app">
    <MobileFilters />
    <MobileCategory />
    <CartSidebar />
    <MobileNav />
    <!-- <UILoader /> -->
    <Nav />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import AppMixins from "~/mixins/app";
export default {
  mixins: [AppMixins],
};
</script>

<style></style>
