let code = `<template>
  <boss-slider v-model="value" vertical height="200px"></boss-slider>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性",
      anchor:{
        id:"vertical",
        title:"竖向模式"
      }
    }
  }
}