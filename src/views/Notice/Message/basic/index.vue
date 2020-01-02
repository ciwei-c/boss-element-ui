<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="基础的按钮用法。"
    :codeDesc="codeDesc"
  >
    <boss-button :plain="true" @click="open">打开消息提示</boss-button>
    <boss-button :plain="true" @click="openVn">VNode</boss-button>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  methods: {
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
  }
};
</script>
