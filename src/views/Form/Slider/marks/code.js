let code = `<template>
  <boss-slider v-model="value" range :marks="marks"></boss-slider>
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
      codeDesc:"设置 marks 属性可以展示标记",
      anchor:{
        id:"marks",
        title:"展示标记"
      }
    }
  }
}