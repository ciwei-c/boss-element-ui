let code = `<template>
  <boss-slider v-model="value" range show-stops :max="10"></boss-slider>
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
      codeDesc:"设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值",
      anchor:{
        id:"range",
        title:"范围选择"
      }
    }
  }
}