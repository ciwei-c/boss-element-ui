<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="适用性广泛的通知栏"
    :codeDesc="codeDesc"
  >
    <boss-button plain @click="open1">可自动关闭</boss-button>
    <boss-button plain @click="open2">不会自动关闭</boss-button>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  methods: {
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: "标题名称",
        message: h(
          "i",
          { style: "color: teal" },
          "这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案"
        )
      });
    },

    open2() {
      this.$notify({
        title: "提示",
        message: "这是一条不会自动关闭的消息",
        duration: 0
      });
    }
  }
};
</script>
