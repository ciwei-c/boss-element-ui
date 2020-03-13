let code = `<template>
  <boss-slider v-model="value" show-input></boss-slider>
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
      codeDesc:"设置show-input属性会在右侧显示一个输入框",
      anchor:{
        id:"input",
        title:"带输入框"
      }
    }
  }
}