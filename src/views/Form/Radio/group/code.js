let code = `<template>
  <boss-radio-group v-model="radio">
    <boss-radio :label="3">备选项</boss-radio>
    <boss-radio :label="6">备选项</boss-radio>
    <boss-radio :label="9">备选项</boss-radio>
  </boss-radio-group>
</template>
<script>
export default {
  data() {
    return {
      radio: 3
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"结合boss-radio-group元素和子元素boss-radio可以实现单选组，在boss-radio-group中绑定v-model，在boss-radio中设置好label即可，无需再给每一个boss-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。      ",
      anchor:{
        id:"group",
        title:"单选框组"
      }
    }
  }
}