<template>
  <UILink :link="'/art/' + picture.slug" class="picture block w-full">
    <div class="relative h-[400px] w-full lg:h-[550px]">
      <img
        :src="require('~/assets' + picture.img)"
        class="h-full w-full object-cover"
        alt=""
      />
      <div class="absolute right-3 top-3">
        <UIButton class="favourite">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.17008 12.6482L11.4677 18.505C11.6478 18.6725 11.7379 18.7563 11.8393 18.7907C11.9435 18.826 12.0565 18.826 12.1607 18.7907C12.2621 18.7563 12.3522 18.6725 12.5323 18.505L12.5323 18.505L18.8299 12.6482C20.6224 10.9812 20.8395 8.21923 19.3296 6.29262L19.0731 5.96523C17.2789 3.67583 13.7055 4.06236 12.4423 6.68247C12.2638 7.05288 11.7362 7.05288 11.5577 6.68247C10.2945 4.06236 6.72114 3.67583 4.92694 5.96522L4.67036 6.29262C3.16047 8.21923 3.37764 10.9812 5.17008 12.6482Z"
              stroke="#101820"
            />
          </svg>
        </UIButton>
      </div>
    </div>
    <div class="picture__bottom">
      <p class="name">{{ picture.name }}</p>
    </div>
  </UILink>
</template>

<script>
export default {
  props: {
    picture: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.picture {
  &__bottom {
    @apply relative border-b border-dark pb-2 pt-4;
    &:after {
      content: "";
      @apply absolute left-0 bottom-0 h-px w-0 bg-dark-blue transition-all duration-300 ease-in-out;
    }
  }
  &:hover {
    .picture__bottom {
      &:after {
        @apply w-full;
      }
    }
  }
}
.name {
  @apply overflow-hidden text-ellipsis  text-xs font-semibold uppercase lg:h-[20px] lg:text-sm;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
