let code = `<template>
  <div style="display:flex">
    <div style="flex:1">
      <h4>有默认值</h4>
      <boss-color-picker v-model="color1"></boss-color-picker>
    </div>
    <div style="flex:1">
      <h4>无默认值</h4>
      <boss-color-picker v-model="color2"></boss-color-picker>
    </div>
  </div>
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