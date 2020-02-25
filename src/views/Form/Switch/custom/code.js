let code = `<template>
  <boss-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></boss-switch>
</template>
<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"可以使用active-color属性与inactive-color属性来设置开关的背景色。",
      anchor:{
        id:"custom",
        title:"自定义颜色"
      }
    }
  }
}