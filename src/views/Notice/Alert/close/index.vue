<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="自定义关闭按钮为文字或其他符号。"
    :codeDesc="codeDesc"
  >
    <boss-row>
      <boss-alert title="不可关闭的 alert" type="success" :closable="false"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="自定义 close-text" type="info" close-text="知道了"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="设置了回调的 alert" type="warning" @close="hello"></boss-alert>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  methods: {
    hello() {
      alert("Hello World!");
    }
  }
};
</script>
