<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc=""
  >
    <boss-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></boss-input>
    <div style="margin: 20px 0;"></div>
    <boss-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="30"
      show-word-limit
    ></boss-input>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      text: "",
      textarea: ""
    };
  }
};
</script>