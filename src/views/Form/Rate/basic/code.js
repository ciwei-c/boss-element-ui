let code = `<template>
  <boss-row>
    <boss-row>默认不区分颜色</boss-row>
    <boss-rate v-model="value1"></boss-rate>
  </boss-row>
  <boss-row>
    <boss-row>区分颜色</boss-row>
    <boss-rate v-model="value2" :colors="colors"></boss-rate>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用colors属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。      ",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}