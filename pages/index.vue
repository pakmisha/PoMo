<template>
  <div>
    <Hero />
    <div class="relative">
      <PictureDetails />
      <div class="page-icon p left-0 top-0">
        <img src="~/assets/img/icons/p.svg" alt="" />
      </div>
      <div class="page-icon o -right-7 top-10">
        <img src="~/assets/img/icons/o.svg" alt="" />
      </div>
      <div class="page-icon m -bottom-5 -left-20 lg:left-10 lg:-bottom-10">
        <img src="~/assets/img/icons/m.svg" alt="" />
      </div>
      <div
        class="page-icon big-o -right-5 -bottom-16 lg:right-20 lg:-bottom-20 2xl:right-32 2xl:-bottom-40"
      >
        <img src="~/assets/img/icons/big-o.svg" alt="" />
      </div>
    </div>
    <About />
    <Category />
    <Brands />
    <PopularProducts />
    <Society />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
