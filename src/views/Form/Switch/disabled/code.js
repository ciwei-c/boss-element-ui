let code = `<template>
  <boss-switch v-model="value" disabled></boss-switch>
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
      codeDesc:"绑定 v-model 到一个 Boolean 类型的变量",
      anchor:{
        id:"disabled",
        title:"禁用状态"
      }
    }
  }
}