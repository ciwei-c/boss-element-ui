<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="用于输入多行文本信息，通过将 type 属性的值指定为 textarea。"
  >
    <boss-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></boss-input>
    <div style="margin: 20px 0;"></div>
    <boss-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea2"
    ></boss-input>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      textarea1: "",
      textarea2: ""
    };
  }
};
</script>