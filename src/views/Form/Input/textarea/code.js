let code = `<template>
  <boss-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></boss-input>
</template>
<script>
export default {
  data() {
    return {
      textarea: ""
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"文本域高度可通过 rows 属性控制",
      anchor:{
        id:"textarea",
        title:"文本域"
      }
    }
  }
}