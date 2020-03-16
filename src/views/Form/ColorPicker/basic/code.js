let code = `<template>
  <boss-row>
    <boss-row>有默认值</boss-row>
    <boss-color-picker v-model="color1"></boss-color-picker>
  </boss-row>
  <boss-row>
    <boss-row>无默认值</boss-row>
    <boss-color-picker v-model="color2"></boss-color-picker>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      color1: "#409EFF",
      color2: null
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}