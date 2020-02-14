<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc=""
  >
    <boss-input v-model="input" placeholder="请输入内容" disabled></boss-input>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      input: ''
    }
  }
};
</script>