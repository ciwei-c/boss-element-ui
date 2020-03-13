let code = `<template>
  <boss-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></boss-switch>
  <boss-switch
    style="display: block"
    v-model="value2"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="按月付费"
    inactive-text="按年付费"
  ></boss-switch>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
      value2: true
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"使用active-text属性与inactive-text属性来设置开关的文字描述。",
      anchor:{
        id:"text",
        title:"文字描述"
      }
    }
  }
}