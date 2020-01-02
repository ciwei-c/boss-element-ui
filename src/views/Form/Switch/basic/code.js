let code = `<template>
  <boss-radio v-model="radio" label="1">备选项</boss-radio>
  <boss-radio v-model="radio" label="2">备选项</boss-radio>
</template>
<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"绑定 v-model 到一个 Boolean 类型的变量。可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}