let code = `<template>
  <boss-input v-model="input" placeholder="请输入内容" show-password></boss-input>
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
      codeDesc:"使用show-password属性即可得到一个可切换显示隐藏的密码框",
      anchor:{
        id:"password",
        title:"密码框"
      }
    }
  }
}