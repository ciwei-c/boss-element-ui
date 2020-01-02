<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。"
    :codeDesc="codeDesc"
  >
    <boss-button type="text" @click="open">点击打开 Message Box</boss-button>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  methods: {
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
</script>
