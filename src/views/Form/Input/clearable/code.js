let code = `<template>
  <boss-input v-model="input" placeholder="请输入内容" clearable></boss-input>
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
      codeDesc:"使用clearable属性即可得到一个可清空的输入框",
      anchor:{
        id:"clearable",
        title:"可清空"
      }
    }
  }
}