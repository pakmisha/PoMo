<template>
  <div>
    <div class="mb-10">
      <h3 class="mb-5 text-sm font-medium uppercase text-dark">Наличие</h3>
      <div class="space-y-2">
        <div class="flex items-center">
          <input type="checkbox" id="check-1" class="input-checkbox mr-2" />
          <label class="text-sm text-dark" for="check-1">В наличии</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="check-2" class="input-checkbox mr-2" />
          <label class="text-sm text-dark" for="check-2">На заказ</label>
        </div>
      </div>
    </div>
    <div>
      <h3 class="mb-5 text-sm font-medium uppercase text-dark">Цена</h3>
      <div class="w-full">
        <div class="range-slider">
          <div class="relative pt-7">
            <input
              type="range"
              class="input-range"
              min="0"
              max="1000"
              step="1"
              v-model="sliderMin"
            />

            <input
              type="range"
              class="input-range"
              min="0"
              max="1000"
              step="1"
              v-model="sliderMax"
            />
          </div>
          <div class="flex">
            <div class="mr-3 w-1/2">
              <input
                type="number"
                class="input-range-number"
                min="0"
                max="1000"
                step="1"
                v-model="sliderMin"
              />
            </div>

            <div class="w-1/2">
              <input
                type="number"
                class="input-range-number"
                min="0"
                max="1000"
                step="1"
                v-model="sliderMax"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    minAngle: 0,
    maxAngle: 1000,
  }),
  computed: {
    sliderMin: {
      get: function () {
        var val = parseInt(this.minAngle);
        return val;
      },
      set: function (val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
      },
    },
    sliderMax: {
      get: function () {
        var val = parseInt(this.maxAngle);
        return val;
      },
      set: function (val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
      },
    },
  },
};
</script>

<style></style>
