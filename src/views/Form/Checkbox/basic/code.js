let code = `<template>
  <boss-checkbox v-model="checked">备选项</boss-checkbox>
</template>
<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}