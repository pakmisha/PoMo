<template>
  <div>
    <UIPath :path="path" />
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        услуги
      </h1>
    </div>
    <Services />
    <ServicesGallery />
  </div>
</template>

<script>
export default {
  data: () => ({
    path: [
      {
        name: "услуги",
        link: "/services",
      },
    ],
  }),
};
</script>

<style></style>
