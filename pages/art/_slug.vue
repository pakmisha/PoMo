<template>
  <div>
    <UIPath :path="path" />
    <ArtAboutPicture :picture="picture" />
    <ArtPictureTabs />
    <ArtOtherPictures />
  </div>
</template>

<script>
export default {
  data: () => ({
    path: [
      {
        name: "Каталог картин",
        link: "/artCollections",
      },
    ],
  }),
};
</script>

<style></style>
