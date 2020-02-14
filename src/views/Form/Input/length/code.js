let code = `<template>
  <boss-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></boss-input>
  <div style="margin: 20px 0;"></div>
  <boss-input
    type="textarea"
    placeholder="请输入内容"
    v-model="textarea"
    maxlength="30"
    show-word-limit
  ></boss-input>
</template>
<script>
export default {
  data() {
    return {
      text: "",
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
      codeDesc:"maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。 ",
      anchor:{
        id:"length",
        title:"输入长度限制"
      }
    }
  }
}