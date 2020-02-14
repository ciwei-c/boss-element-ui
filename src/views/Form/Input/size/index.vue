<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc=""
  >
    <div style="margin-bottom:10px">默认尺寸</div>
    <boss-input style="margin-bottom:10px" placeholder="请输入内容" suffix-icon="boss-icon-date" v-model="input1"></boss-input>
    <div style="margin-bottom:10px">大尺寸</div>
    <boss-input style="margin-bottom:10px" size="medium" placeholder="请输入内容" suffix-icon="boss-icon-date" v-model="input2"></boss-input>
    <div style="margin-bottom:10px">小尺寸</div>
    <boss-input style="margin-bottom:10px" size="small" placeholder="请输入内容" suffix-icon="boss-icon-date" v-model="input3"></boss-input>
    <div style="margin-bottom:10px">迷你尺寸</div>
    <boss-input style="margin-bottom:10px" size="mini" placeholder="请输入内容" suffix-icon="boss-icon-date" v-model="input4"></boss-input>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: ""
    };
  }
};
</script>