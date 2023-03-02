<template>
  <div>
    <UIPath :path="path" />
    <div class="section-container">
      <h1
        class="heading-big section-title-distance mx-auto max-w-[1490px] text-center"
      >
        Ответы на ваши вопросы
      </h1>
    </div>
    <FAQ />
  </div>
</template>

<script>
export default {
  data: () => ({
    path: [
      {
        name: "ответы на частые вопросы",
        link: "/faq",
      },
    ],
  }),
};
</script>

<style></style>
