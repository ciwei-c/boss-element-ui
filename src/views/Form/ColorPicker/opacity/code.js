let code = `<template>
  <boss-color-picker v-model="color"  show-alpha></boss-color-picker>
</template>
<script>
export default {
  data() {
    return {
      color: "rgba(19, 206, 102, 0.8)"
    };
  }
};
</script>
`
export default {
  data() {
    return {
      code,
      codeDesc: "ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过show-alpha属性即可控制是否支持透明度的选择。",
      anchor: {
        id: "opacity",
        title: "透明度"
      }
    }
  }
}