let code = `<template>
  <boss-input v-model="input" placeholder="请输入内容" disabled></boss-input>
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
      codeDesc:"通过 disabled 属性指定是否禁用 input 组件",
      anchor:{
        id:"disabled",
        title:"禁用的"
      }
    }
  }
}