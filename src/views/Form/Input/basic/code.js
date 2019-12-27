let code = `<template>
  <boss-input v-model="input" placeholder="请输入内容"></boss-input>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"要使用它，只需要在 boss-input 元素中使用 v-model 绑定变量即可，变量的初始值即为默认值。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}