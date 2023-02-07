<template>
  <div
    class="w-full border border-grey bg-white px-5 py-5 md:px-10 md:py-10 lg:px-20 lg:py-20"
  >
    <div class="flex items-center border-b border-grey py-3">
      <div class="w-1/2 text-xs uppercase lg:text-sm">Локация</div>
      <div class="w-1/2 text-sm font-medium text-grey">
        {{ project.location[$i18n.locale] }}
      </div>
    </div>
    <div class="flex items-center border-b border-grey py-3">
      <div class="w-1/2 text-xs uppercase lg:text-sm">Год реализации</div>
      <div class="w-1/2 text-sm font-medium text-grey">
        {{ project.year }}
      </div>
    </div>
    <div class="flex items-center border-b border-grey py-3">
      <div class="w-1/2 text-xs uppercase lg:text-sm">Тип здания</div>
      <div class="w-1/2 text-sm font-medium text-grey">
        {{ project.location[$i18n.locale] }}
      </div>
    </div>
    <div class="flex items-center border-b border-grey py-3">
      <div class="w-1/2 text-xs uppercase lg:text-sm">Площадь</div>
      <div class="w-1/2 text-sm font-medium text-grey">
        {{ project.square }} м2
      </div>
    </div>
    <div class="flex items-center border-b border-grey py-3">
      <div class="w-1/2 text-xs uppercase lg:text-sm">Услуга</div>
      <div class="w-1/2 text-sm font-medium text-grey">
        {{ project.service.title[$i18n.locale] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  data: () => ({}),
};
</script>

<style></style>
