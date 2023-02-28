<template>
  <div class="counter">
    <UIButton :disabled="color == null" class="counter-btn" @click="count--">
      <svg
        width="12"
        height="1"
        viewBox="0 0 12 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.33203 0.5H10.6654"
          stroke="#101820"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </UIButton>
    <p>{{ count }}</p>
    <UIButton :disabled="color == null" class="counter-btn" @click="count++">
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 3.83398V13.1673"
          stroke="#101820"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M3.33203 8.5H12.6654"
          stroke="#101820"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </UIButton>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
      required: false,
    },
    available: {
      type: Number,
    },
    color: {
      type: Object,
    },
  },

  data() {
    return { count: this.value };
  },

  watch: {
    count(value) {
      if (value < 1) {
        this.count = 1;
      }
      if (value > this.available) {
        this.count = this.available;
      }
      this.$emit("change", this.count);
    },
  },
  methods: {
    getValue() {
      this.$emit("counter", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
