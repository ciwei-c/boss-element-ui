<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="在拖动滑块时，显示当前值"
  >
    <boss-row>
      <span>默认</span>
      <boss-slider v-model="value1"></boss-slider>
    </boss-row>
    <boss-row>
      <span>自定义初始值</span>
      <boss-slider v-model="value2"></boss-slider>
    </boss-row>
    <boss-row>
      <span>隐藏 Tooltip</span>
      <boss-slider v-model="value3" :show-tooltip="false"></boss-slider>
    </boss-row>
    <boss-row>
      <span>格式化 Tooltip</span>
      <boss-slider v-model="value4" :format-tooltip="formatTooltip"></boss-slider>
    </boss-row>
    <boss-row>
      <span>禁用</span>
      <boss-slider v-model="value5" disabled></boss-slider>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    }
  }
};
</script>