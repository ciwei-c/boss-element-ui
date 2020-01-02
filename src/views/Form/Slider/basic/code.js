let code = `<template>
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
</template>
<script>
export default {
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
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过设置绑定值自定义滑块的初始值",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}