<template>
  <div id="app">
    <ModalsRequestModal />
    <ModalsOrderModal />
    <ModalsSubmitModal />
    <MobileFilters />
    <MobileCategory />
    <CartSidebar />
    <MobileNav />
    <Nav />
    <transition name="slide-fade" mode="out-in">
      <main>
        <Nuxt />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script>
export default {
  transition: {
    name: "slide-fade",
    mode: "out-in",
  },
};
</script>

<style></style>
