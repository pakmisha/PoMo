<!-- <template>
  <div class="swiper" :ref="'swiper_thumbs' + _uid">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: {},
    },
  },
  data: () => ({
    instance: null,
  }),

  mounted() {
    this.instance = this.$swiper(
      this.$refs["swiper_thumbs" + this._uid],
      this.options
    );
  },
  methods: {
    getInstance() {
      return this.instance;
    },
  },
};
</script>

<style></style> -->
