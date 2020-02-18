let code = `<template>
  <boss-input-number v-model="num" :precision="2" :step="0.1" :max="10"></boss-input-number>
</template>
<script>
export default {
  data() {
    return {
      num: 1
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置 precision 属性可以控制数值精度，接收一个 Number。",
      anchor:{
        id:"precision",
        title:"精度"
      }
    }
  }
}