let code = `<template>
  <boss-tooltip :content="'Switch value: ' + value" placement="top">
    <boss-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-value="100"
      inactive-value="0"
    ></boss-switch>
  </boss-tooltip>
</template>
<script>
export default {
  data() {
    return {
      value: "100"
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。",
      anchor:{
        id:"value",
        title:"扩展value"
      }
    }
  }
}